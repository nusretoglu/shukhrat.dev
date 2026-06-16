<template>
  <Icon :name="iconName" class="h-5 w-5" />
</template>

<script setup>
const props = defineProps({
  name: { type: String, required: true },
})

// Map our short keys to Iconify icon names.
const map = {
  github: 'simple-icons:github',
  linkedin: 'simple-icons:linkedin',
  x: 'simple-icons:x',
  mail: 'lucide:mail',
}

const iconName = computed(() => map[props.name] ?? 'lucide:link')
</script>
