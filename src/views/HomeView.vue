<script setup lang="ts">
import Navigasi from '@/components/Navigasi.vue'
import Header from '@/components/Header.vue'
import ReportView from '@/views/pages/ReportView.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex h-screen">
    <Navigasi />
    <div class="flex flex-col flex-grow">
      <Header />
      <main class="">
        <!-- Konten utama di sini -->
        <ReportView />
      </main>
    </div>
  </div>
</template>
