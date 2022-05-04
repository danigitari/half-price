import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate"

const store = createStore({
    plugins: [createPersistedState()],
    state: {
        cart: [],
    },
    getters: {
        getCartItems(state) {
            return state.cart
        },
        getTotalCartItems(state) {
            return state.cart.reduce((prev, curr) => prev + curr.quantity, 0)
        },
        getTotalCost(state) {
            return state.cart.map(item => {
                return item.quantity * item.price
            }).reduce((prev, curr) => prev + curr, 0)
        }
    },

    mutations: {

        ADD_TO_CART(state, book) {

            state.cart.push(book)
            let cart = [...state.cart.reduce((map, obj) =>
                map.set(obj.id, obj), new Map()).values()]
            state.cart = cart
        },

        REMOVE_FROM_CART(state, book) {
            state.cart.splice(book)
        },
        REMOVE_PRODUCT_FROM_CART(state, book) {
            let cart = state.cart.filter(product =>
                product.id != book.id
            )
            state.cart = cart
        },
        CLEAR_CART(state) {
            state.cart = []
        }

    },
    actions: {
        ADD_TO_CART({commit}, book) {
            commit('ADD_TO_CART', book)
        }
    },
})

export default store