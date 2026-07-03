<template>
  <div>
    <!-- Blog -->
    <section id="blog" class="py-28">
      <div class="container mx-auto px-6">
        <SectionHeading eyebrow="Insights" center class="mb-14">
          Latest <span class="gradient-text">articles</span>.
        </SectionHeading>

        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="(post, i) in posts"
            :key="post.title"
            v-reveal="i * 90"
            class="glass-card group overflow-hidden rounded-[1.75rem] p-0"
          >
            <div class="relative h-52 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
              <div class="grid h-full place-items-center font-display text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-600">
                Article cover
              </div>
              <span class="absolute left-5 top-5 rounded-full bg-gradient-to-r from-accent-600 to-accent-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                {{ post.date }}
              </span>
            </div>
            <div class="p-7">
              <h3 class="mb-3 font-display text-lg font-bold leading-tight text-slate-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-300">
                {{ post.title }}
              </h3>
              <p class="mb-6 text-sm leading-relaxed text-muted">{{ post.excerpt }}</p>
              <a href="#" class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-600 transition-all hover:gap-3 dark:text-accent-300">
                Read story
                <Icon name="lucide:arrow-right" class="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-28">
      <div class="container mx-auto px-6">
        <div class="grid gap-16 lg:grid-cols-5">
          <!-- Intro + channels -->
          <div class="lg:col-span-2">
            <SectionHeading eyebrow="Contact">
              Let's <span class="gradient-text">work together</span>.
            </SectionHeading>
            <p v-reveal="80" class="mb-10 mt-7 text-lg text-muted">
              Have a vision? I have the tools to build it. Reach out for consultations or project inquiries.
            </p>

            <ul class="space-y-4">
              <li v-for="(c, i) in channels" :key="c.label + c.value" v-reveal="i * 80">
                <a
                  :href="c.href"
                  :target="c.href.startsWith('http') ? '_blank' : undefined"
                  :rel="c.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                  class="glass-card flex items-center gap-4 rounded-2xl p-4"
                >
                  <span class="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-700/20 text-accent-600 dark:text-accent-300">
                    <SocialIcon :name="c.icon" />
                  </span>
                  <span>
                    <span class="block text-xs font-semibold uppercase tracking-wider text-muted">{{ c.label }}</span>
                    <span class="font-medium text-slate-900 dark:text-white">{{ c.value }}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Form -->
          <div v-reveal="120" class="lg:col-span-3">
            <form @submit.prevent="handleSubmit" novalidate class="glass-card space-y-6 rounded-[2rem] p-8 md:p-10">
              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label for="cf-name" class="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">Full name</label>
                  <input
                    id="cf-name" v-model="form.name" type="text" placeholder="John Doe"
                    :class="fieldClass(errors.name)"
                    :aria-invalid="!!errors.name" :aria-describedby="errors.name ? 'err-name' : undefined"
                  />
                  <span v-if="errors.name" id="err-name" class="mt-2 block text-xs font-medium text-rose-500">{{ errors.name }}</span>
                </div>
                <div>
                  <label for="cf-email" class="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">Email address</label>
                  <input
                    id="cf-email" v-model="form.email" type="email" placeholder="john@example.com"
                    :class="fieldClass(errors.email)"
                    :aria-invalid="!!errors.email" :aria-describedby="errors.email ? 'err-email' : undefined"
                  />
                  <span v-if="errors.email" id="err-email" class="mt-2 block text-xs font-medium text-rose-500">{{ errors.email }}</span>
                </div>
              </div>

              <div>
                <label for="cf-subject" class="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">Subject</label>
                <input
                  id="cf-subject" v-model="form.subject" type="text" placeholder="e.g. Website redesign"
                  :class="fieldClass(errors.subject)"
                  :aria-invalid="!!errors.subject" :aria-describedby="errors.subject ? 'err-subject' : undefined"
                />
                <span v-if="errors.subject" id="err-subject" class="mt-2 block text-xs font-medium text-rose-500">{{ errors.subject }}</span>
              </div>

              <div>
                <label for="cf-message" class="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">Message</label>
                <textarea
                  id="cf-message" v-model="form.message" rows="5" placeholder="Tell me about your project..."
                  :class="fieldClass(errors.message)"
                  :aria-invalid="!!errors.message" :aria-describedby="errors.message ? 'err-message' : undefined"
                ></textarea>
                <span v-if="errors.message" id="err-message" class="mt-2 block text-xs font-medium text-rose-500">{{ errors.message }}</span>
              </div>

              <button v-magnetic="14" :disabled="isSubmitting" class="btn-primary w-full">
                <span v-if="isSubmitting">Sending…</span>
                <span v-else>Send message</span>
              </button>

              <p
                v-if="submitSuccess"
                role="status"
                class="rounded-xl bg-emerald-500/10 px-4 py-3 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400"
              >
                Thanks! Your message has been sent. I'll get back to you soon.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { contactSchema } from '~/utils/schemas'

const posts = [
  { title: 'Scaling Nuxt 3 Applications for Enterprise', date: '21 Sep 2026', excerpt: 'Architectural patterns for managing large-scale Vue applications with TypeScript.' },
  { title: 'Atomic Design in Modern Frontend', date: '18 Sep 2026', excerpt: 'How to build scalable component libraries that developers actually love to use.' },
  { title: 'Performance Optimization Checklist', date: '15 Sep 2026', excerpt: 'Key strategies for achieving 100/100 Lighthouse scores in 2026.' },
]

const channels = [
  { label: 'Email', value: 'shuhratteshayev2000@gmail.com', icon: 'mail', href: 'mailto:shuhratteshayev2000@gmail.com' },
  { label: 'Phone', value: '+998 90 018 47 50', icon: 'phone', href: 'tel:+998900184750' },
  { label: 'Phone', value: '+998 97 989 75 76', icon: 'phone', href: 'tel:+998979897576' },
  { label: 'Location', value: 'Bukhara, Uzbekistan', icon: 'location', href: '#' },
  { label: 'Born', value: 'June 8, 2000', icon: 'calendar', href: '#' },
  { label: 'LinkedIn', value: 'in/nusretoglu', icon: 'linkedin', href: 'https://www.linkedin.com/in/nusretoglu/' },
  { label: 'GitHub', value: 'github.com/nusretoglu', icon: 'github', href: 'https://github.com/nusretoglu' },
]

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const fieldClass = (hasError) => [
  'w-full rounded-xl border bg-white/70 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400',
  'dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500',
  hasError
    ? 'border-rose-400 focus:ring-2 focus:ring-rose-400/40'
    : 'border-slate-200 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30 dark:border-white/10',
]

const handleSubmit = async () => {
  Object.keys(errors).forEach((key) => delete errors[key])
  submitSuccess.value = false

  const result = contactSchema.safeParse(form)
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errors[issue.path[0]] = issue.message
    })
    return
  }

  isSubmitting.value = true
  try {
    // Placeholder: wire this to a real endpoint (e.g. /api/contact) later.
    await new Promise((resolve) => setTimeout(resolve, 1200))
    submitSuccess.value = true
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
  } catch (e) {
    console.error('Submission error:', e)
  } finally {
    isSubmitting.value = false
  }
}
</script>
