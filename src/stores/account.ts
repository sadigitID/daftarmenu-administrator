import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { readData, readDataJson, removeData, writeData, writeDataJson } from '@/utils/storage'

interface AccountModel {
  name: string
  username: string
  email: string
  token: string
}

export const useAccountStore = defineStore('account', () => {
  const email = ref('')
  const password = ref('')

  const saveEmail = (email: string) => {
    writeData('email', email)
  }

  const getEmail = (): string | null => {
    return readData('email')
  }

  const getAccountData = (): AccountModel | null => {
    const accountString = readDataJson('account')
    let account: AccountModel | null = null

    if (accountString) {
      try {
        account = JSON.parse(accountString) as AccountModel
      } catch (error) {
        account = accountString as AccountModel
      }
    }
    return account
  }

  const account = ref<AccountModel | null>(getAccountData())

  const isAuthenticated = computed(() =>
    readData('isAuthenticated') == undefined ? false : readData('isAuthenticated') == true
  )

  const logout = () => {
    removeData('isAuthenticated')
    removeData('account')

    const url = window.location.origin
    window.location.href = url + '/login'
  }

  const saveAccount = (accountData: AccountModel) => {
    writeData('isAuthenticated', true)
    writeDataJson('account', accountData)
  }

  const setAuthenticated = (value: boolean) => {
    writeData('isAuthenticated', value)
  }

  computed(() => {
    account.value = getAccountData()
    return account.value
  })

  onMounted(() => {
    if (getAccountData() == null) {
      const isAuthenticated = readData('isAuthenticated')
      if (isAuthenticated == true) {
        logout()
      }
    }

    // saveAccount({
    //   name: 'John Doe',
    //   username: 'john.doe',
    //   email: '',
    //   token: ''
    // })
  })

  return {
    isAuthenticated,
    setAuthenticated,
    logout,
    account,
    saveAccount,
    saveEmail,
    getEmail,
    email,
    password
  }
})
