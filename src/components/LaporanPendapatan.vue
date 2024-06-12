<script setup lang="ts">
import { LaporanComponents, PendapatanComponents } from '@/components'

const LaporanItems = [
  {
    month: 'Mei ',
    year: '2024',
    monthlyIncome: ' 2.000.000',
    lastUpdated: '5 menit yang lalu'
  }
]

const PendapatanItems = [
  {
    month: 'April',
    year: '2024',
    monthlyIncome: 'Rp 2. 500.000'
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
  <div class="flex w-[810px] p-6 flex-col gap-6 shadow-custom-gray">
    <div>
      <div>
        <LaporanComponents
          v-for="LaporanComponents in LaporanItems"
          :month="LaporanComponents.month"
          :year="LaporanComponents.year"
          :monthlyIncome="LaporanComponents.monthlyIncome"
          :lastUpdated="LaporanComponents.lastUpdated"
        />
      </div>
    </div>
    <div class="flex">
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
