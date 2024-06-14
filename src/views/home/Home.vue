<script setup>
import { CardDoughnut } from '@/components/card'
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
  <section>
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
