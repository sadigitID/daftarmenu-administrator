<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog'
import { RouterView } from 'vue-router'
import { ActionDialog } from '@/components/dialogs'

const dialog = useDialogStore()

const onClose = () => {
  dialog.open = false
}
</script>

<template>
  <ActionDialog
    :show-cancel-button="dialog.showCancelButton"
    :dismiss-on-action="dialog.dismissOnAction"
    :open="dialog.open"
    :title="dialog.title"
    :message="dialog.content"
    :confirm-text="dialog.confirmText"
    :cancel-text="dialog.cancelText"
    @on-close="onClose"
    @on-confirm="dialog.onConfirm"
    @on-cancel="dialog.onCancel"
    :type="dialog.type"
  />

  <RouterView />
</template>
