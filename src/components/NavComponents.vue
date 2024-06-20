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
      <component class="w-6 h-6 md:w-8 md:h-8" :is="isActive ? activeIcon : icon" />
    </div>
    <span class="text-xs mt-1 font-medium md:text-sm md:mt-0">{{ title }}</span>
  </div>
</template>
