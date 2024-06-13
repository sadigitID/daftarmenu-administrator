<script setup>
import { useAccountStore } from '@/stores/account'
const account = useAccountStore()

import Navigasi from '@/components/Navigasi.vue'
import Header from '@/components/Header.vue'
import { LaporanPendapatan } from '@/components'
</script>

<template>
  <h1 class="">
    {{ account.getEmail() }}
  </h1>
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
