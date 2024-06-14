<script setup lang="ts">
import { IconSearch, UserInvalid, UserValid } from '@/components/icons'
import { Food } from '@/assets/image'
import { CardResto } from '@/components/card'
import { RestoProfile } from '@/assets/image'
import { InputText } from '@/components/'
import type { RestaurantModel } from '@/utils/types'
import { onMounted, ref } from 'vue'
import PopUpResto from '@/components/dialogs/PopUpResto.vue'
import { useRestoStore } from '@/stores/resto'
const searchQuery = ref('')
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

  <section id="upgrade" class="container justify-between p-6 m-6 overflow-hidden">
    <div class="container flex justify-between">
      <div class="">
        <h1 class="text-2xl text-extrabold text-primary-900">Daftar Pengguna</h1>
        <p class="text-base text-primary-900">Menampilkan 1350 pengguna</p>
      </div>
      <div class="flex justify-between">
        <div
          id="search"
          class="flex items-center justify-center px-2 m-auto rounded-lg bg-gray-50 border-1"
        >
          <IconSearch class="w-4 h-4" />
          <!-- <input class="text-sm font-light text-primary-900 searchTerm bg-gray-50" placeholder="Cari Menu"> -->
          <InputText v-model:value="searchQuery" placeholder="Cari Menu" />
        </div>

        <!-- <Popover placeholder="filter" class="relative bg-gray-50 m-auto mx-2  px-1 py-1 justify-center items-center flex border-1 rounded-lg  ">

                <PopoverPanel placeholder="Filter" value="filter">
                    <p>Status Berlangganan</p>
                    <option type="checkbox" value="free">Free</option>
                    <option type="checkbox" value="Trial">Trial</option>
                    <option type="checkbox" value="premium">Premium</option>

                </PopoverPanel>



            </Popover> -->
      </div>
    </div>

    <div class="container flex w-full gap-5 py-6 m-auto overflow-hidden">
      <div class="relative flex items-center rounded-2xl overflow-hidden w-1/4 h-[115px]">
        <img :src="Food" alt="food" class="object-cover object-center w-full h-full" />
      </div>

      <div
        class="bg-primary-900 relative flex justify-center items-center rounded-xl p-4 w-1/4 h-[115px]"
      >
        <UserValid class="gap-4 fill-white" />
        <div>
          <h1 class="text-xs text-white">Hari Ini Bergabung</h1>
          <h1 class="text-lg font-semibold text-white">800</h1>
        </div>
      </div>

      <div class="bg-primary-50 flex p-4 justify-center items-center rounded-xl w-1/4 h-[115px]">
        <UserInvalid class="gap-4 m-2 fill-primary-900" />
        <div>
          <div class="flex items-center justify-start gap-1">
            <h1 class="text-lg font-semibold text-primary-900">800</h1>
            <h1 class="text-sm text-primary-900">User Aktif</h1>
          </div>
          <div class="flex items-center justify-center gap-1">
            <h1 class="text-lg font-semibold text-primary-900">800</h1>
            <h1 class="text-sm text-primary-900">User Tidak Aktif</h1>
          </div>
        </div>
      </div>

      <div
        class="bg-primary-50 flex flex-col justify-center items-center rounded-2xl overflow-hidden w-1/4 h-[115px]"
      >
        <div class="flex items-center justify-center w-full pt-4 m-auto bg-primary-50">
          <UserValid class="gap-4 m-2 fill-primary-900" />
          <div>
            <h1 class="text-xs text-primary-900">Premium</h1>
            <h1 class="text-lg font-semibold text-primary-900">800</h1>
          </div>
        </div>
        <div class="flex justify-between w-full p-4 bg-primary-900">
          <div class="flex items-center justify-center gap-1 pb-2">
            <h1 class="text-sm text-white">Trial</h1>
            <h1 class="text-xl font-semibold text-white">800</h1>
          </div>
          <div class="flex items-center justify-center gap-1 pb-2">
            <h1 class="text-sm text-white">Free</h1>
            <h1 class="text-xl font-semibold text-white">800</h1>
          </div>
        </div>
      </div>
    </div>

    <!-- Resto Card Components -->
    <div name="resto" id="resto" class="grid grid-cols-4 gap-x-4 gap-y-6">
      <CardResto v-for="data in dataList" :key="data.resto.resto_id" :data="data" />
    </div>
  </section>
</template>
