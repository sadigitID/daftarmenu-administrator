<script setup>
import { WrapperChartDoughnut } from '@/components/wrapper'
import { WrapperChartBar } from '@/components/wrapper'
</script>

<template>
  <div class="w-80">
    <WrapperChartDoughnut :data="[5, 10, 5]" :labels="['1 Bulan', '3 Bulan', '12 Bulan']" />
  </div>

  <div class="w-[24rem]">
    <WrapperChartBar :data="[60, 55, 65, 50, 45, 55, 70]" :labels="['Nov 23', 'Dec 23', 'Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24']" />
  </div>
</template>