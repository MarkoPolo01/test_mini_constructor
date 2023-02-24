<template>
  <div >
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-1 md:gap-6">
        <div class="mt-5 md:col-span-2 md:mt-0">
          <form @submit.prevent="submit">
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="bg-white px-4 py-5 sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Заголовок</label>
                    <input type="text" name="title" v-model="title"
                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Описание</label>
                    <textarea type="text" name="description" v-model="description"
                              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button type="submit"
                        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Cоздать
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    ...mapMutations(["addCarts"]),
    submit() {
      this.addCarts({
        title: this.title,
        description: this.description,
        id: Date.now()
      });
      this.title = this.description =  "";
      this.$router.push('/')
    }
  }
};
</script>