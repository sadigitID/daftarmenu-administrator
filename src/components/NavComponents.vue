<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  icon: Object,
  activeIcon: Object,
  title: String,
  isActive: Boolean
})

const emit = defineEmits(['click'])
</script>

<template>
  <div class="flex flex-col items-center">
    <button
      @click="$emit('click')"
      :class="[
        'py-1 px-4 rounded-3xl flex items-center justify-center',
        isActive ? 'bg-primary-50' : ''
      ]"
    >
      <div class="h-8 w-8">
        <component :is="isActive ? activeIcon : icon" />
      </div>
    </button>
    <span class="text-sm">{{ title }}</span>
  </div>
</template>
