<script setup lang="ts">
import { Navigasi, Header } from '@/components/'
</script>

<template>
  <div class="flex h-screen">
    <Navigasi />
    <div class="flex flex-col flex-grow">
      <Header />
      <main class="">
        <!-- Konten utama di sini -->
      </main>
    </div>
  </div>
</template>
