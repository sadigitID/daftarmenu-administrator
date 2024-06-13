<script setup lang="ts">
import { Navigasi, Header } from '@/components/'
import PopUpMenu from './home/PopUpMenu.vue'
</script>

<template>
  <div class="flex h-screen">
    <Navigasi />
    <div class="flex flex-col flex-grow">
      <Header />
      <main class="">
        <!-- Konten utama di sini -->
        <PopUpMenu />
      </main>
    </div>
  </div>
</template>
