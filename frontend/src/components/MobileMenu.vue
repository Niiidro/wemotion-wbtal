<template>
  <nav class="h-14 xl:h-16 shadow-2xl justify-between flex lg:hidden">
    <button class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white my-auto" @click="open = !open">
      <span class="sr-only">Open main menu</span>
      <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
          :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"></span>
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
          :class="{ 'opacity-0': open }"></span>
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
          :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"></span>
      </div>
    </button>
    <img
      src="https://directus.wemotion-wbtal.ch/assets/0d3f24ec-d502-452b-8d82-842631baa5de"
      class="h-12 xl:h-14 pt-2 m-auto" />
  </nav>
  <div
    v-if="open"
    class="z-10 fixed bg-white w-80 h-screen shadow-xl flex flex-col gap-5 p-5 border border-wemotion-purple">
    <button
      v-for="(menu, index) in menuItems"
      :key="index"
      @click="$router.push(menu.to), (open = false)"
      class="w-full hover:bg-green-700 text-green-700 hover:text-white btn">
      <div class="h-full text-xl 2xl:text-2xl px-1 md:px-2 lg:px-4 xl:px-6 2xl:px-8">
        {{ menu.label }}
      </div>
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  menuItems: { type: Array },
});

const open = ref(false);
</script>
<style lang="scss"></style>
