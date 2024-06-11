<script setup>
import { ChartDoughnut } from '@/components/charts';
</script>

<template>
  <div class="w-80 h-auto">
    <ChartDoughnut :chartDataValues="chartData" :chartLabels="chartLabels" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    ChartDoughnut
  },
  data() {
    return {
      chartData: [5, 10, 5],
      chartLabels: ['1 Bulan', '3 Bulan', '12 Bulan']
    };
  }
};
</script>
