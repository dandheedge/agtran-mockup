<template>
  <div>
    <section class="container mx-auto sm:my-8 lg:my-24">
      <div class="flex flex-wrap p-6">
        <div class="sm:w-full md:w-1/2 lg:pr-6">
          <h2 class="text-white font-headline font-bold text-3xl">Instantly rent cars near you</h2>
          <Forms />
        </div>
        <div class="hidden md:block md:w-1/2 p-4 lg:p-10 self-end">
          <img src="@/assets/illustration.png" class="w-full">
        </div>
      </div>
    </section>
    <Promotion />
  </div>
</template>
<script>
import Forms from "@/components/Forms"
import Promotion from "@/components/Promotion"
export default {
  name: 'TailwindComponent',
  components: {
    Forms,
    Promotion
  },
  data () {
    return {
      msg: 'Check Tailwind Page',
    }
  }
};
</script>

