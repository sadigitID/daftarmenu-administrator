<script setup lang="ts">
import { reactive } from 'vue'
import { Dropdown } from './icons'

// Reactive state untuk dropdowns
const dropdowns = reactive({
  filters: false,
  options: false
})

// Options untuk checkboxes dan radio buttons
const filterOptions = [
  { text: 'Free', value: 'free' },
  { text: 'Trial', value: 'trial' },
  { text: 'Premium', value: 'premium' }
]

const radioOptions = [
  { text: 'Dari Terbaru', value: 'terbaru' },
  { text: 'Dari Terlama', value: 'terlama' }
]

// Type dropdown keys
type DropdownKey = keyof typeof dropdowns

// Toggle dropdown visibility
const toggleDropdown = (dropdown: DropdownKey) => {
  dropdowns[dropdown] = !dropdowns[dropdown]
}

// Reactive state untuk radio selection
const selectedRadio = reactive({
  value: null as string | null
})
</script>

<template>
  <div>
    <div>
      <div>
        <button
          @click="toggleDropdown('filters')"
          class="bg-gray-50 text-gray-900 rounded-lg flex text-left text-sm font-bold px-4 py-2 gap-2"
        >
          Filter
          <Dropdown />
        </button>
        <div
          v-if="dropdowns.filters"
          class="absolute bg-white border items-center justify-center text-left text-sm self-stretch font-bold py-4 px-6 right-20"
        >
          <h1 class="justify-center items-center text-gray-700">Status Berlangganan</h1>
          <label
            class="block p-2 cursor-pointer"
            v-for="filter in filterOptions"
            :key="filter.value"
          >
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-2">{{ filter.text }}</span>
          </label>

          <h1 class="justify-center items-center text-gray-700">Urutan</h1>
          <label
            class="block p-2 cursor-pointer"
            v-for="option in radioOptions"
            :key="option.value"
          >
            <input
              type="radio"
              class="form-radio"
              :value="option.value"
              v-model="selectedRadio.value"
            />
            <span class="ml-2">{{ option.text }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
