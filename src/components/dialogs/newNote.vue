<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { computed, ref } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import Editor from '@tinymce/tinymce-vue'
import { UploadArea } from '@/components'

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
                            <UploadArea />
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
