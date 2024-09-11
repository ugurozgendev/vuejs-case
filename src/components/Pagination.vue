<script setup lang="ts">
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-vue-next'

const { totalPage, currentPage } = defineProps<{
  totalPage: number
  currentPage: number
}>()

const goToPage = (page: number) => {
  if (page > 0 && page <= totalPage) {
    emit('update:page', page)
  }
}

const emit = defineEmits<{
  (e: 'update:page', page: number): void
}>()
</script>

<template>
  <div class="text-end mt-8 mb-4" v-if="totalPage > 1">
    <div class="inline-flex items-center bg-background gap-4 rounded-full p-4 ms-auto">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
        <ArrowLeftCircle />
      </button>
      <div class="flex *:block *:px-3.5 *:py-0.5 *:rounded-lg *:border *:border-transparent">
        <button
          v-for="page in totalPage"
          :key="page"
          @click="goToPage(page)"
          :class="{ ' !border-[#8B8C8D]': page === currentPage }"
        >
          {{ page }}
        </button>
      </div>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPage">
        <ArrowRightCircle />
      </button>
    </div>
  </div>
</template>
