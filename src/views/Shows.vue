<template>
  <layout>
    <div v-if="shows.length" class="py-20">
      <div class="flex flex-wrap">
        <div class="w-1/3 flex flex-col items-center mb-16 px-5" v-for="(show, index) in shows">
          <div class="w-full">
            <img class="m-auto" :src="show.image.medium" alt="">
          </div>
          <p class="mb-2">{{ show.name }}</p>
          <button v-if="!show.status" @click="like(show, index)" class="w-full py-1 bg-purple-100">like</button>
          <button v-else @click="dislike(show, index)" class="w-full py-1 bg-blue-100">dislike</button>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import { mapStores } from "pinia";
import { useShowsStore } from "../stores/shows";

export default {
  name: "Shows",
  components: {},

  data: () => ({
    shows: []
  }),
  computed: {
    ...mapStores(useShowsStore)
  },
  methods: {
    async getShow() {
      const URL = 'https://api.tvmaze.com/shows'
      const response = await fetch(URL)
      const data = await response.json()
      this.shows = await data.filter(item => item.id <= 50).map(item => ({
        ...item,
        status: false
      }))
    },
    like(show, index) {
      this.shows[index].status = true
      this.showsStore.like(show)
    },
    dislike(show, index) {
      this.shows[index].status = false
      this.showsStore.dislike(show)
    }
  },
  mounted() {
    this.getShow()
  },
}
</script>