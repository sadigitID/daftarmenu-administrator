import type { RestaurantModel } from '@/utils/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRestoStore = defineStore('account', () => {
  const resto = ref<RestaurantModel | null>(null)

  return {
    resto
  }
})
