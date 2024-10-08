<script setup lang="ts">
import type { Post } from '@/types'
import { computed, ref, watchEffect } from 'vue'
import DataTableItem from '@/components/DataTableItem.vue'
import Pagination from '@/components/Pagination.vue'
import { useStore } from '@/store'

const props = defineProps<{
  data: Post[]
  keywords: string
  tableType: 'users' | 'posts'
}>()

const store = useStore()

const perPage = ref(store.state.perPage)
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

const emits = defineEmits(['postSelectHandle'])

const postSelectHandle = (postId: number) => {
  emits('postSelectHandle', postId)
}

watchEffect(() => {
  currentPage.value = 1
  perPage.value = store.state.perPage
  totalPage.value = Math.ceil(filteredData.value.length / perPage.value)

  store.commit('setPerPageDataCount', filteredData.value.length)
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
          <th v-if="tableType === 'posts'">
            <input type="checkbox" />
          </th>
          <th>ID</th>
          <th>İSİM SOYİSİM</th>
          <th>BAŞLIK</th>
          <th>KATEGORİ</th>
          <th>SON GÜNCELLEME</th>
          <th v-if="tableType === 'posts'"></th>
        </tr>
        <tr class="h-14" colspan="2"></tr>
      </thead>
      <tbody class="*:bg-background has-[:checked]:*:bg-[#E3FFE4]">
        <template v-if="filteredDataPaginate.length > 0">
          <template v-for="(post, index) in filteredDataPaginate" :key="post.id">
            <DataTableItem
              :post="post"
              :tableType="props.tableType"
              :isLast="index === filteredDataPaginate.length - 1"
              @postSelectHandle="postSelectHandle"
            />
          </template>
        </template>
        <template v-else>
          <tr>
            <td class="p-4 shadow-custom text-center" colspan="7">Veri bulunamadı.</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>

  <!-- pagination -->
  <Pagination :totalPage="totalPage" :currentPage="currentPage" @update:page="handlePageChange" />
</template>
