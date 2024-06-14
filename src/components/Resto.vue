<script setup>
import { ChevronRight } from '@/components/icons'

defineProps({
  image: String,
  name: String,
  memberStatus: {
    default: 'trial'
  },
  activeStatus: {
    default: true
  },
  lastTransaction: String
})
</script>

<template>
  <article
    class="flex p-2 w-[278px] bg-white justify-between items-center shadow-lg rounded-xl font-sans"
  >
    <div class="flex">
      <img
        :src="image"
        class="object-cover object-center w-16 h-16 overflow-hidden rounded-xl"
        alt="Resto Profile Picture"
      />
      <div class="px-2">
        <div class="flex">
          <div
            v-if="memberStatus == 'premium'"
            class="p-1 bg-gradient-to-r from-[#E3FFD3] to-[#FFF59C] rounded-full space-x-1"
          >
            <p class="text-xs text-primary-900">Premium</p>
          </div>
          <div v-else-if="memberStatus == 'free'" class="p-1 space-x-1 rounded-full bg-primary-50">
            <p class="text-xs text-primary-800">Free</p>
          </div>
          <div v-else-if="memberStatus == 'trial'" class="p-1 space-x-1 rounded-full bg-primary-50">
            <p class="text-xs text-primary-800">Trial</p>
          </div>
          <div v-if="activeStatus == true" class="p-1">
            <p class="text-xs text-superorange">Aktif</p>
          </div>
          <div v-else-if="activeStatus == false" class="p-1">
            <p class="text-xs text-red-500">Tidak Aktif</p>
          </div>
        </div>
        <div>
          <p class="font-bold text-md text-dark">
            {{ name }}
          </p>
        </div>
        <div class="text-xs text-gray-700">{{ lastTransaction }}</div>
      </div>
    </div>
    <div>
      <ChevronRight />
    </div>
  </article>
</template>
