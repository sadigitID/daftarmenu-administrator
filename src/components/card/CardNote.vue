<script setup lang="ts">
import { defineProps } from 'vue'
import type { NoteModel } from '@/utils/types'
import { useNoteStore } from '@/stores/note'

const note = useNoteStore()

const props = defineProps<{
  data: NoteModel
}>()

const onSelected = (data: NoteModel) => {
  note.note = data
}
</script>

<template>
  <button
    @click="onSelected(props.data)"
    class="flex flex-col items-start gap-2 p-4 flex-1 rounded-2xl bg-white w-full md:w-[325px] shadow-custom-gray"
  >
    <div class="flex flex-col items-start gap-1 self-stretch">
      <p
        class="webkit-box webkit-box-orient-vertical webkit-line-clamp-1 overflow-hidden text-gray-800 truncate font-sans font-bold text-xl leading-6 py-2 md:py-0"
      >
        {{ props.data.note.title }}
      </p>
      <div v-if="props.data.type === 'jenis'" class="flex items-start gap-1">
        <div class="flex p-1 items-center gap-[10px] rounded-full bg-orange-50">
          <p class="font-sans text-orange-800 text-xs font-medium leading-[14.4px]">
            {{ props.data.note1 }}
          </p>
        </div>
        <div class="flex p-1 items-center gap-[10px]">
          <p class="font-sans text-xs font-medium leading-[14.4px] text-primary-500">
            {{ props.data.note2 }}
          </p>
        </div>
      </div>
      <div v-else-if="props.data.type === 'status'" class="flex items-start gap-1">
        <div class="flex p-1 items-center gap-[10px] rounded-full bg-primary-50">
          <p class="font-sans text-primary-800 text-xs font-medium leading-[14.4px]">
            {{ props.data.note1 }}
          </p>
        </div>
        <div class="flex p-1 items-center gap-[10px]">
          <p class="font-sans text-xs font-medium leading-[14.4px] text-red-500">
            {{ props.data.note2 }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start gap-[11px] w-full">
      <p
        class="text-left text-gray-800 overflow-ellipsis overflow-hidden font-sans text-sm font-normal leading-[22.4px] h-11"
      >
        {{ props.data.note.desc }}
      </p>
      <div v-if="props.data.img" class="w-full">
        <img
          :src="props.data.note.img"
          alt=""
          class="self-stretch object-cover object-center w-[100%] h-[124px] lg:w-[256px] lg:h-[96px] rounded-2xl"
        />
      </div>
      <div v-else></div>
    </div>
  </button>
</template>
