<script setup lang="ts">
import { LaporanComponents, PendapatanComponents } from '@/components'
import { WrapperChartBar } from '@/components/card'

const LaporanItems = [
  {
    month: 'Mei ',
    year: '2024',
    monthlyIncome: '2.000.000',
    lastUpdated: '5 menit yang lalu'
  }
]

const PendapatanItems = [
  {
    month: 'April',
    year: '2024',
    monthlyIncome: 'Rp 2.500.000'
  },
  {
    month: 'Est. Tahun',
    year: '2024',
    monthlyIncome: 'Rp 23.000.000'
  },
  {
    month: 'Tahun',
    year: '2023',
    monthlyIncome: 'Rp 33.000.000',
    type: 'primary'
  }
]
</script>
<template>
  <div
    class="flex w-[810px] px-6 py-6 mt-6 ml-6 flex-col gap-6 bg-whites shadow-custom-gray rounded-2xl bg-white"
  >
    <div class="flex justify-between items-center self-stretch">
      <div>
        <LaporanComponents
          v-for="LaporanComponents in LaporanItems"
          :month="LaporanComponents.month"
          :year="LaporanComponents.year"
          :monthlyIncome="LaporanComponents.monthlyIncome"
          :lastUpdated="LaporanComponents.lastUpdated"
        />
      </div>
      <div>
        <div class="w-[24rem]">
          <WrapperChartBar
            :data="[60, 55, 65, 50, 45, 55, 70]"
            :labels="['Nov 23', 'Dec 23', 'Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24']"
          />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <PendapatanComponents
        v-for="PendapatanComponents in PendapatanItems"
        :month="PendapatanComponents.month"
        :year="PendapatanComponents.year"
        :monthlyIncome="PendapatanComponents.monthlyIncome"
        :type="PendapatanComponents.type"
      />
    </div>
  </div>

  <template />
</template>
