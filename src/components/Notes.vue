<script setup>
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
  <div 
  v-if="type==='jenis'"
  class="flex p-4 flex-col items-start gap-2 flex-1 bottom-0 rounded-2xl bg-white shadow-[1px_1px_8px_rgba(180,180,180,0.39)]
      w-[288px] h-[241px]">
    <div class="flex flex-col items-start gap-1 self-stretch">
        <p class="self-strech webkit-box webkit-box-orient-vertical webkit-line-clamp-1
        overflow-hidden text-gray-800 truncate font-sans font-bold text-xl leading-6">{{ title }}</p>
        <div class="flex items-start gap-1">
            <div class="flex p-1 items-center gap-[10px] rounded-full bg-orange-50"> 
              <p class="font-sans text-orange-800 text-xs font-medium leading-[14.4px]">{{ note1 }}</p>
            </div>
            <div class="flex p-1 items-center gap-[10px]">
              <p class="font-sans text-xs font-medium leading-[14.4px] text-primary-500">{{ note2 }}</p> 
            </div>
          </div>
    </div>
    <div class="flex flex-col items-start gap-[11px] self-stretch">
        <p class="text-gray-800 whitespace-nowrap overflow-ellipsis webkit-line-clamp-2 overflow-hidden font-sans text-sm font-normal leading-[22.4px] h-11 self-stretch"
          >{{ desc }}</p>
        <img :src=img alt="" class="self-strech object-cover object-center w-[256px] h-[96px] rounded-2xl"/>
    </div>
 </div>

 <div 
  v-else-if="type==='status'"
  class="flex p-4 flex-col items-start gap-2 flex-1 bottom-0 rounded-2xl bg-white shadow-[1px_1px_8px_rgba(180,180,180,0.39)]
      w-[288px] h-[241px]">
    <div class="flex flex-col items-start gap-1 self-stretch">
        <p class="self-strech webkit-box webkit-box-orient-vertical webkit-line-clamp-1
        overflow-hidden text-gray-800 truncate font-sans font-bold text-xl leading-6">{{ title }}</p>
        <div class="flex items-start gap-1">
            <div class="flex p-1 items-center gap-[10px] rounded-full bg-primary-50"> 
              <p class="font-sans text-primary-800 text-xs font-medium leading-[14.4px]">{{ note1 }}</p>
            </div>
            <div class="flex p-1 items-center gap-[10px]">
              <p class="font-sans text-xs font-medium leading-[14.4px] text-red-500">{{ note2 }}</p> 
            </div>
          </div>
    </div>
    <div class="flex flex-col items-start gap-[11px] self-stretch">
        <p class="text-gray-800 whitespace-nowrap overflow-ellipsis webkit-line-clamp-2 overflow-hidden font-sans text-sm font-normal leading-[22.4px] h-11 self-stretch"
          >{{ desc }}</p>
        <img :src=img alt="" class="self-strech object-cover object-center w-[256px] h-[96px] rounded-2xl"/>
    </div>
 </div>
</template>