<template>
  <div class="grid grid-cols-6">
    <CartsElem
        v-for="(carte,i) in carts" :key="carte.id"
        v-bind:carts="carte"
        v-bind:id="i"
        v-on:remove-carts="removeCart"

    />
  </div>
</template>
<script>
import {mapState} from 'vuex';
import {mapMutations} from "vuex";
import CartsElem from "./CartsElem";

export default {
  name: 'ShareLits',
  components: {
    CartsElem,
  },
  computed: mapState({
    count: state => state.carts.length,
    carts: 'carts'
  }),
  methods: {
    ...mapMutations(["removeCarts"]),
    removeCart(id) {
      this.removeCarts({
        id: id
      })
      console.log(id)
    }
  }


}
</script>