<script setup lang="ts">
defineProps({
  month: String,
  year: String,
  monthlyIncome: String,
  type: {
    default: 'white'
  }
})
</script>

<template>
  <div
    v-if="type == 'white'"
    class="bg-gray-50 flex flex-col justify-center items-start gap-2 p-4 flex-1 rounded-2xl"
  >
    <h4 class="flex">{{ month }} {{ year }}</h4>
    <p class="text-primary-800 text-2xl font-bold leading-snug">{{ monthlyIncome }}</p>
  </div>

  <div
    v-else-if="type == 'primary'"
    class="bg-primary-800 text-white flex flex-col justify-center items-start gap-2 p-4 flex-1 rounded-2xl"
  >
    <h4 class="flex">{{ month }} {{ year }}</h4>
    <p class="text-white text-2xl font-bold leading-snug">{{ monthlyIncome }}</p>
  </div>
</template>
