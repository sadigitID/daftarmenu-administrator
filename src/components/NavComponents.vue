<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  icon: Object,
  activeIcon: Object,
  title: String,
  isActive: Boolean
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="flex items-center justify-center px-4 py-1 rounded-3xl"
      :class="[isActive && 'bg-primary-50']"
    >
      <component class="w-8 h-8" :is="isActive ? activeIcon : icon" />
    </div>
    <span class="text-sm">{{ title }}</span>
  </div>
</template>
