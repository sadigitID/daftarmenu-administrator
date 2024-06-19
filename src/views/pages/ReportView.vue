<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import TableComponents from '@/components/TableComponents.vue'
const data = [
  [1, 'Resto 1', '3 Bulan', '5 Mei 2024', 'Bank Transfer', '75.000'],
  [2, 'Resto 2', '2 Bulan', '15 Mei 2024', 'Gopay', '75.000'],
  [3, 'Resto 3', '6 Bulan', '25 Mei 2024', 'Bank Transfer', '75.000'],
  [4, 'Resto 4', '1 Bulan', '16 Juni 2024', 'Paypal', '75.000'],
  [5, 'Resto 5', '4 Bulan', '25 Juni 2024', 'Gopay', '75.000']
]
</script>

<template>
  <div class="container py-[3%] px-[3%]">
    <div class="p-6 bg-white rounded-[24px]">
      <div class="flex flex-col items-start gap-[46px]">
        <div class="flex flex-col items-start gap-6 overflow-auto log-transaction">
          <h1 class="text-xl font-medium leading-6">Log Transaksi</h1>
          <div class="flex justify-between w-full table-heading">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-50 px-3 py-2 text-sm font-normal text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  Eksport
                  <ChevronDownIcon class="w-5 h-5 -mr-1 text-gray-400" aria-hidden="true" />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        ]"
                        >Eksport Excel</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        ]"
                        >Eksport PDF</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        ]"
                        >Eksport CSV</a
                      >
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
            <div class="flex items-center gap-4 search-bar">
              <span class="text-sm text-gray-800"> Search </span>
              <input
                type="text"
                class="w-[200px] px-[16px] py-2 bg-gray-50 rounded-lg text-sm"
                placeholder="Cari"
              />
            </div>
          </div>
          <div class="w-full overflow-auto table-body">
            <TableComponents />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
