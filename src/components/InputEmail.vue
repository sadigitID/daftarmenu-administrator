<script setup>
import { useAccountStore } from '@/stores/account';

const account = useAccountStore()



</script>

<template>

<input
          v-model="account.email"
          type="email"
          id="email"
          name="email"
          placeholder="Masukan Email"
          class="w-full rounded-lg py-1 border-x-8 border-gray-50 bg-gray-50 text-dark text-start"
          required
        />

</template>