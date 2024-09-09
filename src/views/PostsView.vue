<script setup lang="ts">
import { ChevronDown, ChevronsDown, SearchIcon, UserPlus } from 'lucide-vue-next'
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
      <input type="text" placeholder="Kullanıcı Ara" class="w-full ps-10 focus:outline-none" />
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
        <tr class="*:p-4 shadow-custom relative">
          <td>
            <input type="checkbox" />
          </td>
          <td>1</td>
          <td>John Doe</td>
          <td>Lorem ipsum dolor s...</td>
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
        <!-- row end/start -->
        <tr class="*:p-4 shadow-custom relative">
          <td>
            <input type="checkbox" />
          </td>
          <td>1</td>
          <td>John Doe</td>
          <td>Lorem ipsum dolor s...</td>
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
      </tbody>
    </table>
  </div>
</template>
