<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Navigasi, Header } from '@/components'
</script>

<template>
  <div class="flex h-screen">
    <Navigasi />
  </div>
  <div>
    <div class="flex flex-col flex-grow">
      <Header />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
