<script setup lang="ts">
import { Double, Red, Green  } from "@/components/icons";
</script>
<template>
<div class="w-[1440px] h-[1024px] bg-primary-50 pl-36 pt-28 pr-6 pb-20">
  <div class="px-6 py-12 w-[1272px] h-[835px] bg-white gap-4 rounded-3xl">
    <div class="w-[394px] p-6 bg-primary-800 rounded-2xl flex flex-col justify-center items-start">
      <div class="flex flex-col justify-center items-center gap-1 self-stretch">
        
          <div class="py-6 pt-4 pb-6 flex flex-col justify-center items-center gap-2">
            <h1 class="text-white text-sm leading-[22.4px]font-normal font-sans line-height"> 
          Nilai User Retention Rate
        </h1>
          <div class="flex flex-col justify-center items-center gap-2">
          <div class="flex items-start gap-2">
            <p class="font-sans font-bold leading-9 text-3xl text-white">
              70%
            </p>
            <div class="flex bg-white rounded-full px-2 py-1 gap-[10px]">
            <p class="font-sans text-primary-800 text-xs font-medium">
              Baik
            </p>
          </div>
          </div>
            <p class="font-sans text-xs leading-3 text-white font-normal">
              Persentase diambil dari user aktif/jumlah user x 100%
            </p>
          </div>
            <div class="flex py-4 px-6 bg-white gap-2 w-[346px] h-[87px] rounded-2xl">
              <Double class="size-12"></Double>
              <div class="flex flex-col justify-center items-start gap-1">
                <p class="font-sans text-sm leading-[22.4px] font-normal text-primary-800">
                  Total Pengguna</p>
                  <h1 class="font-sans text-2xl leading-[28.8px] font-bold text-primary-800">
                    1024
                  </h1>
              </div>
            </div>
    
            <div class="flex h-[115px] items-center gap-2 self-stretch">

              <div class="flex flex-col flex-1 basis-0 p-4 justify-center items-start gap-1 self-stretch bg-primary-50 rounded-lg">
                <Green class="size-6"></Green>
                <p class="font-sans font-normal leading-[22.4px] text-sm text-primary-800">Aktif</p>
                <h1 class="font-sasns font-bold leading-[28.8px] text-2xl text-primary-800">800</h1>
                
              </div>
              <div class="flex flex-col flex-1 basis-0 p-4 justify-center items-start gap-1 self-stretch bg-orange-50 rounded-lg">
                <Red class="size-6"></Red>
                <p class="font-sans font-normal leading-[22.4px] text-sm text-primary-800">Tidak Aktif</p>
                <h1 class="font-sasns font-bold leading-[28.8px] text-2xl text-primary-800">224</h1>
  
            </div>
            </div>
          </div>
      </div>
    </div> 
  </div>
 
  </div>
 
</template>