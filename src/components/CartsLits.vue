<template>
  <div>
    <div class="flex h-24 w-full items-center mt-10 bg-sky-500">
      <div class="ml-6">
        <div class="md:flex flex-row">
          <p class="text-lg font-serif">Рекомендации</p>
          <button v-on:click="broad" class="bg-indigo-600 text-white rounded ml-6">
            Показать/скрыть редактирование
          </button>
        </div>
      </div>
    </div>
    <CreateForm class="ml-9 w-80 mt-4" />
    <div class="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2">
      <CartsElem
          v-for="(carte, i) in carts"
          :key="carte.id"
          :carts="carte"
          :id="i"
          v-on:remove-carts="removeCart"
          :editing="editing"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CartsElem from "./CartsElem";
import CreateForm from "@/components/CreateForm";

export default {
  name: "ShareLits",
  components: {
    CartsElem,
    CreateForm,
  },
  data() {
    return {
      editing: true,
    };
  },
  computed: {
    ...mapState(["carts"]),
  },
  methods: {
    ...mapMutations(["removeCarts"]),
    removeCart(id) {
      this.removeCarts({ id });
    },
    broad() {
      this.editing = !this.editing;
    },
  },

};
</script>
