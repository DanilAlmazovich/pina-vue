import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket',{
    state: () => ({

        products: [
            {
                name: 'Messi',
                price: 1000,
                count: 2,
                toBasket: false
            },
            {
                name: 'Xavi',
                price: 1200,
                count: 10,
                toBasket: false
            },
            {
                name: 'Iniesta',
                price: 1500,
                count: 4,
                toBasket: false
            },
        ]
    }),
    getters: {
        sum: state => {
            return state.basket.reduce((acc, item) => acc += (item.price * item.count), 0)
        },
        basket: state => {
            return state.products.filter(item => item.toBasket)
        }
    },
    actions: {
        addToBasket(index) {
            this.products[index].toBasket = true
        }
    }
})