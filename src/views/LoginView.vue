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
  <div class="flex h-screen justify-center items-center bg-layout font-sans">
    <section
      class="flex w-screen md:w-fit justify-center items-center p-4 m-4 md:gap-6 bg-white rounded-2xl"
    >
      <div
        class="flex w-full md:w-auto py-4 px-6 flex-col justify-center items-center gap-12 md:shrink-0 self-stretch"
      >
        <div class="flex flex-col justify-center items-center gap-6 self-stretch">
          <div class="flex flex-col justify-center items-center gap-6 self-stretch">
            <div class="flex flex-col justify-center items-start gap-2 self-stretch">
              <div class="flex justify-between items-center self-stretch">
                <h1 class="font-sans text-3xl font-medium text-dark">Selamat Datang</h1>
              </div>
              <p class="font-sans text-base font-medium text-gray-800">
                Silahkan masuk untuk melihat statistik.
              </p>
            </div>
          </div>

          <form
            id="login"
            @submit.prevent="onLogin"
            class="flex flex-col items-start gap-8 self-stretch"
          >
            <div class="flex flex-col justify-center gap-4 self-stretch">
              <div class="flex flex-col justify-center gap-2 self-stretch">
                <h1 class="font-sans text-base font-medium text-dark">Email</h1>
                <InputText
                  :disabled="isLoading"
                  type="email"
                  placeholder="Masukan Email"
                  @update:value="email = $event"
                />
              </div>

              <div class="flex flex-col justify-center gap-2 self-stretch">
                <h1 class="font-sans text-base font-medium text-dark">Password</h1>
                <InputText
                  class="relative"
                  type="password"
                  :disabled="isLoading"
                  @update:value="password = $event"
                  placeholder="Masukan Password"
                />
              </div>
            </div>
            <ButtonPrimary
              class="flex py-2 px-4 justify-center items-center gap-2.5 self-stretch"
              type="submit"
              label="Login"
              :isLoading="isLoading"
              :disabled="isLoading"
            />
          </form>
        </div>

        <div class="flex flex-col items-center gap-1">
          <h1 class="text-sm font-medium text-primary-800">
            ©2024 - PT.Sawarga Digital Indonesia
          </h1>
          <h1 class="text-xs font-medium text-primary-800">V2.0.0</h1>
        </div>
      </div>

      <div
        class="flex justify-center items-center shrink rounded-lg bg-primary-50 invisible md:visible self-stretch"
      >
        <img class="w-0 md:w-[540px]" :src="Login" alt="halaman login" />
      </div>
    </section>
  </div>
</template>
