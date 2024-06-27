<template>
    <button v-for="button in 8" :key="button"
    class="flex flex-col items-start gap-2 p-4 flex-1 rounded-2xl bg-white shadow-custom-gray">
      <div class="flex flex-col items-start gap-1 self-stret">
        <div class="w-56 h-7  rounded-lg shimmer">
        </div>
        <div class="flex items-start gap-1">
          <div class="flex p-1 items-center gap-[10px] rounded-lg ">
            <p class="  w-14 h-4 rounded-lg shimmer">
             
            </p>
          </div>
          <div class="flex p-1 items-center  rounded-lg gap-[10px]">
            <p class="w-14 h-4 rounded-lg shimmer">
            </p>
          </div>
        </div>
      </div>
  
      <div class="flex flex-col items-start gap-[11px]">
        <h1 class="text-left w-full rounded-lg  rounded-lg h-11 shimmer">
        </h1>
        <div>
          <h1 class=" w-56 h-[96px] rounded-lg shimmer">
          </h1>
        </div>
      </div>
    </button>
  </template>
  