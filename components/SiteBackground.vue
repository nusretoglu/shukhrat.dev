<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <!-- Aurora mesh: layered soft gradient blobs drifting on independent timings -->
    <div class="aurora">
      <div class="aurora__blob aurora__blob--1 animate-aurora-a"></div>
      <div class="aurora__blob aurora__blob--2 animate-aurora-b [animation-delay:-8s]"></div>
      <div class="aurora__blob aurora__blob--3 animate-aurora-a [animation-delay:-16s]"></div>
    </div>

    <!-- Conic mesh wash that slowly pans, adds depth behind the blobs -->
    <div class="mesh-wash animate-mesh-pan"></div>

    <!-- Fine dot grid texture -->
    <div
      class="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
      style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 38px 38px;"
    ></div>

    <!-- Film grain overlay (animated, very subtle) -->
    <div class="grain"></div>

    <!-- Top + bottom vignette so content edges stay legible -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-transparent to-slate-50/60 dark:from-[#070710]/60 dark:via-transparent dark:to-[#070710]/80"></div>
  </div>
</template>

<script setup>
// Purely decorative, no logic. All motion lives in CSS and respects
// prefers-reduced-motion via the global rule in main.css.
</script>
