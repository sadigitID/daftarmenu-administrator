<script setup lang="ts">
import { CardPaket } from '@/components/card'
import { HomePageNegara, LaporanPendapatan, LoyalUser, PenilaianUser } from '@/components/'
// import { onMounted } from 'vue'

// import { useHomeStore } from '@/stores/home'

// // const stores = useHomeStore()
// npm install vue-country-flag
// onMounted(() => {
//   var currentDay = new Date()
//   var lastTimeStamp = 1717984603000
//   var date = new Date(lastTimeStamp)
//   console.log('defferenceInDays', defferenceInDays(currentDay, date))
// })

onMounted(() => {
  document.title = 'Home - Admin Daftar Menu'
})
</script>

<template>
  <section class="custom-spacing">
    <div
      class="flex flex-col gap-6 mb-[100px] md:mb-0 xl:items-start lg:justify-between xl:flex-row w-full"
    >
      <div class="flex flex-col gap-6 xl:w-[70%]">
        <LaporanPendapatan />

        <div class="flex flex-col items-start gap-4 lg:flex-row shrink-0 rounded-3xl">
          <CardPaket />
          <LoyalUser />
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <PenilaianUser />
        <HomePageNegara />
      </div>
    </div>
  </section>
</template>

<!-- <section id="upgrade" class="flex w-auto gap-5 py-12 overflow-hidden bg-white h-fixed rounded-3xl">
      <div class="flex-col">
        <LaporanPendapatan />

        <div class="flex items-start gap-4 p-6 shrink-0 rounded-3xl">
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
    -->
