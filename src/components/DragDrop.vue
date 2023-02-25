<template>
  <div class="flex mt-5">
    <div class=" grid md:grid-cols-2">
      <div class=" w-60 rounded-lg mt-4 border-black min-h-full bg-slate-200">
        <div class="">
          <h3>Стоит посмотреть</h3>
          <draggable
              class="list-group kanban-column"
              :list="carts"
              group="tasks"
          >
            <div
                class="list-group-item"
                v-for="element in carts"
                :key="element.name"
            >
              {{ element.title }}
            </div>
          </draggable>
        </div>
      </div>
      <div class="w-60 mt-4 rounded-lg border-black md:ml-8 min-h-full bg-slate-200">
        <div class="">
          <h3>Просмотрены</h3>
          <draggable
              class="list-group kanban-column"
              :list="arrWatching"
              group="tasks"
          >
            <div
                class="list-group-item"
                v-for="element in arrWatching"
                :key="element.name"
            >
              {{ element.title }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import {mapState} from "vuex";

export default {
  name: "kanban-board",
  components: {

    draggable
  },
  data() {
    return {
      arrWatching: []
    };
  },
  computed: mapState({
    count: state => state.carts.length,
    carts: 'carts'
  }),
};
</script>


