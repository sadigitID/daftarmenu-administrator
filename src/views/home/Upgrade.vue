<script setup lang="ts">
import { IconSearch, UserInvalid, UserValid } from '@/components/icons'
import { Food } from '@/assets/image'
import { CardResto } from '@/components/card'
import { RestoProfile } from '@/assets/image'
import { InputText } from '@/components/'
import { ButtonFilter } from '@/components'
import type { RestaurantModel } from '@/utils/types'
import { onMounted, ref } from 'vue'
import PopUpResto from '@/components/dialogs/PopUpResto.vue'
import { useRestoStore } from '@/stores/resto'

const resto = useRestoStore()

const dataList = ref<RestaurantModel[]>([
  {
    account: {
      account_name: 'Holywing Resto',
      account_email: 'restoholywing@gmail.com',
      account_access: 'Super Admin',
      account_subscription: true,
      account_subscription_name: 'Paket 3 bulan',
      account_subscription_expired: 1726444800000,
      //dummy
      account_subscription_id: 3
    },
    resto: {
      resto_id: 2689,
      resto_image:
        'https://api.daftarmenu.com/dashboard/file/img_cover_resto/a6dd5313e1de71ab50d34ecf505c5b40.jpg',
      resto_name: 'Holywing Resto',
      resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
      resto_contact: '628996221104',
      resto_country: 'ID',
      resto_currency: 'USD',
      resto_slug: 'holywing-resto',
      resto_order_method: 0,
      // dummy
      resto_transaction_today: 20,
      resto_menu: 17
    }
  },
  {
    account: {
      account_name: 'Kedai Dsella',
      account_email: 'restoholywing@gmail.com',
      account_access: 'Super Admin',
      account_subscription: true,
      account_subscription_name: 'Paket 1 bulan',
      account_subscription_expired: 1,
      //dummy
      account_subscription_id: 2
    },
    resto: {
      resto_id: 1,
      resto_image: RestoProfile,
      resto_name: 'Kedai Dsella',
      resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
      resto_contact: '628996221104',
      resto_country: 'ID',
      resto_currency: 'USD',
      resto_slug: 'holywing-resto',
      resto_order_method: 0,
      // dummy
      resto_transaction_today: 200,
      resto_menu: 5
    }
  },
  {
    account: {
      account_name: 'Kedai Pak Bagus',
      account_email: 'restoholywing@gmail.com',
      account_access: 'Super Admin',
      account_subscription: false,
      account_subscription_name: 'Tidak ada paket dipilih',
      account_subscription_expired: 1,
      //dummy
      account_subscription_id: 0
    },
    resto: {
      resto_id: 2,
      resto_image: RestoProfile,
      resto_name: 'Kedai Pak Bagus',
      resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
      resto_contact: '628996221104',
      resto_country: 'ID',
      resto_currency: 'USD',
      resto_slug: 'holywing-resto',
      resto_order_method: 0,
      // dummy
      resto_transaction_today: 200,
      resto_menu: 5
    }
  },
  {
    account: {
      account_name: 'Kedai Pak Bagus',
      account_email: 'restoholywing@gmail.com',
      account_access: 'Super Admin',
      account_subscription: false,
      account_subscription_name: 'Tidak ada paket dipilih',
      account_subscription_expired: 1,
      //dummy
      account_subscription_id: 0
    },
    resto: {
      resto_id: 2,
      resto_image: RestoProfile,
      resto_name: 'Kedai Pak Bagus',
      resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
      resto_contact: '628996221104',
      resto_country: 'ID',
      resto_currency: 'USD',
      resto_slug: 'holywing-resto',
      resto_order_method: 0,
      // dummy
      resto_transaction_today: 200,
      resto_menu: 5
    }
  },
  {
    account: {
      account_name: 'Kedai Pak Bagus',
      account_email: 'restoholywing@gmail.com',
      account_access: 'Super Admin',
      account_subscription: true,
      account_subscription_name: 'Trial',
      account_subscription_expired: 1,
      //dummy
      account_subscription_id: 1
    },
    resto: {
      resto_id: 2,
      resto_image: RestoProfile,
      resto_name: 'Kedai Pak Bagus',
      resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
      resto_contact: '628996221104',
      resto_country: 'ID',
      resto_currency: 'USD',
      resto_slug: 'holywing-resto',
      resto_order_method: 0,
      // dummy
      resto_transaction_today: 200,
      resto_menu: 5
    }
  },
  {
    account: {
      account_name: 'Kedai Pak Bagus',
      account_email: 'restoholywing@gmail.com',
      account_access: 'Super Admin',
      account_subscription: true,
      account_subscription_name: 'Paket 12 bulan',
      account_subscription_expired: 1,
      //dummy
      account_subscription_id: 4
    },
    resto: {
      resto_id: 2,
      resto_image: RestoProfile,
      resto_name: 'Kedai Pak Bagus',
      resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
      resto_contact: '628996221104',
      resto_country: 'ID',
      resto_currency: 'USD',
      resto_slug: 'holywing-resto',
      resto_order_method: 0,
      // dummy
      resto_transaction_today: 200,
      resto_menu: 5
    }
  },
  {
    account: {
      account_name: 'Kedai Pak Bagus',
      account_email: 'restoholywing@gmail.com',
      account_access: 'Super Admin',
      account_subscription: true,
      account_subscription_name: 'Paket 3 Bulan',
      account_subscription_expired: 1,
      //dummy
      account_subscription_id: 3
    },
    resto: {
      resto_id: 2,
      resto_image: RestoProfile,
      resto_name: 'Kedai Pak Bagus',
      resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
      resto_contact: '628996221104',
      resto_country: 'ID',
      resto_currency: 'USD',
      resto_slug: 'holywing-resto',
      resto_order_method: 0,
      // dummy
      resto_transaction_today: 200,
      resto_menu: 5
    }
  }
])

