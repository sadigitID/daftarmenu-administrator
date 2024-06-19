<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import type { ChartOptions } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale)

interface Props {
  chartDataValues: number[]
  chartLabels: string[]
}

const props = defineProps<Props>()

const chartData = computed(() => ({
  labels: props.chartLabels,
  datasets: [
    {
      label: '',
      data: props.chartDataValues,
      backgroundColor: '#d3e8c8',
      hoverBackgroundColor: '#70b44e',
      borderRadius: 6,
      borderWidth: 2,
      borderColor: '#d3e8c8',
      hoverBorderColor: '#70b44e',
      maxBarThickness: 25
    }
  ]
}))

const chartOptions: ChartOptions<'bar'> = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        display: false
      },
      grid: {
        display: false
      },
      border: {
        display: false
      }
    },
    x: {
      grid: {
        display: false
      },
      border: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        boxWidth: 0
      }
    }
  }
}
</script>
