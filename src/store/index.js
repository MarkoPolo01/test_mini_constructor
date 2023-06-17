import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carts: JSON.parse(localStorage.getItem('carts') || '[]'),
        films: []
    },
    getters: {
        cartsById: state => id => state.carts.find(cart => cart.id === id)
    },
    mutations: {
        fetchFilms(state, films) {
            state.films = films;
        },
        addCarts(state, cart) {
            state.carts.push(cart);
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        removeCarts(state, { id }) {
            const idx = state.carts.findIndex(cart => cart.id === id);
            state.carts.splice(idx, 1);
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        updateCarts(state, { title, description, id }) {
            const idx = state.carts.findIndex(cart => cart.id === id);
            const cart = state.carts[idx];
            const updatedCart = { ...cart, title, description };
            Vue.set(state.carts, idx, updatedCart);
            localStorage.setItem('carts', JSON.stringify(state.carts));
        }
    },
    actions: {
        fetchFilms(context) {
            fetch("https://api.themoviedb.org/3/movie/popular?api_key=c1f350f7c6ec8b7e0821e6c106120082")
                .then(response => response.json())
                .then(films => context.commit('fetchFilms', films));
        }
    },
    modules: {}
})

