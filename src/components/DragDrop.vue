<template>
  <div class="flex mt-5">
    <div class=" grid grid-cols-2">
      <div class=" w-60 rounded-lg border-black min-h-full bg-slate-200">
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

      <div class="w-60 rounded-lg border-black ml-8 min-h-full bg-slate-200">
        <div class="">
          <h3>Просмотрены</h3>
          <!-- In Progress draggable component. Pass arrInProgress to list prop -->
          <draggable
              class="list-group kanban-column"
              :list="arrInProgress"
              group="tasks"
          >
            <div
                class="list-group-item"
                v-for="element in arrInProgress"
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
//import draggable
import draggable from "vuedraggable";
import {mapState} from "vuex";

export default {
  name: "kanban-board",
  components: {
    //import draggable as a component
    draggable
  },
  data() {
    return {

      newTask: "",

      arrInProgress: []
    };
  },
  methods: {
    //add new tasks method
    add: function() {
      if (this.newTask) {
        this.arrBackLog.push({ name: this.newTask });
        this.newTask = "";
      }
    }
  },
  computed: mapState({
    count: state => state.carts.length,
    carts: 'carts'
  }),
};
</script>


