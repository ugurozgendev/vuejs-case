<script setup lang="ts">
import type { Post } from '@/types'
import { ChevronDown } from 'lucide-vue-next'
import moment from 'moment'
import { ref } from 'vue'

const { post, tableType } = defineProps<{
  post: Post
  tableType: 'users' | 'posts'
}>()

const toggle = ref(false)
</script>

<template>
  <tr class="*:p-4 *:text-muted-foreground shadow-custom relative">
    <td v-if="tableType === 'posts'">
      <input type="checkbox" />
    </td>
    <td>{{ post.id }}</td>
    <td>{{ post.user.name }}</td>
    <td>{{ post.title }}</td>
    <td>Lorem</td>
    <td>17 Mart</td>
    <td class="text-end" v-if="tableType === 'posts'">
      <button @click="toggle = !toggle" class="inline-block p-2 rounded-full hover:bg-muted">
        <ChevronDown class="w-5 h-5" />
      </button>
    </td>
  </tr>
  <tr v-if="tableType === 'posts'" :class="{ hidden: !toggle }">
    <td colspan="7" class="bg-muted text-muted-foreground px-6 py-8">
      <div class="grid grid-cols-3">
        <div class="col-span-1">
          <div class="flex gap-6">
            <figure>
              <img
                :src="post.user.avatar"
                class="border-[7px] border-[#BEF5CD] w-[128px] h-[128px] rounded-full"
                alt=""
              />
            </figure>
            <div class="flex flex-col *:bg-background gap-3 *:p-1 *:pe-8">
              <span>{{ post.user.name }}</span>
              <span>{{ post.user.email }}</span>
              <span>{{ moment(post.user.birtday).format('DD.MM.YYYY') }}</span>
              <span>{{ post.user.phone }}</span>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div class="flex flex-col *:bg-background gap-3 *:px-3 *:py-1">
            <span class="font-bold">{{ post.title }}</span>
            <span>{{ post.body }}</span>
          </div>
        </div>
      </div>
    </td>
  </tr>
  <tr class="h-7" colspan="2"></tr>
</template>
