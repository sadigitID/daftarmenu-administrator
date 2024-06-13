<script setup>
import { ChartBar } from '@/components/charts'

</script>

<template>
  <div id="app">
    <ChartBar :chartDataValues="chartData" :chartLabels="chartLabels" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    ChartBar
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
