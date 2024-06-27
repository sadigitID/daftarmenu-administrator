import { fetchNoteData } from '@/api'
import type { NoteModel } from '@/utils/types'
import Note from '@/views/home/Note.vue'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useNoteStore = defineStore('note', () => {

  const note = ref<NoteModel | null>(null)
  const note_data = ref<NoteModel[]>([])
  const fetchNotesData = async () => {
    fetchNoteData()
      .then((response) => {
        const result = response.data
        if (result.status) {
          note_data.value = result.data
        } else {
          console.log(result.message)
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        console.log('fetch note done')
      })
  }

  onMounted(() => {
    fetchNotesData()
  })
  return {
   note,
   fetchNotesData,
   note_data
  }
})
