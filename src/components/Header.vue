<script setup lang="ts">
import { Logo, Profil } from '@/components/icons'
</script>

<template>
 <header class="fixed top-0 left-0 right-0 h-[82px] flex items-center justify-between bg-white shadow-md px-4 py-2">
    <div class="flex items-center ml-4">
      <Logo class="w-[110px] h-[52px] ml-28" />
    </div>
    <div class="flex items-center">
      <button class="flex justify-center space-x-2.5 items-center px-4 py-2 bg-primary-50 rounded-full mr-[25px]">
        <Profil class="w-6 h-6 " />
        <span class="text-xs text-primary-800 font-bold">Admin</span>
      </button>
    </div>
</header>
</template>
