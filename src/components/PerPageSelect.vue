<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()

const perPageItems = [6, 10, 20, 50]
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
      <option :value="item" v-for="item in perPageItems" :key="item">
        1-{{ item }} in {{ store.state.perPageDataCount }}
      </option>
    </select>
    <ChevronsDown class="w-5 h-5 absolute end-2" />
  </div>
</template>
