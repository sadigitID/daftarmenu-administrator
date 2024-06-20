<script setup lang="ts">
import { Double, Red, Green } from '@/components/icons'
import { useHomeStore } from '@/stores/home'
import { formatPercentage } from '@/utils/number'
const stores = useHomeStore()
</script>
<template>
  <div class="flex flex-col items-start justify-center p-6 bg-primary-800 rounded-2xl">
    <div class="flex flex-col items-center self-stretch justify-center gap-1">
      <div class="flex flex-col items-center justify-center gap-2 py-6 px-2 w-full">
        <h1 class="text-white text-sm leading-[22.4px]font-normal font-sans line-height">
          Nilai User Retention Rate
        </h1>
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="flex items-start gap-2">
            <p class="font-sans text-3xl font-bold leading-9 text-white">
              {{ formatPercentage(stores.getUserData().retention_rate) }}
            </p>
            <div class="flex bg-white rounded-full px-2 py-1 gap-[10px]">
              <p class="font-sans text-xs font-medium text-primary-800">
                {{ stores.getRetentionRateStatus() }}
              </p>
            </div>
          </div>
          <p class="font-sans text-xs font-normal text-center leading-3 text-white">
            Persentase diambil dari user aktif/jumlah user x 100%
          </p>
        </div>

        <div class="flex py-4 px-6 mt-4 bg-white gap-2 w-full 2xl:w-[346px] h-[87px] rounded-2xl">
          <Double class="size-12 fill-primary-800" />
          <div class="flex flex-col items-start justify-center gap-1">
            <p class="font-sans text-sm leading-[22.4px] font-normal text-primary-800">
              Total Pengguna
            </p>
            <h1 class="font-sans text-2xl leading-[28.8px] font-bold text-primary-800">
              {{ stores.getUserData().total_users }}
            </h1>
          </div>
        </div>

        <div class="flex h-[115px] items-center gap-2 self-stretch">
          <div
            class="flex flex-col items-start self-stretch justify-center flex-1 gap-1 p-4 rounded-lg basis-0 bg-primary-50"
          >
            <Green class="size-6 fill-primary-800" />
            <p class="font-sans font-normal leading-[22.4px] text-sm text-primary-800">Aktif</p>
            <h1 class="font-sasns font-bold leading-[28.8px] text-2xl text-primary-800">
              {{ stores.getUserData().active_user }}
            </h1>
          </div>

          <div
            class="flex flex-col items-start self-stretch justify-center flex-1 gap-1 p-4 rounded-lg basis-0 bg-orange-50"
          >
            <Red class="size-6 fill-orange-800" />
            <p class="font-sans font-normal leading-[22.4px] text-sm text-orange-800">
              Tidak Aktif
            </p>
            <h1 class="font-sasns font-bold leading-[28.8px] text-2xl text-orange-800">
              {{ stores.getUserData().inactive_user }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
