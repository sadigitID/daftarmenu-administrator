<script setup lang="ts">
import Navigasi from '@/components/Navigasi.vue'
import Header from '@/components/Header.vue'
import { LaporanPendapatan } from '@/components'
</script>

<template>
  <div class="flex h-screen">
    <Navigasi />
    <div class="flex flex-col flex-grow">
      <Header />
      <main class="">
        <!-- Konten utama di sini -->
        <LaporanPendapatan />
      </main>
    </div>
  </div>
</template>
