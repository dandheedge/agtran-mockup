<template>
  <form class="w-7/8 bg-white p-8 my-4 rounded">
    <div class="flex flex-row flex-wrap">
      <div class="flex flex-row w-full mb-6">
        <div class="relative inline-block text-left">
          <div>
            <span class="rounded-md shadow-sm">
              <button type="button" class="inline-flex justify-center w-full rounded-md border border-secondary-yellow px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-secondary-yellow focus:shadow-outline-secondary-yellow active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true" @click="dropdownClick()">{{ dropdownText }}
                <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
          <transition name="fade" mode="out-in">
            <div v-if="dropdownOpen" class="transition-all ease-out duration-700 origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg">
              <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div class="py-1">
                  <a @click="toggleDropoff(true,'Same drop-off')" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Same drop-off</a>
                  <a @click="toggleDropoff(false,'Different drop-off')" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Different drop-off</a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 w-full">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="pickup">
            From
          </label>
          <input class="appearance-none block w-full bg-white text-gray-700 border border-secondary-yellow rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary-yellow" id="pickup" type="text" placeholder="City, airport, address or hotel">
        </div>
        <div v-if="!sameDropoff" class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="dropoff">
            To
          </label>
          <input class="appearance-none block w-full bg-white text-gray-700 border border-secondary-yellow rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-yellow" id="dropoff" type="text" placeholder="City, airport, address or hotel">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 w-full">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="pickup-date">
            Start
          </label>
          <input class="appearance-none block w-full bg-white text-gray-700 border border-secondary-yellow rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary-yellow" id="pickup-date" type="text" placeholder="Pickup date">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="dropoff-date">
            End
          </label>
          <input class="appearance-none block w-full bg-white text-gray-700 border border-secondary-yellow rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-yellow" id="dropoff-date" type="text" placeholder="Drop-off date">
        </div>
      </div>
      <div class="flex flex-wrap -mx w-full mt-8">
        <button class="-mx-3 w-full bg-alt-blue text-white font-bold py-2 px-4 rounded hover:bg-blue-900">Search</button>
      </div>
    </div>      
  </form>
</template>
<script>
export default {
  name: 'FormsComponent',
  data () {
    return {
      dropdownText: "Same drop-off",
      dropdownOpen: false,
      sameDropoff: true
    }
  },
  methods: {
    dropdownClick() {
      this.dropdownOpen = !this.dropdownOpen
    },
    toggleDropoff(val,text) {
      this.sameDropoff = val
      this.dropdownText = "Different drop-off"
      this.dropdownOpen = !this.dropdownOpen
      return false
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>