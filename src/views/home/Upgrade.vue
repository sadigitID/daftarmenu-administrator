<script setup >

import { IconSearch, Dropdown, UserInvalid, UserValid } from "@/components/icons";
import { Food } from '@/assets/image'
import { useAccountStore } from '@/stores/account'
import { Resto } from '@/components'
import { RestoProfile } from '@/assets/image';
import { InputText } from '@/components/';
import { ButtonFilter } from "@/components";



const restoList = [
  {
    image: RestoProfile,
    name: 'Resto Sadigit',
    memberStatus: 'premium',
    activeStatus: true,
    lastTransaction: '8 transaksi pada hari ini'
  },
  {
    image: RestoProfile,
    name: 'Resto Sadigit',
    memberStatus: 'free',
    activeStatus: false,
    lastTransaction: 'Exp:22-08-2024'
  },
  {
    image: RestoProfile,
    name: 'Resto Sadigit',
    memberStatus: 'trial',
    lastTransaction: 'Tidak aktif lebih dari 30 hari'
  }
]
const account = useAccountStore()
</script>

<template>
<div class="flex items-center justify-center w-full h-full p-6 bg-layout">
    <section id="upgrade" class="container overflow-hidden w-[1272px] h-[819px] gap-6 bg-white p-6 rounded-2xl">
        
        <div class="flex  justify-between">
            <div class=""> 
                <h1 class="text-extrabold text-xl text-primary-900">Daftar Pengguna</h1>
                <p class="text-xs text-primary-900">Menampilkan 1350 pengguna</p>
            </div>

            <div class="flex gap-4">
            <div id="search" class="bg-gray-50 m-auto justify-center items-center flex rounded-lg px-2 ">
                <IconSearch class="w-4 h-4 "/>
                 <InputText
                 class="text-sm font-sans  text-gray-800"
                 v-model:value="search"
                 placeholder="Cari Menu"
                 />
            </div>

            <ButtonFilter/>

            </div>
            </div>

            

          






    <div class="justify-center items-center flex gap-5 w-[1223px] py-6">
        <div class="flex items-center rounded-xl overflow-hidden w-[340px] h-[104px] self-stretch">
            <img :src="Food" alt="food" class="object-cover object-center ">
        </div>

        <div class="bg-primary-900 gap-4 flex justify-center items-center rounded-xl py-4 px-6 w-[217px] h-[104px]">
            <UserValid class="w-12 h-12 text-white " />
            <div class="flex flex-col">
                <h1 class="text-white text-xs">Hari Ini Bergabung</h1>
                <h1 class="text-white text-xl font-bold">800</h1>
            </div>
        </div>

        <div class="bg-primary-50 flex  gap-4 justify-center items-center rounded-xl py-4 px-6 w-[290px] h-[104px]">
            <UserInvalid class="  fill-primary-900" />
            <div>
                <div class="flex items-center justify-start gap-1">
                    <h1 class="text-primary-900 text-lg font-bold">800</h1>
                    <h1 class="text-primary-900 text-xs">User Aktif</h1>
                </div>
                <div class="flex items-center justify-center gap-1">
                    <h1 class="text-primary-900 text-lg font-bold">800</h1>
                    <h1 class="text-primary-900 text-xs">User Tidak Aktif</h1>
                </div>
            </div>
        </div>

    <div class="bg-primary-50 flex flex-col justify-center items-center rounded-2xl overflow-hidden w-auto h-[100%] ">
        <div class="bg-primary-50 gap-2 flex py-2 px-6 items-center justify-center w-[328px] h-[64px] ">
            <UserValid class=" fill-primary-900" />
            <div>
                <h1 class="text-primary-900 text-xs">Premium</h1>
                <h1 class="text-primary-900 text-xl font-bold">800</h1>
            </div>
        </div>

        <div class="bg-primary-900 flex items-center justify-between justify-center px-6 py-2 w-[100%] h-auto">
            <div class="flex justify-center items-center gap-1 ">
                <h1 class="text-sm text-white">Trial</h1>
                <h1 class="text-xl font-bold text-white">800</h1>
            </div>

            <div class="flex justify-center items-center gap-1 ">
                <h1 class="text-sm text-white">Free</h1>
                <h1 class="text-xl font-bold text-white">800</h1>
            </div>
        </div>
    </div>
    </div>




        <div name="resto" id="resto" class="grid grid-cols-4 grid-row-5 gap-x-2 gap-y-3">
            <Resto 
            v-for="resto in restoList"
            :image="resto.image"
            :name="resto.name"
            :memberStatus="resto.memberStatus"
            :activeStatus="resto.activeStatus"
            :lastTransaction="resto.lastTransaction"
            />
        </div>
   </section>
</div>   
</template>
