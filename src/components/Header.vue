<template>
<header class="bg-gray-200 flex justify-between py-4 px-10">
  <div>
    <router-link class="mr-2" to="/">home</router-link>
    <router-link class="mr-2" to="/about">about</router-link>
    <router-link class="mr-2" to="/shows">shows</router-link>
  </div>
  <div>
    basket: {{ basketStore.basket.length }}
    basket: {{ basketStore.sum }}
  </div>
  <div>
    count: {{ counterStore.count }}, double: {{ counterStore.doubleCount }}
  </div>
  <div>
    <div class="space-y-2 cursor-pointer" @click="showsStore.status = !showsStore.status">
      <div class="w-8 h-0.5 bg-gray-600"></div>
      <div class="w-8 h-0.5 bg-gray-600"></div>
      <div class="w-8 h-0.5 bg-gray-600"></div>
    </div>
  </div>
</header>
</template>

<script>
import { mapStores } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { useBasketStore } from '../stores/basket'
import { useShowsStore } from "../stores/shows";
export default {
  name: "Header",
  computed: {
    ...mapStores(useCounterStore, useBasketStore, useShowsStore)
  },
  // mounted() {
  //   console.log(this.showsStore.showStatus)
  // }
}
</script>

<style scoped>

</style>