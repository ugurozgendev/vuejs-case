<script setup lang="ts">
import type { Post } from '@/types'

const props = defineProps<{
  data: Post[]
}>()
</script>

<template>
  <div class="bg-[#D9D9D9] shadow-custom px-10 py-9 rounded-t-[56px] mt-8">
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
        <tr class="*:p-4 shadow-custom relative" v-for="post in props.data" :key="post.id">
          <td>
            <input type="checkbox" />
          </td>
          <td>{{ post.id }}</td>
          <td>{{ post.user_name }}</td>
          <td>{{ post.title }}</td>
          <td>Lorem</td>
          <td>17 Mart</td>
          <td class="text-end">
            <button class="inline-block p-2 rounded-full hover:bg-muted">
              <ChevronDown class="w-5 h-5" />
            </button>
          </td>
        </tr>
        <tr class="hidden">
          <td colspan="7" class="bg-background p-4">content</td>
        </tr>
        <tr class="h-7" colspan="2"></tr>
      </tbody>
    </table>
  </div>
</template>
