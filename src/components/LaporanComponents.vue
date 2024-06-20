<script setup lang="ts">
defineProps({
  month: String,
  year: String,
  monthlyIncome: String,
  lastUpdated: String
})
</script>

<template>
  <div class="income-header">
    <h1 class="text-xl font-semibold">Laporan Pendapatan</h1>
    <p class="font-normal font-sans leading-relaxed text-sm text-gray-700 mt-1">
      Pendapatan Bulan Ini
      <span class="highlight text-primary-500 font-semibold">{{ month }} {{ year }}</span>
    </p>
    <h2 class="text-2xl font-bold mt-6 leading-8 text-primary-800">Rp {{ monthlyIncome }}</h2>
    <p class="update-info text-xs font-normal leading-5">*Diupdate {{ lastUpdated }}</p>
  </div>
</template>
