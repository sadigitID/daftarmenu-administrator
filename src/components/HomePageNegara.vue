<script setup lang="ts">
import { Negara1, Negara2 } from '@/components/icons/'

// Array data pengguna dari berbagai negara
const NegaraItem = [
  {
    icon: Negara1,
    title: 'Indonesia',
    jmlpengguna: '1K Pengguna'
  },
  {
    icon: Negara2,
    title: 'Palestine',
    jmlpengguna: '200 Pengguna'
  }
]
</script>

<template>
  <section class="w-full bg-white shadow-sdw p-4 rounded-xl">
    <div class="mb-8">
      <h1 class="text-xl pb-0.5 font-medium">Negara</h1>
      <p class="text-sm">Sebaran negara pengguna daftarmenu</p>
    </div>
    <div
      v-for="(negara, index) in NegaraItem"
      :key="index"
      class="flex items-center justify-between mb-4 rounded-lg"
    >
      <div class="flex items-center">
        <component :is="negara.icon" class="w-6 h-6 mr-2" />
        <span class="text-base">{{ negara.title }}</span>
      </div>
      <p class="text-sm font-medium">{{ negara.jmlpengguna }}</p>
    </div>
  </section>
</template>