onMounted(() => {
  // setTimeout(() => {
  //   dataList.value = []
  // }, 5000)
})
</script>

<template>
  <PopUpResto :open="resto.resto != null" @on-close="resto.resto = null" :data="resto.resto" />

  <div class="flex items-center justify-center w-full h-full p-6 bg-layout">
    <section
      id="upgrade"
      class="container overflow-hidden w-full h-full m-auto gap-6 bg-white p-6 rounded-3xl"
    >
      <div class="flex justify-between">
        <div class="">
          <h1 class="text-extrabold text-xl text-primary-900">Daftar Pengguna</h1>
          <p class="text-xs text-primary-900">Menampilkan 1350 pengguna</p>
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
          class="bg-primary-900 gap-4 flex justify-center items-center rounded-xl py-4 px-6 w-auto h-[100%]"
        >
          <UserValid class="w-12 h-12 text-white" />
          <div class="flex flex-col">
            <h1 class="text-white text-xs">Hari Ini Bergabung</h1>
            <h1 class="text-white text-xl font-bold">800</h1>
          </div>
        </div>

        <div
          class="bg-primary-50 flex gap-4 justify-center items-center rounded-xl py-4 px-6 w-auto h-[100%]"
        >
          <UserInvalid class="fill-primary-900" />
          <div>
            <div class="flex items-center justify-start gap-1">
              <h1 class="text-primary-900 text-lg font-bold">800</h1>
              <h1 class="text-primary-900 text-xs">User Aktif</h1>
            </div>
            <div class="flex items-center justify-center gap-1">
              <h1 class="text-primary-900 text-lg font-bold">800</h1>
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
              <h1 class="text-primary-900 text-xl font-bold">800</h1>
            </div>
          </div>

          <div class="bg-primary-900 flex items-center justify-between px-6 py-2 w-[100%] h-auto">
            <div class="flex justify-center items-center gap-1">
              <h1 class="text-sm text-white">Trial</h1>
              <h1 class="text-xl font-bold text-white">800</h1>
            </div>

            <div class="flex justify-center items-center gap-1">
              <h1 class="text-sm text-white">Free</h1>
              <h1 class="text-xl font-bold text-white">800</h1>
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
        <CardResto v-for="data in dataList" :key="data.resto.resto_id" :data="data" />
      </div>
    </section>
  </div>
</template>
