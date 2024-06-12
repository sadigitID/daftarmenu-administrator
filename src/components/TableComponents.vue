<script setup>
const dummyData = [
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
    restoTitle: 'Resto 1',
    restoPaket: '1 Bulan',
    tgl: '5 Mei 2024',
    payMethod: 'Bank Transfer',
    jumlah: '75.000'
  },
  {
    count: 3,
    restoTitle: 'Resto 1',
    restoPaket: '1 Bulan',
    tgl: '5 Mei 2024',
    payMethod: 'Bank Transfer',
    jumlah: '75.000'
  }
]
</script>

<template>
  <table class="table-auto w-full">
    <thead class="bg-gray-50">
      <tr class="text-gray-900">
        <th class="p-3 text-sm font-semibold tracking-wide text-cente">No</th>
        <th class="p-3 text-sm font-semibold tracking-wide text-left w-[300px]">Nama Resto</th>
        <th class="p-3 text-sm font-semibold tracking-wide text-center w-[74px]">Paket</th>
        <th class="p-3 text-sm font-semibold tracking-wide text-center w-[94px]">Tanggal</th>
        <th class="p-3 text-sm font-semibold tracking-wide text-center w-[166px]">Metode Bayar</th>
        <th class="p-3 text-sm font-semibold tracking-wide text-right w-[135px]">Jumlah</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in dummyData"
        :key="item.count"
        :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
      >
        <td class="p-3 text-sm font-normal text-gray-900 text-center whitespace-nowrap">
          {{ item.count }}
        </td>
        <td class="p-3 text-sm font-normal text-gray-900 text-left whitespace-nowrap">
          {{ item.restoTitle }}
        </td>
        <td class="p-3 text-sm font-normal text-gray-900 text-center whitespace-nowrap">
          {{ item.restoPaket }}
        </td>
        <td class="p-3 text-sm font-normal text-gray-900 text-center whitespace-nowrap">
          {{ item.tgl }}
        </td>
        <td class="p-3 text-sm font-normal text-gray-900 text-center whitespace-nowrap">
          {{ item.payMethod }}
        </td>
        <td class="p-3 text-sm font-normal text-gray-900 text-right whitespace-nowrap">
          {{ item.jumlah }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
