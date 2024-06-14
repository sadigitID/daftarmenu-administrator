<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { computed, ref } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useRestoStore } from '@/stores/resto'
import type { RestaurantModel } from '@/utils/types'
import { UpDownIcon } from '@/components/icons'

const props = defineProps({
  open: Boolean,
  data: Object as () => RestaurantModel
})
const emits = defineEmits(['onClose', 'onSelected'])
const open = ref(computed(() => props.open))
const data = ref(computed(() => props.data))

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
                        Detail Menu
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
                        <div
                          class="flex items-center space-x-2 mb-4 pb-6 border-b border-dotted border-black w-full"
                        >
                          <img
                            :src="data.resto.resto_image"
                            alt="Restaurant Image"
                            class="w-[74px] h-[74px] rounded-lg object-cover"
                          />
                          <div class="space-y-2">
                            <div class="items-center">
                              <div class="flex items-center space-x-1.5">
                                <!-- Tambahkan kelas space-x-2 untuk jarak horizontal -->
                                <div
                                  v-if="data.account.account_subscription_id == 0"
                                  class="flex p-1 items-start gap-2.5 rounded-full bg-primary-50"
                                >
                                  <p class="text-xs text-primary-800">Free</p>
                                </div>
                                <div
                                  v-else-if="data.account.account_subscription_id == 1"
                                  class="flex p-1 items-start gap-2.5 rounded-full bg-primary-50"
                                >
                                  <p class="text-xs text-primary-800">Trial</p>
                                </div>
                                <div
                                  v-else-if="data.account.account_subscription_id > 1"
                                  class="flex p-1 items-start bg-gradient-to-r from-[#E3FFD3] to-[#FFF59C] rounded-full space-x-1"
                                >
                                  <p class="text-xs text-primary-900">Premium</p>
                                </div>
                                <div
                                  v-if="data.account.account_subscription == true"
                                  class="flex p-1 items-center gap-2.5"
                                >
                                  <p class="text-xs text-superorange">Aktif</p>
                                </div>
                                <div
                                  v-else-if="data.account.account_subscription == false"
                                  class="flex p-1 items-center gap-2.5"
                                >
                                  <p class="text-xs text-red-500">Tidak Aktif</p>
                                </div>
                              </div>

                              <div class="space-y-1">
                                <h2 class="text-2xl font-bold">{{ data.resto.resto_name }}</h2>
                                <p class="text-xs text-gray-600 font-medium">
                                  {{ data.resto.resto_id }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="py-2 px-4 bg-gray-50 rounded-lg space-y-2">
                              <label class="block text-sm font-medium text-gray-700"
                                >Jumlah Menu</label
                              >
                              <p class="text-sm text-dark font-medium">
                                {{ data.resto.resto_menu }}
                              </p>
                            </div>
                            <div class="py-2 px-4 bg-gray-50 rounded-lg space-y-2">
                              <label class="block text-sm font-medium text-gray-700"
                                >Transaksi Hari Ini</label
                              >
                              <p class="text-sm text-dark font-medium">
                                {{ data.resto.resto_transaction_today }}
                              </p>
                            </div>
                          </div>
                          <div class="mb-4 space-y-1">
                            <label class="block text-sm font-medium text-gray-700">Alamat</label>
                            <p class="text-sm text-dark font-medium">
                              {{ data.resto.resto_address }}
                            </p>
                          </div>
                          <div class="mb-4 flex items-end justify-between">
                            <div class="space-y-1">
                              <label class="block text-sm font-medium text-gray-700"
                                >No Whatsapp</label
                              >
                              <p class="text-sm font-medium text-dark">
                                {{ data.resto.resto_contact }}
                              </p>
                            </div>
                            <a
                              :href="`https://wa.me/${data.resto.resto_contact}`"
                              target="_blank"
                              class="text-primary-500 text-sm"
                              >Hubungi</a
                            >
                          </div>
                          <div class="mb-4 space-y-1.5 border-b border-dotted border-black pb-4">
                            <label class="block text-sm font-medium text-gray-700">Email</label>
                            <p class="text-sm font-medium text-dark">
                              {{ data.account.account_email }}
                            </p>
                          </div>
                          <div class="mb-4 space-y-1">
                            <label class="block text-sm font-medium text-gray-700"
                              >Paket Saat Ini</label
                            >
                            <p
                              class="text-xs py-1 px-2 bg-gradient-to-r from-[#E3FFD3] to-[#FFF59C] rounded-full space-x-1 w-max rounded-lg font-bold"
                              :class="currentPackageClass"
                            >
                              {{ data.account.account_subscription_name }} |
                              {{ data.account.account_subscription_expired }}
                            </p>
                          </div>
                          <div class="mb-4 space-y-1">
                            <label class="block text-sm font-medium text-gray-700"
                              >Perpanjang Paket</label
                            >
                            <select
                              class="mt-1 font-medium text-sm block w-full rounded-md border-gray-300 bg-gray-50 py-2 px-4 text-[#5C5C5C]"
                            >
                              <option value="">Pilih Paket</option>
                            </select>
                          </div>

                          <div class="mb-4 space-y-1">
                            <label class="block text-sm font-medium text-gray-700"
                              >Metode Bayar</label
                            >
                            <select
                              class="mt-1 font-medium text-sm block w-full rounded-md border-gray-300 bg-gray-50 py-2 px-4 text-[#5C5C5C]"
                            >
                              <option value="">Pilih Metode Bayar</option>
                            </select>
                          </div>

                          <button
                            class="flex justify-center items-center w-full text-sm font-bold bg-primary-500 text-white py-2 rounded-lg"
                          >
                            Upgrade <UpDownIcon class="ml-2 w-[20px] h-[20px]" />
                          </button>
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
