<script setup>
import { CardDoughnut } from '@/components/card'

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
</script>

<template>
  <section class="bg-layout">
    <div class="inline-flex h-[835px] py-12 px-6 items-start gap-5 shrink-0 rounded-3xl">
      <CardDoughnut
        title="Paket"
        desc="Statistik Pembelian Paket Dipilih"
        :values="[5, 10, 5]"
        :labels="['1 Bulan', '3 Bulan', '12 Bulan']"
      />
    </div>
  </section>
</template>
