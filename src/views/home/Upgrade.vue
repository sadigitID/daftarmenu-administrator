<script setup>
import { IconSearch, Dropdown, UserInvalid, UserValid } from '@/components/icons'
import { Food } from '@/assets/image'
import { useAccountStore } from '@/stores/account'
import { CardResto } from '@/components/card'
import { RestoProfile } from '@/assets/image'
import { InputText } from '@/components/'
import { PopoverPanel } from '@headlessui/vue'

const dataList = [
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
]

const account = useAccountStore()
</script>

<template>
  <section id="upgrade" class="container overflow-hidden m-6 p-6 justify-between">
    <div class="flex container justify-between">
      <div class="">
        <h1 class="text-extrabold text-2xl text-primary-900">Daftar Pengguna</h1>
        <p class="text-base text-primary-900">Menampilkan 1350 pengguna</p>
      </div>
      <div class="flex justify-between">
        <div
          id="search"
          class="bg-gray-50 m-auto justify-center items-center flex border-1 rounded-lg px-2"
        >
          <IconSearch class="w-4 h-4" />
          <!-- <input class="text-primary-900 font-light text-sm searchTerm bg-gray-50" placeholder="Cari Menu"> -->
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

    <div class="container overflow-hidden flex gap-5 w-full m-auto py-6">
      <div class="relative flex items-center rounded-2xl overflow-hidden w-1/4 h-[115px]">
        <img :src="Food" alt="food" class="object-cover object-center w-full h-full" />
      </div>

      <div
        class="bg-primary-900 relative flex justify-center items-center rounded-xl p-4 w-1/4 h-[115px]"
      >
        <UserValid class="gap-4 fill-white" />
        <div>
          <h1 class="text-white text-xs">Hari Ini Bergabung</h1>
          <h1 class="text-white text-lg font-semibold">800</h1>
        </div>
      </div>

      <div class="bg-primary-50 flex p-4 justify-center items-center rounded-xl w-1/4 h-[115px]">
        <UserInvalid class="gap-4 m-2 fill-primary-900" />
        <div>
          <div class="flex items-center justify-start gap-1">
            <h1 class="text-primary-900 text-lg font-semibold">800</h1>
            <h1 class="text-primary-900 text-sm">User Aktif</h1>
          </div>
          <div class="flex items-center justify-center gap-1">
            <h1 class="text-primary-900 text-lg font-semibold">800</h1>
            <h1 class="text-primary-900 text-sm">User Tidak Aktif</h1>
          </div>
        </div>
      </div>

      <div
        class="bg-primary-50 flex flex-col justify-center items-center rounded-2xl overflow-hidden w-1/4 h-[115px]"
      >
        <div class="bg-primary-50 flex w-full m-auto justify-center items-center pt-4">
          <UserValid class="gap-4 m-2 fill-primary-900" />
          <div>
            <h1 class="text-primary-900 text-xs">Premium</h1>
            <h1 class="text-primary-900 text-lg font-semibold">800</h1>
          </div>
        </div>
        <div class="bg-primary-900 flex justify-between p-4 w-full">
          <div class="flex justify-center items-center gap-1 pb-2">
            <h1 class="text-sm text-white">Trial</h1>
            <h1 class="text-xl font-semibold text-white">800</h1>
          </div>
          <div class="flex justify-center items-center gap-1 pb-2">
            <h1 class="text-sm text-white">Free</h1>
            <h1 class="text-xl font-semibold text-white">800</h1>
          </div>
        </div>
      </div>
    </div>

    <!-- Resto Card Components -->
    <div name="resto" id="resto" class="grid grid-cols-4 gap-x-4 gap-y-6">
      <CardResto
        v-for="data in dataList"
        :key="data.resto.resto_id"
        :resto_image="data.resto.resto_image"
        :resto_name="data.resto.resto_name"
        :account_subscription="data.account.account_subscription"
        :account_subscription_id="data.account.account_subscription_id"
        :account_subscription_expired="data.account.account_subscription_expired"
      />
    </div>
  </section>
</template>
