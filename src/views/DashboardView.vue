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
  <div class="flex flex-col flex-1 flex-grow md:ml-[120px]">
    <div class="flex flex-col flex-grow">
      <Header />
      <main class="md:pt-20 md:pl-20 p-4 mt-[80px] md:mt-0">
        <RouterView />
      </main>
    </div>
  </div>
</template>
