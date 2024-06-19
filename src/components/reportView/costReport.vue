<script setup></script>

<template>
  <div
    class="cost-report p-6 border-2 border-solid border-gray-50 rounded-lg flex flex-col gap-6 shadow-sdw"
  >
    <div class="cost-report_header flex items-center">
      <div class="_header-info flex flex-col gap-6">
        <div class="cost-report_title">
          <h1 class="font-medium text-[20px] leading-[120%]">Laporan Pendapatan</h1>
          <span class="text-gray-800 text-sm font-normal leading-[160%]"
            >Pendapatan Bulan Ini <b class="text-vtd-primary-500">Mei 2024</b></span
          >
        </div>
        <div class="cost-report_amount flex flex-col justify-center items-start">
          <h1 class="text-2xl font-bold text-vtd-primary-800">Rp.2000.000</h1>
          <span class="text-gray-800 text-xs font-normal leading-[120%]"
            >*Diupdate 5 Menit yang lalu</span
          >
        </div>
      </div>
      <!-- <div class="_header-chart">chart</div> -->
    </div>
    <div class="cost-report_statistic flex items-start align-[stretch] gap-[17px]">
      <div
        class="card-statistic p-4 flex flex-col gap-2 items-start justify-center bg-gray-50 rounded-lg w-[242px]"
      >
        <span class="month text-sm font-normal text-vtd-primary-800">April 2024</span>
        <h1 class="amount text-xl font-bold leading-6 text-vtd-primary-800">Rp. 2.500.000, 00</h1>
      </div>
      <div
        class="card-statistic p-4 flex flex-col gap-2 items-start justify-center bg-gray-50 rounded-lg w-[242px]"
      >
        <span class="month text-sm font-normal text-vtd-primary-800">Est. Tahun 2024</span>
        <h1 class="amount text-xl font-bold leading-6 text-vtd-primary-800">Rp. 23.000.000</h1>
      </div>
      <div
        class="card-statistic p-4 flex flex-col gap-2 items-start justify-center bg-vtd-primary-800 text-white rounded-lg w-[242px]"
      >
        <span class="month text-sm font-normal">Tahun 2023</span>
        <h1 class="amount text-xl font-bold leading-6">Rp. 33.000.000</h1>
      </div>
    </div>
  </div>
</template>
