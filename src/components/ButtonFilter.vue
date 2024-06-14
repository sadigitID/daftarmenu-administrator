<script setup>
import { reactive, computed } from 'vue'
import { Dropdown } from './icons';

const filters = reactive({
  free: false,
  trial: false,
  premium: false,
  radio: null,
})

const dropdowns = reactive({
  filters: false,
  options: false,
})

const filterOptions = [
  { text: 'Free', value: 'free' },
  { text: 'Trial', value: 'trial' },
  { text: 'Premium', value: 'premium' },
]

const radioOptions = [
  { text: 'Dari Terbaru', value: 'terbaru' },
  { text: 'Dari Terlama', value: 'terlama' },
]

const toggleDropdown = (dropdown) => {
  dropdowns[dropdown] = !dropdowns[dropdown]
}

const selectedFiltersText = computed(() => {
  const selected = filterOptions.filter(option => filters[option.value]).map(option => option.text)
  return selected.length ? selected.join(', ') : 'Filter'
})


</script>


<template>
  <div>
 
    <div>
      
      <div class=" relative">
        <button @click="toggleDropdown('filters')" class="bg-gray-50 text-gray-900 rounded-lg flex text-left text-sm font-bold px-4 py-2 gap-2">
          {{ selectedFiltersText }}
          <Dropdown/>
        </button>
        <div v-if="dropdowns.filters" class="  bg-white border rounded items-center justify-center text-left text-sm font-bold py-4 px-6 ">
          <h1 class="justify-center items-center text-gray-700">Status Berlangganan </h1>
          <label class="block p-2 cursor-pointer" v-for="filter in filterOptions" :key="filter.value">
            <input type="checkbox" class="form-checkbox" v-model="filters[filter.value]" />
            <span class="ml-2">{{ filter.text }}</span>
          </label>

          <h1 class="justify-center items-center text-gray-700">urutan</h1>
          <label class="block p-2 cursor-pointer" v-for="option in radioOptions" :key="option.value">
            <input type="radio" class="form-radio" :value="option.value" v-model="filters.radio" />
            <span class="ml-2">{{ option.text }}</span>
          </label>
        </div>
      </div>
    </div>

  </div>
</template>




