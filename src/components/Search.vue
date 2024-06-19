<Script setup lang="ts">
import { IconSearch } from '@/components/icons'
</Script>

<template>
  <div class="bg-gray-50 m-auto justify-center items-center flex border-1 rounded-lg px-4 pe-16">
    <input
      type="text"
      @input="search"
      class="w-full px-4 py-2 border rounded-lg"
      placeholder="Search..."
    />
    <ul v-if="results.length" class="mt-4 border rounded-lg">
      <li
        v-for="(result, index) in results"
        :key="index"
        class="px-4 py-2 border-b last:border-b-0"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>
