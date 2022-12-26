<template>
<header class="bg-gray-200 flex justify-between py-4 px-2">
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
  </div>
  <div>
    basket: {{ basketStore.basket.length }}
    basket: {{ basketStore.sum }}
  </div>
  <div>
    count: {{ counterStore.count }}, double: {{ counterStore.doubleCount }}
  </div>
</header>
</template>

<script>
import { mapStores } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { useBasketStore } from '../stores/basket'
export default {
  name: "Header",
  computed: {
    ...mapStores(useCounterStore, useBasketStore)
  }
}
</script>

<style scoped>

</style>