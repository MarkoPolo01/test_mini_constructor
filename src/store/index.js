import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts:[]
  },
  getters: {
    cartsById: s => id =>s.carts.find(t => t.id === id)
  },
  mutations: {
    fetchCarts(state,carts){
      state.carts =carts;
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
      console.log(this.carts);
    }


  },
  modules: {
  }
})
