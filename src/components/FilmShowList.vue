<template>
  <div>
    <div class="grid grid-cols-6">
      <FilmShowElem
          v-for="(elem,i) in popular" :key="elem.id"
          v-bind:popular="elem"
          v-bind:id="i"
      />
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";
import FilmShowElem from "@/components/FilmShowElem";
export default {
  components: {FilmShowElem},
  data() {
    return {
      popular: []
    };
  },
  computed: mapState({
    count: state => state.films.length,
    films: 'films'
  }),
  mounted() {
    this.popular =this.films.results
    this.popular = this.popular.splice(0,5)
    console.log(this.popular)
  }
}
</script>