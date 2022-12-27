import { defineStore } from 'pinia'

export const useShowsStore = defineStore('shows', {
    state: () => ({
        status: false,
        wishlist: []
    }),
    getters: {
        wishlistItems: (state) => state.wishlist.filter(item => item.status)
    },
    actions: {
        like(obj) {
            this.wishlist.push(obj)
        },
        dislike(obj) {
            console.log(obj.id)
            console.log(this.wishlist)
            this.wishlist = this.wishlist.filter(item => item.id === obj.id)
            console.log(this.wishlist)
        }
    }
})