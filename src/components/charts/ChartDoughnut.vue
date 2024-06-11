<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script>
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: 'ChartDoughnut',
  components: {
    Doughnut
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
            backgroundColor: ['#d3e8c8', '#70b44e', '#3e632b'],
            data: this.chartDataValues
          }
        ]
      };
    }
  },
  data() {
    return {
      chartOptions: {
        layout: {
          padding: {
            top: 10,
            bottom: 10
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 10,
              usePointStyle: true,
              pointStyle: 'circle'
            }
          }
        },
        //mantainAspectRatio: false,
        aspectRatio: 2,
        borderWidth: 4,
        borderColor: 'white',
        cutout: '60%'
      },
    };
  }
};
</script>
