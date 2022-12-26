<template>
  <div>
    <v-header/>
    <main class="min-h-screen">
      <slot/>
    </main>
    <v-footer/>
  </div>
</template>

<script>
import VHeader from '../components/Header.vue'
import VFooter from '../components/Footer.vue'
export default {
  name: "Layout",
  components: {
    VHeader,
    VFooter
  }
}
</script>

<style scoped>

</style>