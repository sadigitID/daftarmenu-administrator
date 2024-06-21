<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  HomeIcon,
  LaporanIcon,
  UpgradeIcon,
  NotesIcon,
  HomeClick,
  LaporanClick,
  UpgradeClick,
  NotesClick
} from '@/components/icons'
import NavComponents from '@/components/NavComponents.vue'
import { RouterLink, useRoute } from 'vue-router'

const navigasiItem = [
  {
    icon: HomeIcon,
    activeIcon: HomeClick,
    title: 'Home',
    path: '/home'
  },
  {
    icon: LaporanIcon,
    activeIcon: LaporanClick,
    title: 'Laporan',
    path: '/home/report'
  },
  {
    icon: UpgradeIcon,
    activeIcon: UpgradeClick,
    title: 'Upgrade',
    path: '/home/upgrade'
  },
  {
    icon: NotesIcon,
    activeIcon: NotesClick,
    title: 'Notes',
    path: '/home/notes'
  }
]

const route = useRoute()
const menuActive = ref(route.fullPath)
watch(route, (to, _) => {
  menuActive.value = to.fullPath
})
</script>

<!-- fixed left-0 top-0 bottom-0 h-screen w-[120px] bg-primary-900 text-primary-50 flex flex-col justify-center items-center z-10 -->
<template>
  <nav class="bg-primary-900 fixed left-0 bottom-0 w-full text-white z-10 md:h-screen md:w-[120px]">
    <div
      class="flex items-center justify-around w-full h-20 px-6 md:px-0 md:h-full md:flex-col md:justify-center md:gap-6"
    >
      <RouterLink v-for="(item, index) in navigasiItem" :to="item.path" :key="index">
        <NavComponents
          :icon="item.icon"
          :activeIcon="item.activeIcon"
          :title="item.title"
          :isActive="menuActive === item.path"
        />
      </RouterLink>
    </div>
  </nav>
</template>
