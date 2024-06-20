<script setup lang="ts">
import { Arrow, Search, Add, Red } from '@/components/icons'
import { Info, Note } from '@/components'
import { Menu, Phone } from '@/assets/image'

const infoData = [
  {
    icon: Red,
    title: 'Jenis',
    desc: 'Request Feature',
    value: '800',
    desc2: 'Bug',
    value2: '800',
    type: 'green'
  },
  {
    icon: Red,
    title: 'Status',
    desc: 'Selesai',
    value: '800',
    desc2: 'Belum Selesai',
    value2: '800',
    type: 'gray'
  }
]
const noteData = [
  {
    title: 'Fitur Pencarian',
    note1: 'Bug',
    note2: 'Selesai',
    desc: 'Ada user yang membutuhkan fitur pencarian dengan filter yang lebih beragam',
    img: Phone,
    type: 'jenis'
  },
  {
    title: 'Fitur Pencarian',
    note1: 'Bug',
    note2: 'Selesai',
    desc: 'Ada user yang membutuhkan fitur pencarian dengan filter yang lebih beragam',

    type: 'jenis'
  },
  {
    title: 'Fitur Pencarian',
    note1: 'Request Feature',
    note2: 'Belum Selesai',
    desc: 'Ada user yang membutuhkan fitur pencarian dengan filter yang lebih beragam',
    img: Phone,
    type: 'status'
  },
  {
    title: 'Fitur Pencarian',
    note1: 'Request Feauture',
    note2: 'Belum Selesai',
    desc: 'Ada user yang membutuhkan fitur pencarian dengan filter yang lebih beragam',
    img: Phone,
    type: 'status'
  }
]
</script>

<template>
  <div class="flex items-center p-6">
    <section
      class="flex w-[1100px] h-[525px] p-6 flex-col items-start gap-6 flex-shrink-0 rounded-3xl bg-white m-auto"
    >
      <div class="flex justify-between items-start self-stretch">
        <div class="flex flex-col items-start gap-2">
          <h2 class="font-sans font-medium text-xl leading-6 text-primary-900">Daftar Catatan</h2>
          <p class="font-sans font-normal text-xs leading-[14.4px] text-gray-800">2 fitur</p>
        </div>
        <div class="flex items-center gap-4 self-stretch">
          <div class="flex w-[200px] p-3 items-center gap-2 bg-gray-50 rounded-lg">
            <Search class="flex-shrink size-6"></Search>
            <p class="font-sans font-normal text-sm leading-[22.4px]">Cari Menu</p>
          </div>
          <div class="flex p-3 items-center gap-2 bg-gray-50 rounded-lg">
            <p class="font-sans font-bold text-sm leading-[22.4px] text-gray-900">Filter</p>
            <Arrow class="size-6"></Arrow>
          </div>
          <div class="flex p-3 items-center gap-2 bg-primary-500 rounded-lg">
            <Add class="flex-shrink size-6"></Add>
            <p class="font-sans text-sm font-bold leading-[22.4 px] text-white">Tambah Catatan</p>
          </div>
        </div>
      </div>
      <div class="flex h-[115px] items-center gap-5 flex-shrink-0 self-stretch">
        <img
          :src="Menu"
          alt=""
          class="object-cover object-center w-[396px] h-[115px] rounded-2xl"
        />

        <Info
          v-for="(item, index) in infoData"
          :key="index"
          :icon="item.icon"
          :title="item.title"
          :desc="item.desc"
          :value="item.value"
          :desc2="item.desc2"
          :value2="item.value2"
          :type="item.type"
        />
      </div>
      <div class="flex items-start gap-6">
        <Note
          v-for="(item, index) in noteData"
          :key="index"
          :title="item.title"
          :note1="item.note1"
          :note2="item.note2"
          :desc="item.desc"
          :img="item.img"
          :type="item.type"
        />
      </div>
    </section>
  </div>
</template>
