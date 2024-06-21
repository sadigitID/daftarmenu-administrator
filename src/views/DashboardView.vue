<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAccountStore } from '@/stores/account'
import { Navigasi, Header } from '@/components'

const account = useAccountStore()
</script>

<template>
  <div class="flex">
    <Navigasi />
  </div>
  <div>
    <div class="flex flex-col flex-grow">
      <Header />
      <main class="pt-20 pl-24">
        <RouterView />
      </main>
    </div>
  </div>
</template>
