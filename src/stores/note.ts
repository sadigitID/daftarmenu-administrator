import type { NoteModel } from '@/utils/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNoteStore = defineStore('account', () => {
  const note = ref<NoteModel | null>(null)

  return {
    note
  }
})
