<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale)

export default {
  name: 'ChartBar',
  components: {
    Bar
  },
  props: {
    chartDataValues: {
      type: Array,
      required: true
    },
    chartLabels: {
      type: Array,
      required: true
    }
  },
  computed: {
    chartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: '',
            data: this.chartDataValues,
            backgroundColor: '#d3e8c8',
            hoverBackgroundColor: '#70b44e',
            borderRadius: 6,
            borderWidth: 2,
            borderColor: '#d3e8c8',
            hoverBorderColor: '#70b44e',
            maxBarThickness: 25,
          }
        ]
      }
    }
  },
  data() {
    return {
      chartOptions: {
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
    }
  }
}
</script>

