<script setup lang="ts">
import { User  } from "@/components";
import { Prof } from "@/assets/image/";

const user = [
  {
    profile: Prof,
    nama: 'Resto A',
    nilai: '10X',
  },
  {
    profile: Prof,
    nama: 'Resto A',
    nilai: '10X',
  },
  {
    profile: Prof,
    nama: 'Resto A',
    nilai: '10X',
  },
]

</script>
<template>
<div class="w-[1440px] h-[1024px] bg-primary-50 pl-36 pt-28 pr-6 pb-20">
  <div class="px-6 py-12 w-[1272px] h-[835px] bg-white gap-4 rounded-3xl">
        <div class="mt-5 w-[394px] h-auto p-6 gap-4 bg-white rounded-2xl flex items-center shadow-[1px_1px_8px_rgba(180,180,180,0.39)]">
    <div class="flex flex-col justify-center items-start gap-8 flex-1 bottom-0">
      <div class="flex flex-col items-start gap-1">  
      <p class="font-sans font-medium leading-6 text-xl">Loyal User</p>
      <p class="font-sans font-normal leading-[22.4px] text-sm">User yang sering upgrade </p>
      </div>
    <User
          v-for="user in user"
          :profile="user.profile"
          :nama="user.nama"
          :nilai="user.nilai"
        />
    </div>
 </div>
  </div>
  </div>

 
</template>