<script setup lang="ts">
import { Logo, Profil } from '@/components/icons/index.ts'
</script>

<template>
  <header class="flex justify-between items-center bg-white shadow-md">
    <div class="flex items-center ml-[16px] my-[8px]">
      <Logo class="h-[52px] w-[110px]" />
    </div>
    <div class="flex items-center">
      <button class="flex items-center px-4 py-2 bg-primary-50 rounded-full mr-[16px] my-[8px]">
        <Profil class="h-6 w-6 mr-2" />
        <span class="text-primary-800 font-normal">Admin</span>
      </button>
    </div>
  </header>
</template>
