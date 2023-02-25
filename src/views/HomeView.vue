<template>
  <div>
    <DragDrop class="grid justify-center"/>
    <CartsLits/>
    <div class="flex h-24 w-full items-center mt-10  bg-sky-500 ">
      <div class="ml-6">
        <div class=" md:flex flex-row ">
          <p class="text-lg font-serif">Топ 5 фильмов по версии API </p>
        </div>
      </div>
    </div>
    <FilmShowList class="mt-28"/>
    <footer class="p-4 w-full bg-white mt-28 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span
          class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Marko Kovachevich тестовое задание .</span>
    </footer>
  </div>
</template>
<script>
import CartsLits from "@/components/CartsLits";
import DragDrop from "@/components/DragDrop";
import FilmShowList from "@/components/FilmShowList";

export default {
  components: {
    CartsLits,
    DragDrop,
    FilmShowList
  }
}
</script>