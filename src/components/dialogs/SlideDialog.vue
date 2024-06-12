<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { computed, ref } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

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
                        Dialog Title
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
                      </div>
                    </div>
                  </div>
                </div>

                <div class="absolute bottom-0 w-full p-4 bg-gray-50 sm:p-6">
                  <div class="flow-root p-3 -m-3 transition duration-150 ease-in-out rounded-md">
                    <span class="flex items-center">
                      <span class="text-sm font-bold text-dark"> Footer </span>
                      <span
                        class="ml-3 inline-flex items-center rounded-full bg-primary-100 px-3 py-0.5 text-xs font-semibold leading-5 text-primary-900"
                      >
                        Title
                      </span>
                    </span>
                    <span class="block mt-1 text-sm text-dark">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
                      consectetur dolorem amet impedit eius exercitationem, ex sapiente temporibus
                      nam sint necessitatibus ratione sunt voluptatum soluta, quaerat voluptatem.
                      Vitae, omnis incidunt.
                    </span>
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
