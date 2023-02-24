<template>
  <div>
    <CartsLits/>
    <CreateForm/>
    <div class="flex h-28 items-center mt-10  bg-sky-500 ">
      <div class="ml-6">
        <div class=" md:flex ">
          <p class="text-lg font-serif">Drag and drop</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartsLits from "@/components/CartsLits";
import CreateForm from "@/components/CreateForm";

export default {
  components: {
    CreateForm,
    CartsLits
  }
}
</script>