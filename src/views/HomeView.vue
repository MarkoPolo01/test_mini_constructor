<template>
  <div>
    <DragDrop class="grid justify-center"/>
    <div class="flex h-24 items-center mt-10  bg-sky-500 ">
      <div class="ml-6">
        <div class=" md:flex ">
          <p class="text-lg font-serif">Рекомендации</p>
        </div>
      </div>
    </div>
    <CreateForm class=" ml-9 w-80 mt-4"/>
    <CartsLits/>
    <div class="flex h-24 items-center mt-10  bg-sky-500 ">
      <div class="ml-6">
        <div class=" md:flex ">
          <p class="text-lg font-serif">Популярные фильмы по версии API</p>
        </div>
      </div>
    </div>
    <FilmShowList/>
  </div>
</template>
<script>
import CartsLits from "@/components/CartsLits";
import CreateForm from "@/components/CreateForm";
import DragDrop from "@/components/DragDrop";
import FilmShowList from "@/components/FilmShowList";

export default {
  components: {
    CreateForm,
    CartsLits,
    DragDrop,
    FilmShowList
  }
}
</script>