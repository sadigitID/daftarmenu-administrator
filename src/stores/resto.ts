import { fetchAccountData } from '@/api'
import type { RestaurantModel } from '@/utils/types'
import { defineStore } from 'pinia'
import { computed, onMounted, ref, watch } from 'vue'

export const useRestoStore = defineStore('restoStore', () => {
  const resto = ref<RestaurantModel | null>(null)

  const account_data = ref<RestaurantModel[]>([])

  // UNDER DEVELOPMENT
  const restoShowed = ref<RestaurantModel[]>([])
  const searchQuery = ref<string>('')
  const sortOrder = ref<string>('asc')
  const visibleItems = ref<RestaurantModel[]>([])
  const isLoadingData = ref<boolean>(false)
  const isLoadingMore = ref<boolean>(false)
  const scrollObserver = ref<HTMLDivElement | null>(null)
  const chunkSize = 12
  const pageCurrent = ref<number>(1)
  const pageLimit = ref<number>(1)

  const fetchAccountsData = async () => {
    fetchAccountData()
      .then((response) => {
        const result = response.data
        if (result.status) {
          account_data.value = result.data
          splitRestoData(account_data.value)
          loadMore(pageCurrent.value)
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

  const getAccountData = () => {
    return account_data.value
  }

  const splitRestoData = (data: RestaurantModel[]) => {
    if (data.length > 0) {
      const restoDataChunk = []
      for (let i = 0; i < data.length; i += chunkSize) {
        restoDataChunk.push(data.slice(i, i + chunkSize))
      }
      pageLimit.value = restoDataChunk.length
      console.log(pageLimit.value)
    } else {
      pageLimit.value = 1
    }
  }

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + document.documentElement.scrollTop
    const documentHeight = document.documentElement.scrollHeight

    if (scrollPosition >= documentHeight) {
      if (pageCurrent.value <= pageLimit.value) {
        if (restoShowed.value.length != account_data.value.length) {
          loadMore(pageCurrent.value + 1)
        }
      }
    }
  }

  const loadMore = (page: number) => {
    if (page <= pageLimit.value) {
      isLoadingMore.value = true
      setTimeout(() => {
        const start = (page - 1) * chunkSize
        const end = start + chunkSize
        visibleItems.value = [...visibleItems.value, ...account_data.value.slice(start, end)]
        pageCurrent.value = page
        isLoadingMore.value = false
      }, 1000)
    }
  }

  const filteredAndSortedItems = computed(() => {
    // eslint-disable-next-line prefer-const
    let filtered = visibleItems.value.filter((account_data) => {
      return account_data.account.account_name.toLowerCase().includes(searchQuery.value.toLowerCase())
    })

    return filtered.sort((a, b) => {
      if (sortOrder.value === 'asc') {
        return a.account.account_name.localeCompare(b.account.account_name)
      } else {
        return b.account.account_name.localeCompare(a.account.account_name)
      }
    })
  })

  const sortList = (order: string) => {
    sortOrder.value = order
  }

  watch([searchQuery, sortOrder], () => {
    visibleItems.value = []
    loadMore(1)
  })

  onMounted(() => {
    fetchAccountsData()
  })

  return {
    resto,

    // EXPERIMENTAL
    searchQuery,
    sortOrder,
    filteredAndSortedItems,
    sortList,
    scrollObserver,
    isLoadingMore,
    fetchAccountsData,
    handleScroll,
    account_data,
    getAccountData,
    visibleItems
  }
})
