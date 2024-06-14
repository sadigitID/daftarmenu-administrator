<script setup>
import { ChartDoughnut } from '@/components/charts'
</script>

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

<script>
export default {
  name: 'App',
  components: {
    ChartDoughnut
  },
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    values: {
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
      title: this.title,
      desc: this.desc,
      chartData: this.values,
      chartLabels: this.labels
    }
  }
}
</script>
