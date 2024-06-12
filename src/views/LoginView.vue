<script setup lang="ts">
import { ref } from 'vue'
import { useDialogStore } from '@/stores/dialog'
import { Login } from '@/assets/image'
import { useAccountStore } from '@/stores/account'
import { SlideDialog } from '@/components/dialogs'
const dialog = useDialogStore()
const account = useAccountStore()

const slideDialogOpen = ref(false)

const email = ref('')
const password = ref('')

const onLogout = () => {
  alert('Logout')
}

const onCanceled = () => {
  alert('Canceled')
}

const showDialogLogout = () => {
  dialog.onConfirm = onLogout
  dialog.onCancel = onCanceled

  dialog.title = 'Keluar dari aplikasi?'
  dialog.content = 'Anda akan keluar dari aplikasi. Apakah Anda yakin?'
  dialog.confirmText = 'Keluar'
  dialog.cancelText = 'Batal'
  dialog.type = 'error'
  dialog.open = true
}

const showDialogForgotPassword = () => {
  dialog.title = 'Lupa Password?'
  dialog.content = 'Silahkan masukan email Anda untuk mendapatkan link reset password.'
  dialog.confirmText = 'Kirim'
  dialog.cancelText = 'Batal'
  dialog.type = 'warning'
  dialog.onConfirm = () => {}
  dialog.open = true
}

const showSlideDialog = () => {
  slideDialogOpen.value = true
}
</script>

<template>
  <SlideDialog :open="slideDialogOpen" @on-close="slideDialogOpen = false" />

  <!-- <section class="container flex items-center justify-center m-auto">
    <div class="p-16 m-auto">
      <div class="mx-2">
        <h1 class="font-sans text-3xl text-dark">Selamat Datang</h1>
        <p class="mb-4 text-gray-800">Silahkan masuk untuk melihat statistik.</p>
      </div>

      <div class="items-center justify-center mx-2 mb-8">
        <h1 class="mt-4 font-sans text-base text-dark">Email</h1>
        <input
          v-model="account.email"
          type="email"
          id="email"
          name="email"
          placeholder="Masukan Email"
          class="px-16 py-1 border-x-8 border-gray-50 bg-gray-50 text-dark text-start"
          required
        />
        <h1 class="mt-4 font-sans text-base text-dark">Password</h1>
        <input
          v-model="account.password"
          type="password"
          id="password"
          name="password"
          placeholder="Masukan Password"
          class="px-16 py-1 border-x-8 border-gray-50 bg-gray-50 text-dark text-start"
          required
        />
      </div>

      <div @click="showDialogForgotPassword" class="mx-4 text-primary-500 text-end">
        <p>lupa password?</p>
      </div>

      <div class="">
        <button
          @click="showSlideDialog"
          class="justify-start py-1 m-auto text-white border-8 rounded-lg px-36 border-primary-500 bg-primary-500"
        >
          Login
        </button>
      </div>

      <div>
        <h1 class="mt-16 text-center text-primary-800">©2024 - PT.Sawarga Digital Indonesia</h1>
        <h1 class="text-center text-primary-800">V2.0.0</h1>
      </div>
    </div>
    <div class="w-[50%]">
      <img class="w-[85%]" :src="Login" alt="halaman login" />
    </div>
  </section> -->

  <section class="container flex items-center justify-center m-auto">
    <div class="p-16 m-auto">
      <div class="mx-2">
        <h1 class="font-sans text-3xl text-dark">Selamat Datang</h1>
        <p class="mb-4 text-gray-800">Silahkan masuk untuk melihat statistik.</p>
      </div>



<form id="login">
      <div class="items-center justify-center mx-2 mb-2 ">
        <h1 class="mt-4 font-sans text-base text-dark">Email</h1>
        <InputEmail/>

        <!-- <input
          v-model="account.email"
          type="email"
          id="email"
          name="email"
          placeholder="Masukan Email"
          class="px-16 py-1 border-x-8 border-gray-50 bg-gray-50 text-dark text-start"
          required
        /> -->

        <h1 class="mt-4 font-sans text-base text-dark">Password</h1>
       <InputPassword/>
        <!-- <input
          v-model="account.password"
          type="password"
          id="password"
          name="password"
          placeholder="Masukan Password"
          class="px-16 py-1 border-x-8 border-gray-50 bg-gray-50 text-dark text-start"
          required
        /> -->
        
      </div>

</form>

      <div @click="showDialogForgotPassword" class="w-full  text-primary-500 text-end mb-8">
        <p>Lupa password?</p>
      </div>

      <div class="">
        <button 
          @click="showDialogLogout"
          class="justify-start py-1 m-auto font-semibold text-white border-8 rounded-lg px-36 border-primary-500 bg-primary-500"
        >
          Login
        </button>
      </div>

      <div>
        <h1 class="mt-16 text-center text-primary-800">©2024 - PT.Sawarga Digital Indonesia</h1>
        <h1 class="text-center text-primary-800">V2.0.0</h1>
      </div>
    </div>
    <div class="w-[50%]">
      <img class="w-[85%]" :src="Login" alt="halaman login" />
    </div>
  

</section>
</template>
