<script setup>
import { CardDoughnut } from '@/components/card'
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
