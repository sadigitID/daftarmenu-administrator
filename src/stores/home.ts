import { fetchPendapatanItem, fetchPenilaianUser, fetchUserData } from '@/api'
import type { RestaurantModel } from '@/utils/types'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useHomeStore = defineStore('homeStore', () => {
  const laporanPendapatanItem = ref([])
  const users = ref({
    retention_rate: 0,
    total_users: 0,
    active_user: 0,
    inactive_user: 0,
    join_today: 0,
    premium: 0,
    free: 0,
    trial: 0
  })

  const user_data = ref<RestaurantModel[]>([])

  const getRetentionRateStatus = () => {
    const rate = users.value.retention_rate
    if (rate >= 70) {
      return 'baik'
    } else if (rate >= 50 && rate < 70) {
      return 'cukup'
    } else {
      return 'buruk'
    }
  }

  const getUserData = () => {
    return users.value
  }

  const getAccountData = () => {
    return user_data.value
  }

  const getLaporanPendapatanItem = () => {
    return laporanPendapatanItem.value
  }

  const fetchAccountData = async () => {
    fetchUserData()
      .then((response) => {
        const result = response.data
        if (result.status) {
          user_data.value = result.data
        } else {
          console.log(result.message)
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        console.log('fetch user done')
      })
  }

  const fetchLaporanPendapatanItem = async () => {
    fetchPendapatanItem()
      .then((response) => {
        const result = response.data
        if (result.status) {
          laporanPendapatanItem.value = result.data
        } else {
          console.log(result.message)
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        console.log('fetch pendapatan item done')
      })
  }

  const fetchDataPenilaianUser = async () => {
    fetchPenilaianUser().then((response) => {
      console.log(response.data)
      const result = response.data
      if (result.status) {
        users.value = result.data
      } else {
        console.log(result.message)
      }
    })
  }

  onMounted(() => {
    fetchLaporanPendapatanItem()
    fetchDataPenilaianUser()
    fetchAccountData()
  })

  return {
    fetchLaporanPendapatanItem,
    getLaporanPendapatanItem,
    getUserData,
    getAccountData,
    getRetentionRateStatus,
    fetchDataPenilaianUser,
    fetchAccountData
  }
})
