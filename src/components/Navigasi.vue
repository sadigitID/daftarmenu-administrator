<script setup lang="ts">
import { ref } from 'vue'
import {
  HomeIcon,
  LaporanIcon,
  UpgradeIcon,
  NotesIcon,
  HomeClick,
  LaporanClick,
  UpgradeClick,
  NotesClick
} from '@/components/icons/index.ts'
import NavComponents from '@/components/NavComponents.vue'

const NavigasiItem = [
  {
    icon: HomeIcon,
    activeIcon: HomeClick,
    title: 'Home'
  },
  {
    icon: LaporanIcon,
    activeIcon: LaporanClick,
    title: 'Laporan'
  },
  {
    icon: UpgradeIcon,
    activeIcon: UpgradeClick,
    title: 'Upgrade'
  },
  {
    icon: NotesIcon,
    activeIcon: NotesClick,
    title: 'Notes'
  }
]

const clickedIndex = ref<number | null>(null)

const handleClick = (index: number) => {
  clickedIndex.value = index
}
</script>

<template>
  <nav
    class="h-full w-[120px] bg-primary-900 text-primary-50 flex flex-col justify-center items-center"
  >
    <div class="flex flex-col items-center space-y-6">
      <NavComponents
        v-for="(item, index) in NavigasiItem"
        :key="index"
        :icon="item.icon"
        :activeIcon="item.activeIcon"
        :title="item.title"
        :isActive="clickedIndex === index"
        @click="handleClick(index)"
      />
    </div>
  </nav>
</template>
