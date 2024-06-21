import { fetchPendapatanItem, fetchPenilaianUser, fetchUserData } from '@/api'
import type { RestaurantModel } from '@/utils/types'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useHomeStore = defineStore('homeStore', () => {
  const laporanPendapatanItem = ref([])
  const users = ref({
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
    const rate = (users.value.active_user / users.value.total_users) * 100
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

  const countPaketBulan = (data: string): number => {
    return user_data.value.filter(
      (user_data) => user_data.account.account_subscription_name === data
    ).length
  }

  const countJenisLanggananUser = (data: number): number => {
    return user_data.value.filter((user_data) => user_data.account.account_subscription_id === data)
      .length
  }

  const countMetodePembayaran = (data: string): number => {
    return user_data.value.filter((user_data) => user_data.account.account_payment_method === data)
      .length
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
    fetchAccountData,
    countPaketBulan,
    countJenisLanggananUser,
    countMetodePembayaran
  }
})
