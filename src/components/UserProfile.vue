<script setup>
defineProps({
profile: String,
nama: String,
nilai: String }) 
</script>
 
<template>
    <div class="flex justify-between items-center self-stretch">
    <div class="flex items-center gap-2">
     <div class="size-8 rounded[32px]">
      <img :src="profile" alt="" />
     </div>
      <p class="font-sans font-normal text-base leading-5">{{nama}}</p>
  </div>
    <p class="font-sans font-medium text-lg">{{ nilai }}</p>
    </div>
</template>
