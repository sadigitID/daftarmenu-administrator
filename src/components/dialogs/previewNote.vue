<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { computed, ref } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { Switch } from '@headlessui/vue'
import type { NoteModel } from '@/utils/types'
import { Check, Block} from "@/components/icons";

const enabled = ref(false)

const props = defineProps({
  open: Boolean,
  data: Object as () => NoteModel | null
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
                        Detail Catatan
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
                      <div
                        class="my-6 space-y-3 overflow-y-auto sm:px-4 md:px-6 flex flex-col gap-4"
                      >
                        <!-- Konten Dialog -->
                        <div>
                          <span class="label text-sm text-gray-700">Judul</span>
                          <h1 class="w-full py-2 font-medium">Fitur Pencarian</h1>
                        </div>
                        <div class="flex items-center w-full">
                          <div class="w-[50%]">
                            <span class="label text-sm text-gray-700">Jenis</span>
                            <h1 class="py-2 font-medium">Request Feature</h1>
                          </div>
                          <div class="flex flex-col gap-2 w-[50%]">
    <span class="label text-sm text-gray-700">Status</span>
    <div class="relative flex items-center gap-2">
      <!-- Toggle Switch -->
      <Switch
        v-model="enabled"
        :class="enabled ? 'bg-vtd-primary-600' : 'bg-gray-200'"
        class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300"
      >
        <span class="sr-only">Toggle</span>
        <span
          :class="enabled ? 'translate-x-6' : 'translate-x-1'"
          class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300"
        />
      </Switch>
      <!-- Text based on enabled state -->
      <span>{{ enabled ? 'Selesai' : 'Belum Selesai' }}</span>

      <!-- Icon based on enabled state -->
      <div class="absolute -top-12 transition-transform duration-300" :class="enabled ? 'left-2' : 'left-1'">
        <check v-if="enabled" class="h-6 w-6 text-green-500"/>
        <block v-else class="h-6 w-6" />
      </div>
    </div>
  </div>
                        </div>
                        <div class="flex flex-col gap-2">
                          <span class="label text-sm text-gray-700">Deskripsi</span>
                          <p class="font-medium">
                            Ada user yang membutuhkan fitur pencarian dengan filter yang lebih
                            beragam
                          </p>
                        </div>
                        <div class="flex flex-col gap-4">
                          <span class="label text-sm text-gray-"> Gambar Pendukung </span>
                          <div class="preview-img flex items-start flex-wrap gap-1">
                            <div class="img w-[128px] h-[128px] bg-gray-50 rounded-md"></div>
                            <div class="img w-[128px] h-[128px] bg-gray-50 rounded-md"></div>
                          </div>
                        </div>
                        <div class="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                          <div class="flex action-btn gap-2">
                            <div
                              class="cursor-pointer w-[50%] text-center py-2 rounded-md bg-vtd-primary-500 text-white font-medium hover:bg-vtd-primary-600 transition-all duration-300"
                            >
                              Edit Catatan
                            </div>
                            <div
                              class="cursor-pointer w-[50%] text-center py-2 rounded-md bg-gray-50 text-gray-900 font-semibold hover:bg-gray-100 duration-300"
                            >
                              Hapus Catatan
                            </div>
                          </div>
                        </div>
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
