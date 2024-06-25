<script setup lang="ts">
import { onMounted } from 'vue'
import { CardJenisUser, CardMetodeBayar } from '@/components/card'
import { LaporanPendapatan, dataTable } from '@/components'
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Laporan - Admin Daftar Menu'
})
</script>

<template>
  <section
    class="flex items-start justify-center w-full rounded-lg md:p-6 lg:bg-white md:rounded-3xl"
  >
    <section class="custom-spacing">
      <div
        class="flex flex-col gap-6 mb-[100px] md:mb-0 xl:items-start lg:justify-between xl:flex-row w-full"
      >
        <section class="flex flex-col gap-10 xl:w-[70%]">
          <LaporanPendapatan />
          <dataTable />
        </section>
        <div class="inline-flex flex-col items-start gap-6 shrink-0 rounded-3xl">
          <CardJenisUser />
          <CardMetodeBayar />
        </div>
      </div>
    </section>
  </section>
</template>

<!-- 

<div class="inline-flex h-[835px] py-12 px-6 items-start gap-5 shrink-0 rounded-3xl">
      <CardDoughnut
        v-for="data in chartData"
        :key="data.title"
        :title="data.title"
        :desc="data.desc"
        :values="data.values"
        :labels="data.labels"
      />
    </div> -->
