<script setup>
import { ChevronRight } from '@/components/icons'

defineProps({
  resto_image: String,
  resto_name: String,
  account_subscription: Boolean,
  account_subscription_id: {
    type: Number,
    default: 0
  },
  account_subscription_expired: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <button
    class="flex flex-1 p-2 bg-white justify-between items-center rounded-2xl font-sans shadow-[1px_1px_8px_0px_rgba(180,180,180,0.39)]"
  >
    <div class="flex items-center gap-2">
      <img
        :src="resto_image"
        class="object-cover object-center w-[68px] h-[68px] rounded-lg"
        alt="Resto Profile Picture"
      />
      <div class="flex flex-col justify-center items-start gap-1.5">
        <div class="flex flex-col justify-center items-start gap-0.5">
          <div class="flex items-center gap-0.5">
            <div
              v-if="account_subscription_id == 0"
              class="flex p-1 items-start gap-2.5 rounded-full bg-primary-50"
            >
              <p class="text-xs text-primary-800">Free</p>
            </div>
            <div
              v-else-if="account_subscription_id == 1"
              class="flex p-1 items-start gap-2.5 rounded-full bg-primary-50"
            >
              <p class="text-xs text-primary-800">Trial</p>
            </div>
            <div
              v-else-if="account_subscription_id > 1"
              class="flex p-1 items-start bg-gradient-to-r from-[#E3FFD3] to-[#FFF59C] rounded-full space-x-1"
            >
              <p class="text-xs text-primary-900">Premium</p>
            </div>

            <div v-if="account_subscription == true" class="flex p-1 items-center gap-2.5">
              <p class="text-xs text-superorange">Aktif</p>
            </div>
            <div v-else-if="account_subscription == false" class="flex p-1 items-center gap-2.5">
              <p class="text-xs text-red-500">Tidak Aktif</p>
            </div>
          </div>
          <p class="font-bold text-dark text-left">
            {{ resto_name }}
          </p>
        </div>
        <div class="text-xs text-gray-700">{{ account_subscription_expired }}</div>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <ChevronRight class="w-6 h-6 fill-dark" />
    </div>
  </button>
</template>
