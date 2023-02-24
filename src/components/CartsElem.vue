<template>
  <div class="relative">

    <div class="flex-col bg-neutral-100 mx-10 content-center md:h-96 w-64 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 mt-5 sm:h-64">
      <div class="mt-4 ml-9">
        <p class="text-sm  font-serif text-gray-500 ">
          {{carts.title}}
        </p>
        <p class="text-sm mt-6  font-serif text-gray-500 ">
          {{carts.description}}
        </p>
      </div>
      <div class="absolute bottom-0 mb-4 ml-2">
        <router-link :to="/cart/ + carts.id"  class="border border-black rounded-lg font-serif bg-white px-8 py-2 mt-4 ml-11 ">изменить</router-link>
        <button class="rounded-full w-10 h-10 bg-amber-500 ml-2" v-on:click="$emit('remove-carts', carts.id)">X</button>
      </div>


    </div>


  </div>
</template>

<script>

export default {
  props:{
    carts:{
      type:Object
    }
  },
}

</script>
<style>
.elem{
  height: 100px;
  width:400px;
  padding: .5em 2em;
  margin-bottom: 1em;
  border:1px solid #ccc;
}
li{
  display: flex;

}
.pozition{
  float: right;
}
.rm{
  background: red;
  color:#fff;
  border-radius: 50%;
  font-weight: bold;
  border-color:#ffffff;
}
</style>