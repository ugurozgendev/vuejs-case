<script setup lang="ts">
import type { Post } from '@/types'
import { computed, ref, watchEffect } from 'vue'
import DataTableItem from '@/components/DataTableItem.vue'
import Pagination from '@/components/Pagination.vue'

const props = defineProps<{
  data: Post[]
  keywords: string
}>()

const perPage = ref(12)
const currentPage = ref(1)
const totalPage = ref(1)

const handlePageChange = (page: number) => {
  currentPage.value = page
}

const filteredData = computed(() => {
  const { data, keywords } = props
  const searchItem = keywords.trim().toLowerCase()

  if (searchItem) {
    return data.filter((item) => item.user.name.toLowerCase().includes(searchItem))
  }

  return data
})

const filteredDataPaginate = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value

  return filteredData.value.slice(start, end)
})

watchEffect(() => {
  currentPage.value = 1
  totalPage.value = Math.ceil(filteredData.value.length / perPage.value)
})
</script>

<template>
  <div class="bg-[#D9D9D9] shadow-custom px-10 py-9 rounded-t-[56px] mt-8">
    <!-- data table -->
    <table class="w-full">
      <thead>
        <tr
          class="*:text-start *:bg-background *:p-4 first:*:rounded-tl-[25px] last:*:rounded-tr-[25px] *:font-semibold border-spacing-y-14"
        >
          <th>
            <input type="checkbox" />
          </th>
          <th>ID</th>
          <th>İSİM SOYİSİM</th>
          <th>BAŞLIK</th>
          <th>KATEGORİ</th>
          <th>SON GÜNCELLEME</th>
          <th></th>
        </tr>
        <tr class="h-14" colspan="2"></tr>
      </thead>
      <tbody class="*:bg-background has-[:checked]:*:bg-[#E3FFE4]">
        <template v-if="filteredDataPaginate.length > 0">
          <template v-for="post in filteredDataPaginate" :key="post.id">
            <DataTableItem :post="post" />
          </template>
        </template>
        <template v-else>
          <tr>
            <td class="p-4 shadow-custom text-center" colspan="7">Veri bulunamadı.</td>
          </tr>
        </template>
      </tbody>
    </table>

    <!-- pagination -->
    <Pagination :totalPage="totalPage" :currentPage="currentPage" @update:page="handlePageChange" />
  </div>
</template>
