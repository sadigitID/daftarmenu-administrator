<script setup >

import { Search, Dropdown } from "@/components/icons";

import { useAccountStore } from '@/stores/account'
const account = useAccountStore()
</script>

<template>
   <section class="contianer bg-blue-200 m-12 justify-between" >
    <div class="flex container justify-between">
            <div class=""> 
                <h1 class="text-extrabold text-2xl  text-primary-900">Daftar Pengguna</h1>
                <p class="text-base  text-primary-900">Menampilkan 1350 pengguna</p>
            </div>
        <div class="flex justify-between">
            <div class="bg-gray-50 m-auto justify-center items-center flex border-1 rounded-lg pe-16 ">
                <Search class="w-6 h-6 m-1"/>
                <h1 class="text-primary-900 font-light text-xs" >Cari menu</h1>
            </div>

            <div class="bg-gray-50 m-auto mx-2  px-1 py-1 justify-center items-center flex border-1 rounded-lg  ">
                <button class="text-primary-900 font-bold ">Filter</button>
                <Dropdown class="w-6 h-6 text-primary-900"/>
            </div>
        </div>
    </div>



    <div>

        
    </div>
   </section>
</template>
