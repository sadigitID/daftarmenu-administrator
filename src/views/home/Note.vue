<script setup lang="ts">
import { ref } from 'vue';
import { Search, Add, Red } from '@/components/icons';
import { Info, ButtonFilter, InputText } from '@/components';
import { CardNote } from '@/components/card';
import { Menu } from '@/assets/image';
import  PreviewNote  from '@/components/dialogs/previewNote.vue';
import  NewNote  from '@/components/dialogs/newNote.vue';
import { useNoteStore } from '@/stores/note';
import { useHomeStore } from '@/stores/home';


const note = useNoteStore();
const stores = useHomeStore();
const infoData = [
  {
    icon: Red,
    title: 'Jenis',
    desc: 'Request Feature',
    value: '800',
    desc2: 'Bug',
    value2: '800',
    type: 'green',
  },
  {
    icon: Red,
    title: 'Status',
    desc: 'Selesai',
    value: '800',
    desc2: 'Belum Selesai',
    value2: '800',
    type: 'gray',
  },
];

const showNewNotePopup = ref(false);

const openNewNote = () => {
  showNewNotePopup.value = true;
};

const closeNewNote = () => {
  showNewNotePopup.value = false;
};

</script>

<template>
  <PreviewNote :open="note.note != null" @on-close="note.note = null" :data="note.note" />
  <NewNote :open="showNewNotePopup" @on-close="closeNewNote" />

  <div class="flex items-center p-6">
    <section class="flex w-[1100px] h-[525px] p-6 flex-col items-start gap-6 flex-shrink-0 rounded-3xl bg-white m-auto">
      <div class="flex justify-between items-start self-stretch">
        <div class="flex flex-col items-start gap-2">
          <h2 class="font-sans font-medium text-xl leading-6 text-primary-900">Daftar Catatan</h2>
          <p class="font-sans font-normal text-xs leading-[14.4px] text-gray-800">2 fitur</p>
        </div>
        <div class="flex items-center gap-4 self-stretch">
          <div class="flex w-[200px] px-2 items-center gap-2 bg-gray-50 rounded-lg">
            <Search class="flex-shrink size-6"></Search>
            <InputText class="font-sans font-normal text-sm leading-[22.4px]" placeholder="Cari Menu" />
          </div>
          <div class="flex items-center gap-2 bg-gray-50 rounded-lg">
            <ButtonFilter />
          </div>
          <button @click="openNewNote" class="flex p-2 items-center gap-2 bg-primary-500 rounded-lg">
            <Add class="flex-shrink size-6"></Add>
            <p class="font-sans text-sm font-bold leading-[22.4px] text-white">Tambah Catatan</p>
          </button>
        </div>
      </div>
      <div class="flex h-[115px] items-center gap-5 flex-shrink-0 self-stretch">
        <img :src="Menu" alt="" class="object-cover object-center w-[396px] h-[115px] rounded-2xl" />
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
        <CardNote 
          v-for="data in stores.getNoteData()" 
          :key="data.note.note_id"
          :data="data" />
      </div>
    </section>
  </div>
</template>
