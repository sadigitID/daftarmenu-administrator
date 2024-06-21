<script setup lang="ts">
import { computed, ref } from 'vue'
import { ChartDoughnut } from '@/components/charts'
import { useHomeStore } from '@/stores/home'

const stores = useHomeStore()

const paketJenisLanggananUser = computed(() => [
  stores.countJenisLanggananUser(0),
  stores.countJenisLanggananUser(1),
  stores.countJenisLanggananUser(2) +
    stores.countJenisLanggananUser(3) +
    stores.countJenisLanggananUser(4) +
    stores.countJenisLanggananUser(5)
])

const title = ref('Jenis User')
const desc = ref('Statistik Pembelian Paket Dipilih')
const chartData = ref(paketJenisLanggananUser)
const chartLabels = ref(['Free', 'Trial', 'Premium'])
</script>

<template>
  <div
    class="flex w-full p-6 items-center gap-4 rounded-2xl bg-white shadow-[1px_1px_8px_0px_rgba(180,180,180,0.39)] font-sans"
  >
    <div class="flex flex-col justify-center items-start gap-8 flex-[1_0_0]">
      <div class="flex flex-col items-start gap-1 self-stretch">
        <p class="text-xl font-medium">{{ title }}</p>
        <p class="text-sm font-normal">{{ desc }}</p>
      </div>
      <div class="flex justify-center items-center gap-4 self-stretch mx-auto sm:w-[80%] lg:w-auto">
        <ChartDoughnut :chartDataValues="chartData" :chartLabels="chartLabels" />
      </div>
    </div>
  </div>
</template>
