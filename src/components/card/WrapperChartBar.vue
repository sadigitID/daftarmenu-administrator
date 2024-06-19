<template>
  <div>
    <ChartBar :chartDataValues="chartData" :chartLabels="chartLabels" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChartBar } from '@/components/charts'

interface Props {
  data: number[];
  labels: string[];
}

const props = defineProps<Props>()

const chartData = ref(props.data)
const chartLabels = ref(props.labels)
</script>