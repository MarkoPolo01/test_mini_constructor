import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts:[],
    films:[]
  },
  getters: {
    cartsById: s => id =>s.carts.find(t => t.id === id)
  },
  mutations: {
    fetchCarts(state,carts){
      state.carts =carts;
    },
    fetchFilms(state,films){
      state.films =films;
    },
    addCarts(state,carts){
      state.carts.push(carts)
    },
    removeCarts(state,{id}){
      const idx = state.carts.findIndex(t=>t.id === id)
      state.carts.splice(idx,1);

    },
    updateCarts(state,{title,description,id}){
      const carts = state.carts.concat()
      const idx = carts.findIndex(t=>t.id === id)
      const cart = carts[idx]

      carts[idx]={...cart,title,description}

      state.carts = carts

    }
  },
  actions: {
    fetchCarts(context){
      fetch('/carts.json')
          .then(response =>response.json())
          .then(carts => context.commit('fetchCarts',carts));
    },
    fetchFilms(context){
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=c1f350f7c6ec8b7e0821e6c106120082")
          .then(response =>response.json())
          .then(films => context.commit('fetchFilms',films));
      console.log('FetchCino');
    }


  },
  modules: {
  }
})
