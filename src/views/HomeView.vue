<script setup>
import { useAccountStore } from '@/stores/account'
const account = useAccountStore()
</script>

<template>
  <h1 class="">
    {{ account.getEmail() }}
  </h1>
</template>
