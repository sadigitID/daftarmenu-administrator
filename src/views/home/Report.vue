<script setup lang="ts">
import { CardJenisUser, CardMetodeBayar } from '@/components/card'
import { LaporanPendapatan } from '@/components'
import { TableComponents } from '@/components'

// Data belum dari API
const chartData = [
  {
    title: 'Jenis User',
    desc: 'Statistik Pembelian Paket Dipilih',
    values: [5, 10, 5],
    labels: ['Free', 'Trial', 'Premium']
  },
  {
    title: 'Metode Bayar',
    desc: 'Metode Pembayaran',
    values: [5, 10, 5],
    labels: ['Bank Transfer', 'Paypal', 'Qris']
  }
]
</script>

<template>
  <section class="md:p-6 md:ms-4 md:mt-0 flex justify-center items-start">
    <div
      class="container xl:w-full flex flex-col gap-6 mb-[100px] md:mb-0 lg:bg-white md:ms-6 rounded-3xl xl:items-start lg:justify-between xl:flex-row overflow-hidden h-fixed lg:p-8"
    >
      <section class="report-cost flex flex-col gap-[46px]">
        <LaporanPendapatan />
        <TableComponents />
      </section>
      <div class="inline-flex flex-col items-start gap-6 shrink-0 rounded-3xl">
        <CardJenisUser />
        <CardMetodeBayar />
      </div>
    </div>
  </section>
</template>

<!-- 

<div class="inline-flex h-[835px] py-12 px-6 items-start gap-5 shrink-0 rounded-3xl">
      <CardDoughnut
        v-for="data in chartData"
        :key="data.title"
        :title="data.title"
        :desc="data.desc"
        :values="data.values"
        :labels="data.labels"
      />
    </div> -->
