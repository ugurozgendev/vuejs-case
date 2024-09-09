<script setup lang="ts">
import { ChevronsDown, SearchIcon, UserPlus } from 'lucide-vue-next'
</script>

<template>
  <div class="flex gap-8">
    <button class="btn rounded-bl-[40px] order-2 lg:order-1">
      Kullanıcı Ekle <UserPlus class="w-5 h-5 ms-2" />
    </button>
    <div
      class="flex-[12] relative shadow-custom flex items-center flex-grow px-4 rounded-lg bg-background order-1 lg:order-2"
    >
      <SearchIcon class="w-5 h-5 absolute start-6" />
      <input type="text" placeholder="Kullanıcı Ara" class="w-full ps-10 focus:outline-none" />
    </div>
    <div
      class="relative shadow-custom flex items-center justify-between bg-background rounded-lg rounded-br-[40px] overflow-hidden order-3"
    >
      <select name="" id="" class="appearance-none w-40 px-8 text-start h-full rounded-lg">
        <option value="">1-6 in 100</option>
        <option value="">7-12 in 100</option>
        <option value="">13-18 in 100</option>
      </select>
      <ChevronsDown class="w-5 h-5 absolute end-2" />
    </div>
  </div>
</template>
