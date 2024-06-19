<script setup lang="ts">
defineProps({
  profile: String,
  nama: String,
  nilai: String
})
</script>

<template>
  <div class="justify-between items-center self-stretch">
    <div class="flex justify-between items-center gap-2">
      <div class="flex gap-2 rounded-[32px]">
        <img :src="profile" alt="" />
        <p class="font-sans font-normal text-base leading-5">{{ nama }}</p>
      </div>

      <div>
        <p class="font-sans font-medium text-lg">{{ nilai }}</p>
      </div>
    </div>
  </div>
</template>
