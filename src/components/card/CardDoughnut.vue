<template>
  <div
    class="flex w-[347px] p-6 items-center gap-4 rounded-2xl bg-white shadow-[1px_1px_8px_0px_rgba(180,180,180,0.39)] font-sans"
  >
    <div class="flex flex-col justify-center items-start gap-8 flex-[1_0_0]">
      <div class="flex flex-col items-start gap-1 self-stretch">
        <p class="text-xl font-medium">{{ title }}</p>
        <p class="text-sm font-normal">{{ desc }}</p>
      </div>
      <div class="flex justify-center items-center gap-4 self-stretch">
        <ChartDoughnut :chartDataValues="chartData" :chartLabels="chartLabels" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChartDoughnut } from '@/components/charts'

interface Props {
  title: string;
  desc: string;
  values: number[];
  labels: string[];
}

const props = defineProps<Props>()

const title = ref(props.title)
const desc = ref(props.desc)
const chartData = ref(props.values)
const chartLabels = ref(props.labels)
</script>
