<script setup lang="ts">
defineProps({
  title: String,
  note1: String,
  note2: String,
  desc: String,
  img: String,
  type: {
    type: String,
    default: 'jenis'
  }
})
</script>
<template>
  <div class="flex flex-col items-start gap-2 p-4 flex-1 rounded-2xl bg-white shadow-custom-gray"
  >
    <div class="flex flex-col items-start gap-1 self-stretch">
      <p
        class="self-strech webkit-box webkit-box-orient-vertical webkit-line-clamp-1 overflow-hidden text-gray-800 truncate font-sans font-bold text-xl leading-6"
      >
        {{ title }}
      </p>
      <div 
      v-if="type === 'jenis'"
      class="flex items-start gap-1">
        <div class="flex p-1 items-center gap-[10px] rounded-full bg-orange-50">
          <p class="font-sans text-orange-800 text-xs font-medium leading-[14.4px]">{{ note1 }}</p>
        </div>
        <div class="flex p-1 items-center gap-[10px]">
          <p class="font-sans text-xs font-medium leading-[14.4px] text-primary-500">{{ note2 }}</p>
        </div>
      </div>
      <div  
      v-else-if="type === 'status'"
      class="flex items-start gap-1">
        <div class="flex p-1 items-center gap-[10px] rounded-full bg-primary-50">
          <p class="font-sans text-primary-800 text-xs font-medium leading-[14.4px]">{{ note1 }}</p>
        </div>
        <div class="flex p-1 items-center gap-[10px]">
          <p class="font-sans text-xs font-medium leading-[14.4px] text-red-500">{{ note2 }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start gap-[11px] self-stretch">
      <p
        class="text-gray-800 overflow-ellipsis overflow-hidden font-sans text-sm font-normal leading-[22.4px] h-11 self-stretch"
      >
        {{ desc }}
      </p>
      <div v-if="img">
        <img
          :src="img"
          alt=""
          class="self-strech object-cover object-center w-[256px] h-[96px] rounded-2xl"
        />
      </div>
      <div v-else></div>
    </div>
  </div>
</template>
