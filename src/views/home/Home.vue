<script setup lang="ts">
import { CardDoughnut } from '@/components/card'
import { HomePageNegara, LaporanPendapatan, LoyalUser, PenilaianUser } from '@/components/'
import { defferenceInDays } from '@/utils/date'
import { onMounted } from 'vue'

onMounted(() => {
  var currentDay = new Date()
  var lastTimeStamp = 1717984603000

  var date = new Date(lastTimeStamp)
  console.log('defferenceInDays', defferenceInDays(currentDay, date))
})
</script>

<template>
  <div class="flex items-center justify-center w-full h-full p-6 bg-layout">
    <section id="home">
      <div class="flex-col">
        <LaporanPendapatan />

        <div class="flex p-6 items-start gap-4 shrink-0 rounded-3xl">
          <CardDoughnut
            title="Paket"
            desc="Statistik Pembelian Paket Dipilih"
            :values="[5, 10, 5]"
            :labels="['1 Bulan', '3 Bulan', '12 Bulan']"
          />
          <LoyalUser />
        </div>
      </div>
      <div class="px-6">
        <PenilaianUser />
        <HomePageNegara />
      </div>
    </section>
  </div>
</template>
