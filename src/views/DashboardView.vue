<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Navigasi, Header, Footer } from '@/components'
</script>

<template>
  <div class="flex flex-col justify-between md:flex-row">
    <Navigasi />
    <Header />

    <main class="flex flex-col flex-1 flex-grow md:ml-[120px] mt-[94px] md:mt-[70px] p-4 md:p-6">
      <RouterView />
    </main>
  </div>
</template>
