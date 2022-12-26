<template>
  <Layout>
    <div class="flex justify-between">
      <div>
        <div v-for="(product, index) in basketStore.products">
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
          <p>{{ product.count }}</p>
          <button class="bg-blue-200" @click="basketStore.addToBasket(index)">AddToBasket</button>
        </div>
      </div>
      <div v-if="basketStore.basket.length">
        <h5>Basket</h5>
        <div v-for="product in basketStore.basket">
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
          <p>{{ product.count }}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import { mapStores } from 'pinia'
import { useBasketStore } from '../stores/basket'
export default {
  computed: {
    ...mapStores(useBasketStore)
  }

}
</script>