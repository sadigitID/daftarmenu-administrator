<script setup>
import { ChartDoughnut } from '@/components/charts';

</script>

<template>
  <ChartDoughnut :chartDataValues="chartData" :chartLabels="chartLabels" />
</template>

<script>
export default {
  name: 'App',
  components: {
    ChartDoughnut
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chartData: this.data,
      chartLabels: this.labels
    };
  }
};
</script>
