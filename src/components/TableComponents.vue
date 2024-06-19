<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDown } from '@/components/icons'

const dummyData = [
  {
    count: 1,
    restoTitle: 'Resto 1',
    restoPaket: '1 Bulan',
    tgl: '5 Mei 2024',
    payMethod: 'Bank Transfer',
    jumlah: '75.000'
  },
  {
    count: 2,
    restoTitle: 'Resto 1',
    restoPaket: '1 Bulan',
    tgl: '5 Mei 2024',
    payMethod: 'Bank Transfer',
    jumlah: '75.000'
  },
  {
    count: 3,
    restoTitle: 'Resto 1',
    restoPaket: '1 Bulan',
    tgl: '5 Mei 2024',
    payMethod: 'Bank Transfer',
    jumlah: '75.000'
  }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <h1 class="text-[20px] font-medium leading-4">Log Transaksi</h1>
    <div class="flex items-center justify-between w-full">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center gap-x-1.5 rounded-md items-center bg-gray-50 py-2 px-3 text-sm hover:bg-gray-50"
          >
            Options
            <ChevronDown class="w-5 h-5 -mr-1 text-gray-400" aria-hidden="true" />
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
            class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  ]"
                  >Excel</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  ]"
                  >Pdf</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  ]"
                  >Docs</a
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
          class="w-[200px] py-2 px-3 bg-gray-50 rounded-lg text-sm"
          placeholder="Cari"
        />
      </div>
    </div>
    <table class="w-full table-auto">
      <thead class="bg-gray-50">
        <tr class="text-gray-900">
          <th class="p-3 text-sm font-semibold tracking-wide text-cente">No</th>
          <th class="p-3 text-sm font-semibold tracking-wide text-left w-[300px]">Nama Resto</th>
          <th class="p-3 text-sm font-semibold tracking-wide text-center w-[74px]">Paket</th>
          <th class="p-3 text-sm font-semibold tracking-wide text-center w-[94px]">Tanggal</th>
          <th class="p-3 text-sm font-semibold tracking-wide text-center w-[166px]">
            Metode Bayar
          </th>
          <th class="p-3 text-sm font-semibold tracking-wide text-right w-[135px]">Jumlah</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in dummyData"
          :key="item.count"
          :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
        >
          <td class="p-3 text-sm font-normal text-center text-gray-900 whitespace-nowrap">
            {{ item.count }}
          </td>
          <td class="p-3 text-sm font-normal text-left text-gray-900 whitespace-nowrap">
            {{ item.restoTitle }}
          </td>
          <td class="p-3 text-sm font-normal text-center text-gray-900 whitespace-nowrap">
            {{ item.restoPaket }}
          </td>
          <td class="p-3 text-sm font-normal text-center text-gray-900 whitespace-nowrap">
            {{ item.tgl }}
          </td>
          <td class="p-3 text-sm font-normal text-center text-gray-900 whitespace-nowrap">
            {{ item.payMethod }}
          </td>
          <td class="p-3 text-sm font-normal text-right text-gray-900 whitespace-nowrap">
            {{ item.jumlah }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!--  -->
