<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import type { ChartOptions } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Props {
  chartDataValues: number[]
  chartLabels: string[]
}

const props = defineProps<Props>()

const chartData = computed(() => ({
  labels: props.chartLabels,
  datasets: [
    {
      backgroundColor: ['#d3e8c8', '#70b44e', '#3e632b'],
      data: props.chartDataValues
    }
  ]
}))

const chartOptions: ChartOptions<'doughnut'> = {
  layout: {},
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 16,
        usePointStyle: true,
        pointStyle: 'circle'
      }
    }
  },
  aspectRatio: 1.8,
  borderColor: 'white',
  cutout: '62%'
}
</script>
