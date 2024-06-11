<script setup>
import { WrapperChartDoughnut } from '@/components/wrapper'
</script>

<template>
  <div class="w-80">
    <WrapperChartDoughnut :data="[5, 10, 5]" :labels="['1 Bulan', '3 Bulan', '12 Bulan']" />
  </div>
</template>