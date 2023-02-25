<template>
  <div class="relative">

    <div
        class="flex-col bg-neutral-100 mx-10 content-center md:h-96 w-64 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 mt-5 sm:h-64">
      <div class="mt-4 ml-9">
        <p class="text-sm  font-serif text-gray-500 ">
          {{ popular.title }}
        </p>
        <p class="text-sm mt-6  font-serif text-gray-500 ">
          {{ popular.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    popular: {
      type: Object
    }
  },
}

</script>
<style>
.elem {
  height: 100px;
  width: 400px;
  padding: .5em 2em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
}

li {
  display: flex;

}

.pozition {
  float: right;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  border-color: #ffffff;
}
</style>