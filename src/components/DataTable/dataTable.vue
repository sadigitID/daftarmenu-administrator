<script setup lang="ts">
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net'
import 'datatables.net-select'
import 'datatables.net-responsive'

DataTable.use(DataTablesCore)

const dataDummy = [
  {
    count: 1,
    resto_name: 'Resto 1',
    resto_package: '3 Bulan',
    resto_expr: '5 Mei 2024',
    resto_payMethod: 'Bank Transfer',
    resto_price: '75.000'
  },
  {
    count: 1,
    resto_name: 'Resto 2',
    resto_package: '3 Bulan',
    resto_expr: '5 Mei 2024',
    resto_payMethod: 'Bank Transfer',
    resto_price: '75.000'
  },
  {
    count: 1,
    resto_name: 'Resto 3',
    resto_package: '3 Bulan',
    resto_expr: '5 Mei 2024',
    resto_payMethod: 'Bank Transfer',
    resto_price: '75.000'
  },
  {
    count: 1,
    resto_name: 'Resto 4',
    resto_package: '1 Bulan',
    resto_expr: '5 Mei 2024',
    resto_payMethod: 'Bank Transfer',
    resto_price: '75.000'
  }
]

const optionTable = {
  responsive: true,
  select: false,
  paging: true,
  scrollX: true,
  searching: true
}

const data = dataDummy.map((obj) => Object.values(obj))
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
