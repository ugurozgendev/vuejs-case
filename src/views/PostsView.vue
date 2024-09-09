<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
import type { Post, User } from '@/types'
import { ChevronsDown, SearchIcon, UserPlus } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'

// Services
import { getPosts } from '@/services/modules/PostService'
import { getUsers } from '@/services/modules/UserService'

const posts = ref<Post[]>([])
const keywords = ref('')

onMounted(async () => {
  const usersData = await getUsers()
  const postsData = await getPosts()

  posts.value = postsData.map((post: Post) => {
    const user = usersData.find((user: User) => user.id == post.userId)
    return {
      ...post,
      user_name: user?.name || '-'
    }
  })
})
</script>

<template>
  <!-- Action bar -->
  <div class="flex gap-8">
    <button class="btn rounded-bl-[40px] order-2 lg:order-1">
      Kullanıcı Ekle <UserPlus class="w-5 h-5 ms-2" />
    </button>
    <div
      class="flex-[12] relative shadow-custom flex items-center flex-grow px-4 rounded-lg bg-background order-1 lg:order-2"
    >
      <SearchIcon class="w-5 h-5 absolute start-6" />
      <input
        type="text"
        name="keyword"
        placeholder="Kullanıcı Ara"
        class="w-full ps-10 focus:outline-none"
        v-model="keywords"
      />
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

  <!-- Datatable -->
  <DataTable :data="posts" :keywords="keywords" />
</template>
