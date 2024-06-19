<script setup lang="ts">
import { ref } from 'vue'
import { ButtonPrimary, InputText } from '@/components'
import { useDialogStore } from '@/stores/dialog'
import { createAuth } from '@/api'
import { useAccountStore } from '@/stores/account'
import { Login } from '@/assets/image'
const dialog = useDialogStore()
const account = useAccountStore()
const email = ref('')
const password = ref('')
const isLoading = ref(false)

const validate = () => {
  isLoading.value = false
  if (!email.value) {
    onEmptyEmail()
    return false
  }

  if (!password.value) {
    onEmptyPassword()
    return false
  }

  return true
}

const onLogin = () => {
  if (!isLoading.value) {
    isLoading.value = true

    setTimeout(() => {
      if (validate()) {
        const data = {
          email: email.value,
          password: password.value
        }
        createAuth(data)
          .then((res) => {
            const result = res.data
            if (result.status) {
              onSuccessfulLogin()
            } else {
              onFailedLogin()
            }
          })
          .catch(() => {
            onFailedLogin()
          })
      }
    }, 4000)
  }
}

const onSuccessfulLogin = () => {
  account.setAuthenticated(true)

  dialog.title = 'Login Berhasil'
  dialog.content = 'Selamat datang di aplikasi admin daftarmenu!'
  dialog.confirmText = 'Lanjutkan'
  dialog.type = 'success'
  dialog.showCancelButton = false
  dialog.dismissOnAction = false
  dialog.onConfirm = () => {
    dialog.open = false
    location.href = '/home'
  }
  dialog.open = true
}

const onFailedLogin = () => {
  dialog.title = 'Login Gagal'
  dialog.content = 'Email atau password Anda salah.'
  dialog.confirmText = 'Mengerti'
  dialog.type = 'error'
  dialog.showCancelButton = false
  dialog.open = true
}

const onEmptyEmail = () => {
  dialog.title = 'Email kosong'
  dialog.content = 'Silahkan masukan email Anda.'
  dialog.confirmText = 'Mengerti'
  dialog.type = 'error'
  dialog.showCancelButton = false
  dialog.open = true
}

const onEmptyPassword = () => {
  dialog.title = 'Password kosong'
  dialog.content = 'Silahkan masukan password Anda.'
  dialog.confirmText = 'Mengerti'
  dialog.type = 'error'
  dialog.showCancelButton = false
  dialog.open = true
}
</script>

<template>
  <div class="grid h-screen grid-cols-1 p-4 lg:p-6 place-items-center">
    <section
      class="container items-center p-4 bg-white lg:p-6 lg:flex lg:flex-row lg:space-x-6 rounded-2xl max-w-80 lg:max-w-screen-lg"
    >
      <div>
        <div class="mx-2">
          <h1 class="font-sans text-3xl text-dark">Selamat Datang</h1>
          <p class="mb-4 text-gray-800">Silahkan masuk untuk melihat statistik.</p>
        </div>

        <form id="login" @submit.prevent="onLogin">
          <div class="flex flex-col mx-2 mb-2 space-y-4">
            <div>
              <h1 class="font-sans text-base text-dark">Email</h1>
              <InputText
                :disabled="isLoading"
                type="email"
                placeholder="Masukan Email"
                @update:value="email = $event"
              />
            </div>

            <div>
              <h1 class="font-sans text-base text-dark">Password</h1>
              <InputText
                type="password"
                :disabled="isLoading"
                @update:value="password = $event"
                placeholder="Masukan Password"
              />
            </div>

            <ButtonPrimary
              type="submit"
              label="Login"
              :isLoading="isLoading"
              :disabled="isLoading"
            />
          </div>
        </form>

        <div>
          <h1 class="mt-8 text-sm font-medium text-center text-primary-800">
            ©2024 - PT.Sawarga Digital Indonesia
          </h1>
          <h1 class="text-xs font-medium text-center text-primary-800">V2.0.0</h1>
        </div>
      </div>

      <div class="flex items-center justify-center flex-1 rounded-lg bg-primary-50">
        <img class="max-h-[400px]" :src="Login" alt="halaman login" />
      </div>
    </section>
  </div>
</template>
