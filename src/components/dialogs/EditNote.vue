<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot, Switch } from '@headlessui/vue'
import { computed, ref } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { Block, uploadImgIcon, Check } from '@/components/icons'
import Editor from '@tinymce/tinymce-vue'

const props = defineProps({
  open: Boolean
})
const emits = defineEmits(['onClose', 'onSelected'])
const open = ref(computed(() => props.open))

const close = () => {
  emits('onClose', false)
}
const enabled = ref(true)

interface UploadedImage {
  name: string
  url: string
}

const uploadedImages = ref<UploadedImage[]>([])
const dragOver = ref(false)
const errorMessage = ref<string | null>(null)

// Validation File Upload
const isValidFile = (file: File): boolean => {
  const validTypes = ['image/png', 'image/jpeg', 'image/jpg']
  const maxSize = 2 * 1024 * 1024 // Batas File 2MB

  if (!validTypes.includes(file.type)) {
    errorMessage.value =
      'Kesalahan saat mengupload file gambar, pastikan file adalah PNG, JPG, atau JPEG'
    return false
  }
  if (file.size > maxSize) {
    errorMessage.value = 'Ukuran File terlalu besar, ukuran < 2MB'
    return false
  }
  errorMessage.value = null
  return true
}

const handleFiles = (files: FileList) => {
  // if (uploadedImages.value.length + files.length > 5) {
  //   errorMessage.value = 'Maximal File Upload sebanyak 5 ITem / 5 Gambar'
  //   return
  // }
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    if (isValidFile(file)) {
      const imageUrl = URL.createObjectURL(file)
      uploadedImages.value.push({ name: file.name, url: imageUrl })
    }
  }
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  const files = event.dataTransfer?.files

  if (files) {
    handleFiles(files)
  }
  dragOver.value = false
}

const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
  dragOver.value = true
}

const handleDragLeave = () => {
  dragOver.value = false
}

const handleFileInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const files = input.files

  if (files) {
    handleFiles(files)
  }
}

const removeImage = (index: number) => {
  URL.revokeObjectURL(uploadedImages.value[index].url)
  uploadedImages.value.splice(index, 1)
}

const fileInput = ref<HTMLInputElement | null>(null)
const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click()
  }
}
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-20" @close="close">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="fixed inset-y-0 right-0 flex max-w-full pointer-events-none">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="relative w-screen max-w-md pointer-events-auto">
                <div class="flex flex-col h-full overflow-y-hidden bg-white shadow-xl">
                  <div class="px-4 py-4 shadow-lg sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 id="slide-over-heading" class="font-bold text-dark text-md">Edit</h2>
                      <div class="flex items-center ml-3 h-7">
                        <button
                          type="button"
                          class="bg-white rounded-md text-dark focus:outline-0 hover:text-gray-500 focus:ring-0"
                          @click="close"
                        >
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="w-6 h-6 text-dark" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="overflow-y-auto">
                    <div class="px-4 pt-2 pb-5 sm:px-0 sm:pt-0">
                      <div class="my-6 space-y-3 overflow-y-auto sm:px-4 md:px-6">
                        <form action="#" class="flex flex-col mt-2 gap-4">
                          <div class="flex flex-col gap-1">
                            <label class="text-gray-700 text-sm font-normal mb-2" for="judul">
                              Judul Note
                            </label>
                            <input
                              class="appearance-none rounded w-full py-4 px-4 text-gray-800 leading-tight outline-none bg-gray-50 text-sm"
                              id="judul"
                              type="text"
                              placeholder="Masukan Judul Catatan"
                              value="Catatan 1"
                            />
                          </div>
                          <div class="flex items-start gap-4">
                            <div class="flex flex-col gap">
                              <label for="jenis" class="text-gray-700 text-sm font-normal mb-2"
                                >Jenis</label
                              >
                              <div class="flex items-center gap-4 py-1">
                                <div class="flex items-center gap-2">
                                  <input
                                    type="radio"
                                    class="w-4 h-4"
                                    name="bug"
                                    id="requestFeatures"
                                  />
                                  <label class="text-sm" for="requestFeatures"
                                    >Request Feature</label
                                  >
                                </div>
                                <div class="flex items-center gap-2">
                                  <input type="radio" class="w-4 h-4" name="bug" id="bug" />
                                  <label class="text-sm" for="bug">Bug</label>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-col">
                              <label for="Status" class="text-gray-700 text-sm font-normal mb-2"
                                >Status</label
                              >
                              <div class="flex items-center gap-2">
                                <Switch
                                  v-model="enabled"
                                  :class="enabled ? 'bg-vtd-primary-600' : 'bg-gray-200'"
                                  class="relative inline-flex h-7 w-12 items-center rounded-full transition"
                                >
                                  <span class="sr-only">Enable notifications</span>

                                  <div
                                    :class="enabled ? 'translate-x-6' : 'translate-x-1'"
                                    class="flex justify-center items-center w-5 h-5 bg-white rounded-full transform transition"
                                  >
                                    <span v-if="enabled">
                                      <Check />
                                    </span>
                                    <span v-else>
                                      <Block />
                                    </span>
                                  </div>
                                </Switch>

                                <span class="text-sm font-bold">{{
                                  enabled ? 'Selesai' : 'Belum Selesai'
                                }}</span>
                              </div>
                            </div>
                          </div>

                          <div class="flex flex-col gap-1">
                            <label for="Deskripsi" class="text-gray-700 text-sm font-normal mb-2"
                              >Deskripsi</label
                            >
                            <Editor api-key="dmoh15uxnrfvrcgujpfgw83dqqqe6cuxnozmfwr9ezx2fokg" />
                          </div>

                          <div class="flex flex-col gap-1">
                            <label for="Deskripsi" class="text-gray-700 text-sm font-normal mb-2">
                              Gambar Pendukung
                            </label>
                            <div
                              class="upload-area flex items-center justify-center flex-col border-2 py-12 cursor-pointer rounded-md border-dashed border-gray-100"
                              :class="{ 'bg-gray-50 transition duration-300': dragOver }"
                              @drop="handleDrop"
                              @dragover="handleDragOver"
                              @dragleave="handleDragLeave"
                              @click="triggerFileInput"
                            >
                              <uploadImgIcon />
                              <span class="text-gray-800 text-center">
                                <b class="text-vtd-primary-500">Upload a file</b> or drag and drop
                                <br />PNG, JPG, JPEG, up to 2MB
                              </span>
                            </div>

                            <input
                              type="file"
                              accept="image/png, image/jpeg, image/jpg"
                              class="hidden"
                              ref="fileInput"
                              @change="handleFileInput"
                              multiple
                            />

                            <div v-if="errorMessage" class="text-red-500 mt-2 text-sm">
                              {{ errorMessage }}
                            </div>

                            <div
                              class="image-preview-upload mt-4 flex gap-3 justify-start flex-wrap"
                            >
                              <div
                                v-for="(image, index) in uploadedImages"
                                :key="index"
                                class="image-item w-16 h-16 bg-gray-50 rounded-lg cursor-pointer relative"
                              >
                                <div
                                  class="absolute close-btn w-5 h-5 bg-white flex justify-center items-center rounded-full -right-2 -top-2 shadow-custom-gray hover:bg-slate-100 duration-150 transition"
                                  @click="removeImage(index)"
                                >
                                  <Block />
                                </div>
                                <img
                                  :src="image.url"
                                  :alt="image.name"
                                  class="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                            </div>
                          </div>

                          <button
                            class="bg-vtd-primary-500 py-3 rounded-md text-white hover:bg-vtd-primary-600"
                          >
                            Simpan
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
