<script setup lang="ts">
import { computed, ref } from 'vue'
import { Block, uploadImgIcon } from '@/components/icons'

interface UploadedImage {
  name: string
  url: string
}

const uploadedImages = ref<UploadedImage[]>([])
const dragOver = ref(false)
const errorMessage = ref<string | null>(null)

// Validation File Upload
const isValidFile = (file: File): boolean => {
  const validTypes = ['image/png', 'image/jpeg', 'image/jpg']
  const maxSize = 2 * 1024 * 1024 // Batas File 2MB

  if (!validTypes.includes(file.type)) {
    errorMessage.value =
      'Kesalahan saat mengupload file gambar, pastikan file adalah PNG, JPG, atau JPEG'
    return false
  }
  if (file.size > maxSize) {
    errorMessage.value = 'Ukuran File terlalu besar, ukuran < 2MB'
    return false
  }
  errorMessage.value = null
  return true
}

const handleFiles = (files: FileList) => {
  // if (uploadedImages.value.length + files.length > 5) {
  //   errorMessage.value = 'Maximal File Upload sebanyak 5 ITem / 5 Gambar'
  //   return
  // }
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    if (isValidFile(file)) {
      const imageUrl = URL.createObjectURL(file)
      uploadedImages.value.push({ name: file.name, url: imageUrl })
    }
  }
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  const files = event.dataTransfer?.files

  if (files) {
    handleFiles(files)
  }
  dragOver.value = false
}

const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
  dragOver.value = true
}

const handleDragLeave = () => {
  dragOver.value = false
}

const handleFileInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const files = input.files

  if (files) {
    handleFiles(files)
  }
}

const removeImage = (index: number) => {
  URL.revokeObjectURL(uploadedImages.value[index].url)
  uploadedImages.value.splice(index, 1)
}

const fileInput = ref<HTMLInputElement | null>(null)
const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click()
  }
}
</script>

<template>
  <div
    class="upload-area flex items-center justify-center flex-col border-2 py-12 cursor-pointer rounded-md border-dashed border-gray-100"
    :class="{ 'bg-gray-50 transition duration-300': dragOver }"
    @drop="handleDrop"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @click="triggerFileInput"
  >
    <uploadImgIcon />
    <span class="text-gray-800 text-center">
      <b class="text-vtd-primary-500">Upload a file</b> or drag and drop <br />PNG, JPG, JPEG, up to
      2MB
    </span>
  </div>

  <input
    type="file"
    accept="image/png, image/jpeg, image/jpg"
    class="hidden"
    ref="fileInput"
    @change="handleFileInput"
    multiple
  />

  <div v-if="errorMessage" class="text-red-500 mt-2 text-sm">
    {{ errorMessage }}
  </div>

  <div class="image-preview-upload mt-4 flex gap-3 justify-start flex-wrap">
    <div
      v-for="(image, index) in uploadedImages"
      :key="index"
      class="image-item w-16 h-16 bg-gray-50 rounded-lg cursor-pointer relative"
    >
      <div
        class="absolute close-btn w-5 h-5 bg-white flex justify-center items-center rounded-full -right-2 -top-2 shadow-custom-gray hover:bg-slate-100 duration-150 transition"
        @click="removeImage(index)"
      >
        <Block />
      </div>
      <img :src="image.url" :alt="image.name" class="w-full h-full object-cover rounded-lg" />
    </div>
  </div>
</template>
