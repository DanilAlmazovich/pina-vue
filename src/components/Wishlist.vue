<template>
  <div class="py-4">
    <h1 class="text-center text-xl font-semibold">Избранные фильмы</h1>
    <div v-if="showsStore.wishlistItems.length" class="py-4">
      <div v-for="list in showsStore.wishlistItems" class="flex items-center mb-2">
        <div class="w-20 h-20 mr-4">
          <img class="w-full h-full object-contain" :src="list.image.medium" alt="">
        </div>
        <p>{{ list.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useShowsStore } from "../stores/shows";
export default {
  name: "Wishlist",
  computed: {
    ...mapStores(useShowsStore)
  }
}
</script>

<style scoped>

</style>