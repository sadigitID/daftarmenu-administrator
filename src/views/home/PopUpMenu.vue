<script setup lang="ts">
import { ref, computed } from 'vue'
import { CloseIcon } from '@/components/icons'
import { UpDownIcon } from '@/components/icons'

// State untuk mengontrol visibilitas pop-up
const showPopup = ref(false)

// Data restaurant
const restaurantData = ref({})

// Fungsi untuk menampilkan data restaurant
const handleShowPopup = () => {
  showPopup.value = true
}
const handleClosePopup = () => {
  showPopup.value = false
}
</script>

<template>
  <div>
    <button @click="handleShowPopup" class="p-2 bg-blue-500 text-white rounded">Show PopUp</button>
    <div
      v-if="showPopup"
      class="fixed inset-0 bg-gray-500 bg-opacity-80 flex items-center justify-center overflow-y-auto"
    >
      <div class="bg-white max-w-md max-h-[784px] shadow-lg relative w-full mt-[168px]">
        <div class="flex justify-between items-center w-full h-14 py-4 px-6 mb-4 shadow-md">
          <h3 class="text-lg font-semibold">Detail Menu</h3>
          <button @click="handleClosePopup">
            <CloseIcon class="text-gray-600" />
          </button>
        </div>
        <div
          class="flex items-center space-x-2 mb-4 px-6 pt-2 pb-6 border-b border-dotted border-black"
        >
          <img
            :src="restaurantData.imageSrc"
            alt="Restaurant Image"
            class="w-[74px] h-[74px] rounded-lg object-cover"
          />
          <div class="space-y-2">
            <div class="items-center">
              <div class="flex items-center space-x-1.5">
                <!-- Tambahkan kelas space-x-2 untuk jarak horizontal -->
                <span
                  :class="[statusClass, 'p-1 rounded-full text-primary-900 text-xs font-medium']"
                  >{{ statusText }}</span
                >
                <p :class="[isActiveClass, 'text-xs font-medium']">{{ isActiveText }}</p>
              </div>

              <div class="space-y-1">
                <h2 class="text-2xl font-bold">{{ restaurantData.title }}</h2>
                <p class="text-xs text-gray-600 font-medium">{{ restaurantData.joinedDate }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="px-8">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="w-48 h-16 py-2 px-4 bg-gray-50 rounded-lg space-y-2">
              <label class="block text-sm font-medium text-gray-700">Jumlah Menu</label>
              <p class="text-sm text-dark font-medium">{{ restaurantData.jumlahMenu }}</p>
            </div>
            <div class="w-48 h-16 py-2 px-4 bg-gray-50 rounded-lg space-y-2">
              <label class="block text-sm font-medium text-gray-700">Transaksi Hari Ini</label>
              <p class="text-sm text-dark font-medium">{{ restaurantData.transaksiHariIni }}</p>
            </div>
          </div>
          <div class="mb-4 space-y-1">
            <label class="block text-sm font-medium text-gray-700">Alamat</label>
            <p class="text-sm text-dark font-medium">{{ restaurantData.alamat }}</p>
          </div>
          <div class="mb-4 flex items-end justify-between">
            <div class="space-y-1">
              <label class="block text-sm font-medium text-gray-700">No Whatsapp</label>
              <p class="text-sm font-medium text-dark">{{ restaurantData.noWhatsapp }}</p>
            </div>
            <a
              :href="`https://wa.me/${restaurantData.noWhatsapp}`"
              target="_blank"
              class="text-primary-500 text-sm"
              >Hubungi</a
            >
          </div>
          <div class="mb-4 space-y-1.5 border-b border-dotted border-black pb-4">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <p class="text-sm font-medium text-dark">{{ restaurantData.email }}</p>
          </div>
          <div class="mb-4 space-y-1">
            <label class="block text-sm font-medium text-gray-700">Paket Saat Ini</label>
            <p
              class="text-xs py-1 px-2 bg-green-200 w-max rounded-lg font-bold"
              :class="currentPackageClass"
            >
              {{ currentPackageText }}
            </p>
          </div>
          <div class="mb-4 space-y-1">
            <label class="block text-sm font-medium text-gray-700">Perpanjang Paket</label>
            <select class="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 py-2 px-4">
              <option value="">Pilih Paket</option>
            </select>
          </div>

          <div class="mb-4 space-y-1">
            <label class="block text-sm font-medium text-gray-700">Metode Bayar</label>
            <select class="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 py-2 px-4">
              <option value="">Pilih Metode Bayar</option>
            </select>
          </div>

          <button
            class="flex justify-center items-center w-full text-sm font-bold bg-primary-500 text-white py-2 rounded-lg mb-6"
          >
            Upgrade <UpDownIcon class="ml-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
