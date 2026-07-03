<template>
  <canvas
    v-show="active"
    ref="canvas"
    class="pointer-events-none fixed inset-0 -z-10"
    aria-hidden="true"
  ></canvas>
</template>

<script setup>
// Cursor-reactive constellation network on a transparent canvas, layered over
// the aurora mesh. Particles drift and link to nearby neighbours; on fine
// pointers they also link to the cursor.
//
// Guards:
//  - prefers-reduced-motion → renders ONE static frame (no motion, still visible)
//  - particle count scales with viewport area (capped), lighter on touch
//  - cursor linking only on fine pointers
//  - paused while the tab is hidden; DPR-aware; debounced resize; full cleanup

const canvas = ref(null)
const active = ref(false)

let ctx = null
let raf = 0
let resizeTimer = 0
let running = false
let staticMode = false

let w = 0
let h = 0
const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2)

let particles = []
let finePointer = false
const mouse = { x: -9999, y: -9999 }

let colors = darkColors()
function darkColors() {
  return { link: '239,51,70', linkBase: 0.4, cursor: '255,138,147', cursorBase: 0.85, dot: '#ff8a93', dotAlpha: 1 }
}
function lightColors() {
  return { link: '168,4,23', linkBase: 0.34, cursor: '200,1,26', cursorBase: 0.7, dot: '#c8011a', dotAlpha: 0.92 }
}
function syncColors() {
  colors = document.documentElement.classList.contains('dark') ? darkColors() : lightColors()
}

function particleCount() {
  const target = Math.round((w * h) / 15000)
  const cap = finePointer ? 120 : 70
  return Math.max(30, Math.min(target, cap))
}

function seed() {
  const n = particleCount()
  particles = Array.from({ length: n }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
  }))
}

function resize() {
  if (!canvas.value) return
  w = window.innerWidth
  h = window.innerHeight
  canvas.value.width = w * dpr
  canvas.value.height = h * dpr
  canvas.value.style.width = w + 'px'
  canvas.value.style.height = h + 'px'
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  seed()
  if (staticMode) drawFrame()
}

const LINK = 152
const CURSOR = 210

function drawFrame() {
  ctx.clearRect(0, 0, w, h)
  const P = particles

  ctx.lineWidth = 0.85
  for (let i = 0; i < P.length; i++) {
    const a = P[i]
    for (let j = i + 1; j < P.length; j++) {
      const b = P[j]
      const dx = a.x - b.x
      const dy = a.y - b.y
      const d = Math.hypot(dx, dy)
      if (d < LINK) {
        ctx.strokeStyle = `rgba(${colors.link},${colors.linkBase * (1 - d / LINK)})`
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
    }
    if (finePointer) {
      const dmx = a.x - mouse.x
      const dmy = a.y - mouse.y
      const dm = Math.hypot(dmx, dmy)
      if (dm < CURSOR) {
        ctx.strokeStyle = `rgba(${colors.cursor},${colors.cursorBase * (1 - dm / CURSOR)})`
        ctx.lineWidth = 1.1
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.stroke()
        ctx.lineWidth = 0.85
      }
    }
  }

  ctx.fillStyle = colors.dot
  ctx.globalAlpha = colors.dotAlpha
  ctx.shadowColor = colors.dot
  ctx.shadowBlur = 6
  for (const p of P) {
    ctx.beginPath()
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.shadowBlur = 0
  ctx.globalAlpha = 1
}

function frame() {
  if (!running) return
  const P = particles
  for (const p of P) {
    p.x += p.vx
    p.y += p.vy
    if (p.x < 0 || p.x > w) p.vx *= -1
    if (p.y < 0 || p.y > h) p.vy *= -1
  }
  drawFrame()
  raf = requestAnimationFrame(frame)
}

function start() {
  if (running || staticMode) return
  running = true
  raf = requestAnimationFrame(frame)
}
function stop() {
  running = false
  cancelAnimationFrame(raf)
}

function onMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}
function onLeave() {
  mouse.x = -9999
  mouse.y = -9999
}
function onResize() {
  clearTimeout(resizeTimer)
  resizeTimer = window.setTimeout(resize, 200)
}
function onVisibility() {
  if (document.hidden) stop()
  else start()
}
const themeObserver = typeof MutationObserver !== 'undefined' ? new MutationObserver(syncColors) : null

onMounted(() => {
  finePointer = window.matchMedia('(pointer: fine)').matches
  staticMode = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  ctx = canvas.value.getContext('2d')
  active.value = true
  syncColors()
  resize()
  themeObserver?.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  if (staticMode) {
    // Honour reduced motion: one still frame, no listeners, no loop.
    drawFrame()
    return
  }

  if (finePointer) {
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
  }
  window.addEventListener('resize', onResize)
  document.addEventListener('visibilitychange', onVisibility)
  start()
})

onBeforeUnmount(() => {
  stop()
  clearTimeout(resizeTimer)
  window.removeEventListener('pointermove', onMove)
  document.removeEventListener('pointerleave', onLeave)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('visibilitychange', onVisibility)
  themeObserver?.disconnect()
})
</script>
