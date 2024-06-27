<script setup lang="ts">
import { ChevronRight } from '@/components/icons'
import { useRestoStore } from '@/stores/resto'
import type { RestaurantModel } from '@/utils/types'
import { timestampToDateFormated, daysSinceNow } from '@/utils/date'
import { onMounted, ref } from 'vue'
import { useHomeStore } from '@/stores/home'

const resto = useRestoStore()
const stores = useHomeStore()

// const props = defineProps({
//   data: {
//     type: Object as () => RestaurantModel,
//     required: true
//   }
// })

const onSelected = (data: RestaurantModel) => {
  resto.resto = data
}

const accountData = ref<RestaurantModel[]>([])

const loadRestoData = async () => {
  return new Promise((resolve) => {
    resto.fetchAccountsData()
    setTimeout(() => {
      // accountData.value = resto.visibleItems
      accountData.value = resto.account_data
      resolve(accountData.value)
    }, 4000)
  })
}

const getAccountStatus = (data: RestaurantModel) => {
  const dateNow = new Date().getTime()
  const accountLastActive = data.account.account_last_active
  const unactiveLimit = accountLastActive + 2592000000
  const accountStatus = dateNow > unactiveLimit ? 'inactive' : 'active'

  return accountStatus
}

const getDaysPassed = (data: RestaurantModel) => {
  const accountLastActive = data.account.account_last_active
  const daysPassed = daysSinceNow(accountLastActive)

  return daysPassed
}

await loadRestoData()

// const searchQuery = resto.searchQuery
// const sortOrder = resto.sortOrder
// const filteredAndSortedItems = resto.filteredAndSortedItems
</script>

<template>
  <button
    v-for="data in accountData"
    :key="data.resto.resto_id"
    @click="onSelected(data)"
    class="flex flex-1 p-2 bg-white justify-between items-center rounded-2xl font-sans shadow-[1px_1px_8px_0px_rgba(180,180,180,0.39)]"
  >
    <div class="flex items-center gap-2">
      <img
        :src="data.resto.resto_image"
        class="object-cover object-center w-[68px] h-[68px] rounded-lg"
        alt="Resto Profile Picture"
      />
      <div class="flex flex-col justify-center items-start gap-1.5">
        <div class="flex flex-col justify-center items-start gap-0.5">
          <div class="flex items-center gap-0.5">
            <div
              v-if="data.account.account_subscription_id == 0"
              class="flex p-1 items-start gap-2.5 rounded-full bg-primary-50"
            >
              <p class="text-xs font-medium text-primary-800">Free</p>
            </div>
            <div
              v-else-if="data.account.account_subscription_id == 1"
              class="flex p-1 items-start gap-2.5 rounded-full bg-primary-50"
            >
              <p class="text-xs font-medium text-primary-800">Trial</p>
            </div>
            <div
              v-else-if="data.account.account_subscription_id > 1"
              class="flex p-1 items-start bg-gradient-to-r from-[#E3FFD3] to-[#FFF59C] rounded-full space-x-1"
            >
              <p class="text-xs font-medium text-primary-900">Premium</p>
            </div>

            <div v-if="getAccountStatus(data) == 'active'" class="flex p-1 items-center gap-2.5">
              <p class="text-xs font-medium text-superorange">Aktif</p>
            </div>
            <div
              v-else-if="getAccountStatus(data) == 'inactive'"
              class="flex p-1 items-center gap-2.5"
            >
              <p class="text-xs font-medium text-red-500">Tidak Aktif</p>
            </div>
          </div>
          <div class="flex items-start gap-2.5 self-stretch">
            <p class="text-base font-bold text-dark text-left">
              {{ data.resto.resto_name }}
            </p>
          </div>
        </div>
        <div v-if="data.resto.resto_transaction_today != 0" class="flex items-start gap-2.5">
          <p class="text-xs font-medium text-gray-700 text-left">
            {{ data.resto.resto_transaction_today }} transaksi pada hari ini
          </p>
        </div>
        <div v-else-if="getDaysPassed(data) > 30" class="flex items-start gap-2.5">
          <p class="text-xs font-medium text-gray-700 text-left">Tidak aktif lebih dari 30 hari</p>
        </div>
        <div v-else class="flex items-start gap-2.5">
          <p class="text-xs font-medium text-gray-700 text-left">
            Exp: {{ timestampToDateFormated(data.account.account_last_active) }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <ChevronRight class="w-6 h-6 fill-dark" />
    </div>
  </button>
</template>
