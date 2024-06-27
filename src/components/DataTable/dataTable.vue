<script setup lang="ts">
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net'
import 'datatables.net-select'
import 'datatables.net-responsive'
import { layouts } from 'chart.js'

import { useRestoStore } from '@/stores/resto'
import { computed, onMounted, ref } from 'vue'

DataTable.use(DataTablesCore)

const resto = useRestoStore()
const data = ref<any>([])

const loadData = () => {
  let number = 0
  data.value = resto.account_data.map((e) => {
    number += 1
    return Object.values({
      resto_number: number,
      resto_name: e.resto.resto_name,
      resto_subs: e.account.account_subscription,
      resto_expr: e.account.account_subscription_expired,
      resto_pay_method: e.account.account_payment_method,
      resto_price: 0.0
    })
  })
}

loadData()
// const dataDummy = [
//   {
//     resto_idx: '1',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '3 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '2',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '1 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '3',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '6 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '1',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '3 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '2',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '1 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '3',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '6 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '1',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '3 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '2',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '1 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '3',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '6 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '1',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '3 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '2',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '1 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '3',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '6 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '1',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '3 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '2',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '1 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '3',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '6 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '1',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '3 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '2',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '1 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '3',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '6 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '1',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '3 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '2',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '1 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '3',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '6 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '1',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '3 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '2',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '1 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '3',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '6 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '1',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '3 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '2',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '1 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '3',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '6 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '1',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '3 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '2',
//     resto_name: 'KFC Sumedang',
//     resto_subs_id: '1 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   },
//   {
//     resto_idx: '3',
//     resto_name: 'Rumah Makan Saayana',
//     resto_subs_id: '6 Bulan',
//     resto_expr: '5 Mei 2024',
//     resto_payment_method: 'Bank Transfer',
//     resto_total_price: '75.000'
//   }
// ]

// const data = data1.map((obj) => Object.values(obj))

const optionTable = {
  responsive: true,
  scrollX: true,
  pageLength: 5,
  lengthMenu: [5, 10, 25, 50, 100],
  layouts: {
    topStart: {
      buttons: ['copy', 'csv', 'excel', 'pdf']
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-6 p-4 lg:p-6 bg-white rounded-2xl xl:bg-none">
    <h1 class="text-[20px] font-medium leading-4">Log Transaksi</h1>

    <DataTable class="display nowrap" :data="data" :options="optionTable">
      <thead>
        <tr>
          <th>No.</th>
          <th>Nama Resto</th>
          <th>Paket</th>
          <th>Tanggal</th>
          <th>Metode Bayar</th>
          <th>Jumlah</th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>

<style>
@import 'datatables.net-dt';
</style>
