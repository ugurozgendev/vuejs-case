<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()
</script>

<template>
  <div
    class="relative shadow-custom flex items-center justify-between bg-background rounded-lg rounded-br-[40px] overflow-hidden order-3"
  >
    <select
      @change="
        (event) => store.commit('setPerPage', parseInt((event.target as HTMLSelectElement).value))
      "
      id=""
      class="appearance-none w-40 px-8 text-start h-full rounded-lg"
    >
      <option value="6">1-6 in 100</option>
      <option value="10">1-10 in 100</option>
      <option value="20">1-20 in 100</option>
      <option value="50">1-50 in 100</option>
    </select>
    <ChevronsDown class="w-5 h-5 absolute end-2" />
  </div>
</template>
