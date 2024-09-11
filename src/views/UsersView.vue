<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
import type { Post, User } from '@/types'
import { onMounted, ref } from 'vue'

// Services
import { getPosts } from '@/services/modules/PostService'
import { getUsers } from '@/services/modules/UserService'
import { useStore } from '@/store'

const posts = ref<Post[]>([])
const keywords = ref('')
const store = useStore()

onMounted(async () => {
  const usersData = await getUsers()
  const postsData = await getPosts()

  posts.value = postsData
    .filter((p) => store.state.selectedPosts.includes(p.id))
    .map((post: Post) => {
      const user = usersData.find((user: User) => user.id == post.userId)

      return {
        ...post,
        user: {
          name: user?.name || '-'
        }
      }
    })
})
</script>

<template>
  <DataTable :data="posts" :keywords="keywords" tableType="users" />
</template>
