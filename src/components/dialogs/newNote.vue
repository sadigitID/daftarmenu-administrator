<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { computed, ref } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import Editor from '@tinymce/tinymce-vue'

const props = defineProps({
  open: Boolean
})
const emits = defineEmits(['onClose', 'onSelected'])
const open = ref(computed(() => props.open))

function close() {
  emits('onClose', false)
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
                      <h2 id="slide-over-heading" class="font-bold text-dark text-md">
                        Tambah Catatan
                      </h2>
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
                        <!-- Konten Dialog -->
                        <form action="#" class="flex flex-col mt-2 gap-4">
                          <div class="flex flex-col gap-1">
                            <label class="text-gray-700 text-sm font-normal mb-2" for="judul">
                              Judul Note
                            </label>
                            <input
                              class="appearance-none rounded w-full py-[12px] px-4 text-gray-800 leading-tight focus:outline-none bg-gray-50 focus:shadow-outline"
                              id="judul"
                              type="text"
                              placeholder="Judul Note"
                            />
                          </div>
                          <div class="flex flex-col gap-1">
                            <label for="jenis" class="text-gray-700 text-sm font-normal mb-2"
                              >Jenis</label
                            >
                            <div class="flex items-center gap-4">
                              <div class="flex items-center gap-2">
                                <input
                                  type="radio"
                                  class="form-radio"
                                  name="bug"
                                  id="requestFeatures"
                                />
                                <label for="requestFeatures">Request Feature</label>
                              </div>
                              <div class="flex items-center gap-2">
                                <input type="radio" class="form-radio" name="bug" id="bug" />
                                <label for="bug">Bug</label>
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
                            <label for="Deskripsi" class="text-gray-700 text-sm font-normal mb-2"
                              >Gambar Pendukung</label
                            >
                            <div
                              class="upload-area flex items-center justify-center flex-col border-2 py-12 cursor-pointer rounded-md border-dashed border-gray-100"
                            >
                              <svg
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M27.995 8H11.995C10.9341 8 9.91671 8.42143 9.16657 9.17157C8.41642 9.92172 7.995 10.9391 7.995 12V32M7.995 32V36C7.995 37.0609 8.41642 38.0783 9.16657 38.8284C9.91671 39.5786 10.9341 40 11.995 40H35.995C37.0559 40 38.0733 39.5786 38.8234 38.8284C39.5736 38.0783 39.995 37.0609 39.995 36V28M7.995 32L17.167 22.828C17.9171 22.0781 18.9343 21.6569 19.995 21.6569C21.0557 21.6569 22.0729 22.0781 22.823 22.828L27.995 28M39.995 20V28M39.995 28L36.823 24.828C36.0729 24.0781 35.0557 23.6569 33.995 23.6569C32.9343 23.6569 31.9171 24.0781 31.167 24.828L27.995 28M27.995 28L31.995 32M35.995 8H43.995M39.995 4V12M27.995 16H28.015"
                                  stroke="#B9B9B9"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <span class="text-gray-800 text-center"
                                ><b class="text-vtd-primary-500">Upload a file</b> or drag and drop
                                <br />PNG, JPG, JPEG, up to 2MB</span
                              >
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
