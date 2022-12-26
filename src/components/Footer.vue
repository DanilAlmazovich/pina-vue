<template>
<footer class="bg-gray-900 py-4">
  count: {{ counterStore.count }}   double-count: {{ counterStore.doubleCount }}
</footer>
</template>
<script>
import { mapStores } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  computed: {
    ...mapStores(useCounterStore)
  }
}
</script>