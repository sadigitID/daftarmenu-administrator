<script setup lang="ts">

import { Login } from "@/assets/image";

</script>


<template>
     <section class="container flex justify-center items-center  m-auto ">
      <div class=" p-16 m-auto ">
<div class="mx-2">
<h1 class="text-3xl font-sans text-dark">Selamat Datang</h1>
<p class="text-gray-800 mb-4">Silahkan masuk untuk melihat statistik.</p>
</div>

<div class="mx-2 mb-8 justify-center items-center">
    <h1 class="text-dark font-sans text-base mt-4">Email</h1>
    <input type="email" id="email" name="email" placeholder="Masukan Email"  class=" border-x-8 border-gray-50 py-1 px-16 bg-gray-50 text-dark text-start" required>
    <h1 class="text-dark font-sans text-base mt-4" >Password</h1>
    <input type="password" id="password" name="password" placeholder="Masukan Password" class="border-x-8 border-gray-50  py-1 px-16 bg-gray-50 text-dark text-start" required>
</div>

<div class="text-primary-500 text-end mx-4"><p>lupa password?</p></div>

    <div class="  ">

      <button class="px-36 py-1 border-8 border-primary-500 rounded-lg bg-primary-500 justify-start text-white m-auto ">Login</button>
    </div>

    <div>
      <h1 class="text-center mt-16 text-primary-800">©2024 - PT.Sawarga Digital Indonesia</h1>
      <h1 class="text-center  text-primary-800">V2.0.0</h1>
      
    </div>

</div>
<div class="w-[50%]">
  <img class="w-[85%]" :src="Login" alt="halaman login">
</div>
   </section>
</template>
