<template>
  <div class="relative overflow-hidden">
    <v-header/>
    <main class="min-h-screen">
      <slot/>
    </main>
    <v-footer/>
    <div v-if="showsStore.status"
         class="w-full h-full absolute left-0 top-0 bg-gray-900 opacity-40 cursor-pointer" @click="showsStore.status = false">
    </div>
    <div :class="showsStore.status ? 'right-0' :'right-[-60%]'"
         class="duration-500 absolute h-screen w-3/5 bg-white top-0">
      <wishlist/>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useShowsStore } from "../stores/shows";
import VHeader from '../components/Header.vue'
import VFooter from '../components/Footer.vue'
import Wishlist from "../components/Wishlist.vue";
export default {
  name: "Layout",
  components: {
    VHeader,
    VFooter,
    Wishlist
  },
  computed: {
    ...mapStores(useShowsStore)
  }
}
</script>

<style scoped>

</style>