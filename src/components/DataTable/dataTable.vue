<script setup lang="ts">
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net'
import 'datatables.net-select'
import 'datatables.net-responsive'

DataTable.use(DataTablesCore)

const data = [
  {
    count: 1,
    restoTitle: 'Resto 1',
    restoPaket: '1 Bulan',
    tgl: '5 Mei 2024',
    payMethod: 'Bank Transfer',
    jumlah: '75.000'
  },
  {
    count: 2,
    restoTitle: 'Resto 2',
    restoPaket: '1 Bulan',
    tgl: '5 Mei 2024',
    payMethod: 'Bank Transfer',
    jumlah: '75.000'
  },
  {
    count: 3,
    restoTitle: 'Resto 3',
    restoPaket: '1 Bulan',
    tgl: '5 Mei 2024',
    payMethod: 'Bank Transfer',
    jumlah: '75.000'
  }
]

const dataArray = data.map((obj) => Object.values(obj))
</script>

<template>
  <div class="flex flex-col gap-6 p-6 bg-white rounded-2xl xl:bg-none -z-10 md:z-0">
    <h1 class="text-[20px] font-medium leading-4">Log Transaksi</h1>
    <DataTable class="display" :data="dataArray">
      <thead>
        <tr>
          <th>No.</th>
          <th>Nama Resto</th>
          <th>Paket</th>
          <th>Tgl</th>
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
