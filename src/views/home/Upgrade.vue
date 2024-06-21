<script setup lang="ts">
import { IconSearch, UserInvalid, UserValid } from '@/components/icons'
import { Food } from '@/assets/image'
import { CardResto } from '@/components/card'
import { InputText } from '@/components/'
import { ButtonFilter } from '@/components'
import PopUpResto from '@/components/dialogs/PopUpResto.vue'
import { useRestoStore } from '@/stores/resto'
import { useHomeStore } from '@/stores/home'

const resto = useRestoStore()
const stores = useHomeStore()
</script>

<template>
  <popUpResto :open="resto.resto != null" @on-close="resto.resto = null" :data="resto.resto" />

  <div class="flex items-center justify-center w-full h-full px-16 py-4 bg-layout">
    <section id="upgrade" class="container w-full h-full m-auto gap-6 bg-white p-6 rounded-3xl">
      <div class="flex justify-between">
        <div class="">
          <h1 class="text-extrabold text-xl text-primary-900">Daftar Pengguna</h1>
          <p class="text-xs text-primary-900">
            Menampilkan {{ stores.getUserData().total_users }} pengguna
          </p>
        </div>

        <div class="flex gap-4">
          <div
            id="search"
            class="bg-gray-50 m-auto justify-center items-center flex rounded-lg px-2"
          >
            <IconSearch class="w-4 h-4" />
            <InputText class="text-sm font-sans text-gray-800" placeholder="Cari Menu" />
          </div>

          <ButtonFilter />
        </div>
      </div>

      <div class="justify-center items-center flex gap-5 py-6">
        <div class="flex items-center rounded-xl overflow-hidden w-[340px] h-[104px] self-stretch">
          <img :src="Food" alt="food" class="object-cover object-center" />
        </div>

        <div
          class="bg-primary-900 gap-4 flex justify-center items-center rounded-xl py-6 px-6 w-auto h-auto"
        >
          <UserValid class="w-12 h-12 text-white" />
          <div class="flex flex-col">
            <h1 class="text-white text-xs">Hari Ini Bergabung</h1>
            <h1 class="text-white text-xl font-bold">{{ stores.getUserData().join_today }}</h1>
          </div>
        </div>

        <div
          class="bg-primary-50 flex gap-4 justify-center items-center rounded-xl py-6 px-6 w-auto h-[100%]"
        >
          <UserInvalid class="fill-primary-900" />
          <div>
            <div class="flex items-center justify-start gap-1">
              <h1 class="text-primary-900 text-lg font-bold">
                {{ stores.getUserData().active_user }}
              </h1>
              <h1 class="text-primary-900 text-xs">User Aktif</h1>
            </div>
            <div class="flex items-center justify-center gap-1">
              <h1 class="text-primary-900 text-lg font-bold">
                {{ stores.getUserData().inactive_user }}
              </h1>
              <h1 class="text-primary-900 text-xs">User Tidak Aktif</h1>
            </div>
          </div>
        </div>

        <div
          class="bg-primary-50 flex flex-col justify-center items-center rounded-2xl overflow-hidden w-auto h-[100%]"
        >
          <div
            class="bg-primary-50 gap-2 flex py-2 px-6 items-center justify-center w-[328px] h-[64px]"
          >
            <UserValid class="fill-primary-900" />
            <div>
              <h1 class="text-primary-900 text-xs">Premium</h1>
              <h1 class="text-primary-900 text-xl font-bold">{{ stores.getUserData().premium }}</h1>
            </div>
          </div>

          <div class="bg-primary-900 flex items-center justify-between px-6 py-2 w-[100%] h-auto">
            <div class="flex justify-center items-center gap-1">
              <h1 class="text-sm text-white">Trial</h1>
              <h1 class="text-xl font-bold text-white">{{ stores.getUserData().trial }}</h1>
            </div>

            <div class="flex justify-center items-center gap-1">
              <h1 class="text-sm text-white">Free</h1>
              <h1 class="text-xl font-bold text-white">{{ stores.getUserData().free }}</h1>
            </div>
          </div>
        </div>
      </div>

      <!-- Resto Card Components -->
      <div
        name="resto"
        id="resto"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-6"
      >
        <CardResto
          v-for="data in stores.getAccountData()"
          :key="data.resto.resto_id"
          :data="data"
        />
      </div>
    </section>
  </div>
</template>
