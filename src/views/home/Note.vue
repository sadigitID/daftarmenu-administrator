<script setup lang="ts">
import { ref } from 'vue'
import { Search, Add, Red } from '@/components/icons'
import { Info, ButtonFilter, InputText } from '@/components'
import { CardNote } from '@/components/card'
import { Menu, Phone } from '@/assets/image'
import { NewNote, PreviewNote } from '@/components/dialogs'
import type { NoteModel } from '@/utils/types'
import { useNoteStore } from '@/stores/note'

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

const noteData = ref<NoteModel[]>([
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
    note1: 'Request Feature',
    note2: 'Belum Selesai',
    desc: 'Ada user yang membutuhkan fitur pencarian dengan filter yang lebih beragam',
    img: Phone,
    type: 'status'
  }
])

const showNewNotePopup = ref(false)

const openNewNote = () => {
  showNewNotePopup.value = true
}

const closeNewNote = () => {
  showNewNotePopup.value = false
}

const note = useNoteStore()
</script>

<template>
  <PreviewNote :open="note.note != null" @on-close="note.note = null" :data="note.note" />
  <NewNote :open="showNewNotePopup" @on-close="closeNewNote" />

  <section class="custom-spacing">
    <div class="flex w-full h-full flex-col items-start gap-6 flex-shrink-0 rounded-3xl bg-white">
      <div class="flex justify-between items-start self-stretch">
        <div class="flex flex-col items-start gap-2">
          <h2 class="font-sans font-medium text-xl leading-6 text-primary-900">Daftar Catatan</h2>
          <p class="font-sans font-normal text-xs leading-[14.4px] text-gray-800">2 fitur</p>
        </div>
        <div class="flex items-center gap-4 self-stretch">
          <div class="flex w-[200px] px-2 items-center gap-2 bg-gray-50 rounded-lg">
            <Search class="flex-shrink size-6"></Search>
            <InputText
              class="font-sans font-normal text-sm leading-[22.4px]"
              placeholder="Cari Menu"
            />
          </div>
          <div class="flex items-center gap-2 bg-gray-50 rounded-lg">
            <ButtonFilter />
          </div>
          <button
            @click="openNewNote"
            class="flex p-2 items-center gap-2 bg-primary-500 rounded-lg"
          >
            <Add class="flex-shrink size-6"></Add>
            <p class="font-sans text-sm font-bold leading-[22.4px] text-white">Tambah Catatan</p>
          </button>
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
      <div name="note" id="note" class="flex items-start gap-6">
        <CardNote v-for="data in noteData" :data="data" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tambahkan gaya tambahan jika perlu */
</style>
