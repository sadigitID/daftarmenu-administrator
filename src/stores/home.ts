import { fetchUserInformation, fetchAccountData } from '@/api'
import type { RestaurantModel, UserInformationModel } from '@/utils/types'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useHomeStore = defineStore('homeStore', () => {
  // const laporanPendapatanItem = ref([])
  const user_information = ref<UserInformationModel>({
    users: {
      total_user: 0,
      active_user: 0,
      inactive_user: 0
    },
    joined: {
      join_today: 0
    },
    packet: {
      premium: 0,
      free: 0,
      trial: 0
    }
  })

  const account_data = ref<RestaurantModel[]>([])

  const getRetentionRateStatus = () => {
    const rate =
      (user_information.value.users.active_user / user_information.value.users.total_user) * 100
    if (rate >= 70) {
      return 'baik'
    } else if (rate >= 50 && rate < 70) {
      return 'cukup'
    } else {
      return 'buruk'
    }
  }

  const getUserInformationData = () => {
    return user_information.value
  }

  const getAccountData = () => {
    return account_data.value
  }

  // const getLaporanPendapatanItem = () => {
  //   return laporanPendapatanItem.value
  // }

  const fetchAccountsData = async () => {
    fetchAccountData()
      .then((response) => {
        const result = response.data
        if (result.status) {
          account_data.value = result.data
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

  // const fetchLaporanPendapatanItem = async () => {
  //   fetchPendapatanItem()
  //     .then((response) => {
  //       const result = response.data
  //       if (result.status) {
  //         laporanPendapatanItem.value = result.data
  //       } else {
  //         console.log(result.message)
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //     .finally(() => {
  //       console.log('fetch pendapatan item done')
  //     })
  // }

  const fetchUserInformations = async () => {
    fetchUserInformation().then((response) => {
      console.log(response.data)
      const result = response.data
      if (result.status) {
        user_information.value = result.data
      } else {
        console.log(result.message)
      }
    })
  }

  // Data for Card Components
  const countPaketBulan = (data: string): number => {
    return account_data.value.filter(
      (account_data) => account_data.account.account_subscription_name === data
    ).length
  }

  const countJenisLanggananUser = (data: number): number => {
    return account_data.value.filter(
      (account_data) => account_data.account.account_subscription_id === data
    ).length
  }

  const countMetodePembayaran = (data: string): number => {
    return account_data.value.filter(
      (account_data) => account_data.account.account_payment_method === data
    ).length
  }

  onMounted(() => {
    // fetchLaporanPendapatanItem()
    fetchUserInformations()
    fetchAccountsData()
  })

  return {
    // fetchLaporanPendapatanItem,
    // getLaporanPendapatanItem,
    getUserInformationData,
    getAccountData,
    getRetentionRateStatus,
    fetchUserInformations,
    fetchAccountsData,
    countPaketBulan,
    countJenisLanggananUser,
    countMetodePembayaran,
    user_information,
    account_data
  }
})
