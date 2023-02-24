<template>
  <div id="app">
    <header class="flex h-28 items-center justify-between bg-sky-500 ">
      <div class=" flex order-1 ml-3.5 w-70 items-center">

        <div class="ml-6">
          <div class="hidden md:flex">
            <p class="text-lg font-serif">Мини конструктор</p>
          </div>
        </div>
      </div>

      <nav class="md:flex order-last">
        <ul class="md:inline-flex block">
          <li class=" ml-9 mr-12 font-serif text-lg" v-for="header in headers" :key="header.name">
            <router-link :to="header.to">{{ header.name }}</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [{
        to: "/",
        name: "Главная"
      },
        {
          to: "/create",
          name: "Создать"
        }
      ],
    }
  }
}

</script>
<style>
header {

  height: 100%;
}
body{
  background-color: rgb(221 214 254);
}

</style>
