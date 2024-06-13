<script setup>
import { useAccountStore } from '@/stores/account'
import { RouterView } from 'vue-router'
const account = useAccountStore()

import Navigasi from '@/components/Navigasi.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <!-- <h1 class="">
    {{ account.getEmail() }}
  </h1> -->
  <div class="flex h-screen">
    <Navigasi />
    <div class="flex flex-col flex-grow">
      <Header />
      <main class="">
        <RouterView />
      </main>
    </div>
  </div>
</template>

