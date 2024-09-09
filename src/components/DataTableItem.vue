<script setup lang="ts">
import type { Post } from '@/types'
import { ChevronDown } from 'lucide-vue-next'

const { post } = defineProps<{
  post: Post
}>()
</script>

<template>
  <tr class="*:p-4 shadow-custom relative">
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
</template>
