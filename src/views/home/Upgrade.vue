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

  <section class="flex items-center justify-center w-full h-full bg-layout">
    <div
      id="upgrade"
      class="w-full h-full m-auto gap-3 md:gap-4 lg:gap-5 xl:gap-6 bg-white p-6 rounded-xl md:rounded-2xl lg:rounded-3xl"
    >
      <div class="flex justify-between">
        <div>
          <h1 class="text-extrabold text-md md:text-lg lg:text-xl text-primary-900">
            Daftar Pengguna
          </h1>
          <p class="text-xs text-primary-900">
            Menampilkan {{ stores.getUserData().total_users }} pengguna
          </p>
        </div>

        <div class="flex justify-center items-center gap-1 xl:gap-4 lg:gap-3 md:gap-2">
          <div
            id="search"
            class="bg-transparent lg:bg-gray-50 m-auto justify-center items-center flex rounded-lg px-2"
          >
            <IconSearch class="md:block hidden xl:w-4 h-4" />
            <InputText class="text-sm font-sans text-gray-800" placeholder="Cari Menu" />
          </div>
          <ButtonFilter />
        </div>
      </div>

      <div class="flex flex-wrap justify-between items-center gap-5 py-6">
        <img
          :src="Food"
          alt="food"
          class="object-cover object-center items-center rounded-xl overflow-hidden md:block hidden w-[340px] h-[104px] self-stretch"
        />

        <div
          class="bg-primary-900 gap-4 flex justify-center items-center rounded-xl py-4 px-6 w-full md:w-auto h-auto"
        >
          <UserValid class="w-12 h-12 text-white" />
          <div class="flex flex-col">
            <h1 class="text-white text-xs">Hari Ini Bergabung</h1>
            <h1 class="text-white text-xl font-bold">{{ stores.getUserData().join_today }}</h1>
          </div>
        </div>

        <div
          class="bg-primary-50 flex gap-4 justify-center items-center rounded-xl py-4 px-6 w-full md:w-auto h-auto"
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
          class="flex flex-col justify-center items-center rounded-2xl overflow-hidden h-auto w-full md:w-auto"
        >
          <div class="bg-primary-50 gap-2 flex py-1 px-2 items-center justify-center w-full h-auto">
            <UserValid class="fill-primary-900" />
            <div class="text-center md:text-left">
              <h1 class="text-primary-900 text-xs">Premium</h1>
              <h1 class="text-primary-900 text-xl font-bold">{{ stores.getUserData().premium }}</h1>
            </div>
          </div>

          <div class="bg-primary-900 flex items-center justify-between py-1 px-6 w-full h-auto">
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
    </div>
  </section>
</template>
