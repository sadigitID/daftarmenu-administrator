<script setup>
import { WrapperChartDoughnut } from '@/components/wrapper'
import { WrapperChartBar } from '@/components/wrapper'
import { Resto } from '@/components'
import { RestoProfile } from '@/assets/image';

const restoList = [
  {
    image: RestoProfile,
    name: 'Resto Sadigit',
    memberStatus: 'premium',
    activeStatus: true,
    lastTransaction: '8 transaksi pada hari ini'
  },
  {
    image: RestoProfile,
    name: 'Resto Sadigit',
    memberStatus: 'free',
    activeStatus: false,
    lastTransaction: 'Exp:22-08-2024'
  },
  {
    image: RestoProfile,
    name: 'Resto Sadigit',
    memberStatus: 'trial',
    lastTransaction: 'Tidak aktif lebih dari 30 hari'
  }
]
</script>

<template>
  <!-- <div class="w-80">
    <WrapperChartDoughnut :data="[5, 10, 5]" :labels="['1 Bulan', '3 Bulan', '12 Bulan']" />
  </div>

  <div class="w-[24rem]">
    <WrapperChartBar :data="[60, 55, 65, 50, 45, 55, 70]" :labels="['Nov 23', 'Dec 23', 'Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24']" />
  </div> -->
  <section name="resto" id="resto" class="grid grid-cols-4 grid-row-5 gap-x-2 gap-y-3 ">
    <Resto 
      v-for="resto in restoList"
      :image="resto.image"
      :name="resto.name"
      :memberStatus="resto.memberStatus"
      :activeStatus="resto.activeStatus"
      :lastTransaction="resto.lastTransaction"
    />
  </section>
</template>