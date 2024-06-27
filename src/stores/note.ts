import { fetchNoteData } from '@/api'
import type { NoteModel } from '@/utils/types'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useNoteStore = defineStore('note', () => {
  const note_data = ref<NoteModel[]>([])
  const note = ref<NoteModel | null>(null)
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
    fetchNotesData,
    getNoteData,
    note,
    setNoteData,
    clearNoteData
  }
})
