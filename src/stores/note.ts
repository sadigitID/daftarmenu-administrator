import { fetchNoteData } from '@/api'
import type { NoteModel } from '@/utils/types'
import Note from '@/views/home/Note.vue'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useNoteStore = defineStore('note', () => {
  const note = ref<NoteModel | null>(null)
  const note_data = ref<NoteModel[]>([])
  const getNoteData = () => {
    return note_data.value
  }
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

  const setNoteData = (data: NoteModel) => {
    note.value = data
  }

  const clearNoteData = () => {
    note.value = null
  }

  onMounted(() => {
    fetchNotesData()
  })
  return {
    note,
    fetchNotesData,
    note_data,
    setNoteData,
    clearNoteData,
    getNoteData
  }
})
