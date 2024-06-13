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
import { useRoute } from 'vue-router'

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
    path: ''
  }
]

const route = useRoute()
const menuActive = ref(route.fullPath)
watch(route, (to, _) => {
  menuActive.value = to.fullPath
})
</script>

<template>
  <nav
    class="h-full w-[120px] bg-primary-900 text-primary-50 flex flex-col justify-center items-center"
  >
    <div class="flex flex-col items-center space-y-6">
      <RouterLink v-for="(item, index) in navigasiItem" :to="item.path">
        <NavComponents
          :key="index"
          :icon="item.icon"
          :activeIcon="item.activeIcon"
          :title="item.title"
          :isActive="menuActive === item.path"
        />
      </RouterLink>
    </div>
  </nav>
</template>
