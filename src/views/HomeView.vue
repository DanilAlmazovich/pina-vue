<template>
  <Layout>
    <p>{{ counterStore.count }}</p>
    <p>{{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">count +</button>
  </Layout>
</template>
<script>
import { mapStores } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  computed: {
    ...mapStores(useCounterStore)
  },
  mounted() {
    console.log(this.counterStore)
  }
}
</script>