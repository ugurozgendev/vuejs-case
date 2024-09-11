<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { LayoutGrid, UserIcon } from 'lucide-vue-next'
</script>

<template>
  <Toaster />
  <aside
    class="fixed start-0 top-0 bottom-0 flex flex-col h-screen bg-background w-[var(--sidebar-width)] shadow"
  >
    <header class="h-14 flex items-center justify-center border-b-2 text-xl lg:mb-12">MENÜ</header>
    <div class="*:text-[20px] py-2">
      <RouterLink activeClass="bg-muted" to="/posts" class="flex items-center gap-2 px-4 py-1">
        <LayoutGrid class="w-4 h-4 flex-shrink-0" /> Gönderiler
      </RouterLink>
      <RouterLink activeClass="bg-muted" to="/users" class="flex items-center gap-2 px-4 py-1">
        <UserIcon class="w-4 h-4 flex-shrink-0" /> Kullanıcılar
      </RouterLink>
    </div>
  </aside>
  <main class="w-[var(--main-content-width)]">
    <div class="container mx-auto">
      <div class="py-4 px-6">
        <RouterView />
      </div>
    </div>
  </main>
</template>
