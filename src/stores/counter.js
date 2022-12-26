import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter',{
    state: () => ({
        count: 0,
        double: 2
    }),
    getters: {
        doubleCount: state => state.count * state.double
    },
    actions: {
        increment() {
            this.count++
        }
    }
})