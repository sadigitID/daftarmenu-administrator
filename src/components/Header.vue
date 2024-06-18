<script setup lang="ts">
import { Logo, Profil } from '@/components/icons'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useAccountStore } from '@/stores/account'
import { useDialogStore } from '@/stores/dialog'

const dialog = useDialogStore()
const { logout } = useAccountStore()

const confirmLogout = () => {
  dialog.title = 'Logout'
  dialog.content = 'Apakah anda yakin ingin keluar?'
  dialog.type = 'warning'
  dialog.showCancelButton = true
  dialog.dismissOnAction = true
  dialog.confirmText = 'Ya'
  dialog.cancelText = 'Tidak'
  dialog.open = true

  dialog.onConfirm = onSuccessfulLogout
}

const onSuccessfulLogout = () => {
  logout()
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 h-[82px] flex items-center justify-between bg-white shadow-md px-4 py-2"
  >
    <div class="flex items-center ml-4">
      <Logo class="w-[110px] h-[52px] ml-28" />
    </div>
    <div class="flex items-center">
      <Menu as="div" class="relative inline-block text-left">
        <div class="mr-[25px]">
          <MenuButton
            class="flex justify-center items-center gap-x-2.5 rounded-full bg-primary-50 px-4 py-2 text-sm font-bold text-primary-800"
          >
            <Profil class="w-6 h-6" /> Admin</MenuButton
          >
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  ]"
                  >Account settings</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  ]"
                  >Support</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  ]"
                  >License</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  @click="confirmLogout"
                  :class="[
                    active ? 'bg-gray-100 text-red-700' : 'text-red-600',
                    'block w-full px-4 py-2 text-left text-sm font-semibold'
                  ]"
                >
                  Sign out
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </header>
</template>
