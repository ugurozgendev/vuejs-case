<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
import type { Post, User } from '@/types'
import { SearchIcon, UserPlus } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'

// Services
import { getPosts } from '@/services/modules/PostService'
import { getUserAvatar, getUsers } from '@/services/modules/UserService'
import PerPageSelect from '@/components/PerPageSelect.vue'

const posts = ref<Post[]>([])
const keywords = ref('')

onMounted(async () => {
  const usersData = await getUsers()
  const userAvatarsData = await getUserAvatar()
  const postsData = await getPosts()

  posts.value = postsData.map((post: Post) => {
    const user = usersData.find((user: User) => user.id == post.userId) // gonderilerin kullanicisina gore user bulalim

    // Avatar icin rastgele bir indek
    const randomIndex = Math.floor(Math.random() * userAvatarsData.length)
    const avatarItem = userAvatarsData[randomIndex]

    return {
      ...post,
      // bulunan gonderi user datasini birlestirelim
      user: {
        name: user?.name || '-',
        avatar: avatarItem?.picture?.medium,
        email: avatarItem?.email,
        birtday: avatarItem?.dob.date,
        phone: avatarItem?.phone
      }
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
    <PerPageSelect />
  </div>

  <!-- Datatable -->
  <DataTable :data="posts" :keywords="keywords" />
</template>
