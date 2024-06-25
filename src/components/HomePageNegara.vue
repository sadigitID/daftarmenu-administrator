<script setup lang="ts">
import CountryFlag from 'vue-country-flag-next'

// Array data pengguna dari berbagai negara
const NegaraItem = [
  {
    code: 'ID',
    title: 'Indonesia',
    jmlpengguna: '1K Pengguna'
  },
  {
    code: 'PS',
    title: 'Palestine',
    jmlpengguna: '200 Pengguna'
  }
]
</script>

<template>
  <section class="w-full bg-white shadow-custom-gray p-4 rounded-xl">
    <div class="mb-8">
      <h1 class="text-xl pb-0.5 font-medium">Negara</h1>
      <p class="text-sm">Sebaran negara pengguna daftarmenu</p>
    </div>
    <div
      v-for="(negara, index) in NegaraItem"
      :key="index"
      class="flex items-center justify-between mb-4 rounded-lg"
    >
      <div class="flex items-center space-x-2">
        <div>
          <CountryFlag :country="negara.code" size="normal" :title="negara.title" rounded="true" />
        </div>
        <p class="text-base">{{ negara.title }}</p>
      </div>
      <p class="text-sm font-medium">{{ negara.jmlpengguna }}</p>
    </div>
  </section>
</template>
