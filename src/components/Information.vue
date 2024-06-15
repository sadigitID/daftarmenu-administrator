<script setup lang="ts">
import { Vec } from '@/components/icons/'

defineProps({
  icon: Object,
  title: String,
  desc: String,
  value: String,
  title2: String,
  desc2: String,
  value2: String,
  type: {
    type: String,
    default: 'green'
  }
})
</script>
<template>
  <div
    v-if="type === 'green'"
    class="flex p-4 flex-col justify-center items-center gap-2 flex-1 bottom-0 self-stretch rounded-2xl bg-gray-50"
  >
    <div class="flex justify-center items-center gap-2">
      <component :is="icon" class="size-7 text-primary-800" />
      <p class="font-sans font-medium text-sm leading-[14.4px] text-primary-800">{{ title }}</p>
    </div>
    <div class="flex px-0 py-1 justify-center items-center self-stretch rounded-2xl bg-primary-800">
      <div class="flex flex-col justify-center items-center gap-1 flex-1 bottom-0 self-stretch">
        <p class="font-sans font-medium text-xs leading-[14.4px] text-white">{{ desc }}</p>
        <p class="font-sans font-bold text-xl leading-6 text-white">{{ value }}</p>
      </div>
      <Vec class="self-stretch text-white stroke-2"></Vec>
      <div class="flex flex-col justify-center items-center gap-1 flex-1 bottom-0 self-stretch">
        <p class="font-sans font-medium text-xs leading-[14.4px] text-white">{{ desc2 }}</p>
        <p class="font-sans font-bold text-xl leading-6 text-white">{{ value2 }}</p>
      </div>
    </div>
  </div>

  <div
    v-else-if="type === 'gray'"
    class="flex p-4 flex-col justify-center items-center gap-2 flex-1 bottom-0 self-stretch rounded-2xl bg-primary-50"
  >
    <div class="flex justify-center items-center gap-2">
      <component :is="icon" class="size-7 text-primary-800" />
      <p class="font-sans font-medium text-sm leading-[14.4px] text-primary-800">{{ title }}</p>
    </div>
    <div class="flex px-0 py-1 justify-center items-center self-stretch rounded-2xl bg-white">
      <div class="flex flex-col justify-center items-center gap-1 flex-1 bottom-0 self-stretch">
        <p class="font-sans font-medium text-xs leading-[14.4px] text-primary-800">{{ desc }}</p>
        <p class="font-sans font-bold text-xl leading-6 text-primary-800">{{ value }}</p>
      </div>
      <Vec class="self-stretch text-primary-800 stroke-2"></Vec>
      <div class="flex flex-col justify-center items-center gap-1 flex-1 bottom-0 self-stretch">
        <p class="font-sans font-medium text-xs leading-[14.4px] text-primary-800">{{ desc2 }}</p>
        <p class="font-sans font-bold text-xl leading-6 text-primary-800">{{ value2 }}</p>
      </div>
    </div>
  </div>
</template>
