<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAccountStore } from '@/stores/account'
import { Navigasi, Header } from '@/components'

const account = useAccountStore()
</script>

<template>
  <div class="flex h-screen">
    <Navigasi />
    <div class="flex flex-col flex-grow">
      <Header />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
