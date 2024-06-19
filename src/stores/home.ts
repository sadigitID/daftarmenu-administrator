import { fetchPendapatanItem, fetchPenilaianUser } from '@/api'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useHomeStore = defineStore('homeStore', () => {
  const laporanPendapatanItem = ref([])
  const users = ref({
    retention_rate: 0,
    total_users: 0,
    active_user: 0,
    inactive_user: 0
  })

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

  const getLaporanPendapatanItem = () => {
    return laporanPendapatanItem.value
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
  })

  return {
    fetchLaporanPendapatanItem,
    getLaporanPendapatanItem,
    getUserData,
    getRetentionRateStatus,
    fetchDataPenilaianUser
  }
})
