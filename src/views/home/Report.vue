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
  <section class="bg-layout ps-[6%] pe-[3%] py-[50px]">
    <div class="bg-white rounded-2xl p-6 flex items-start justify-between">
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
