<template>
  <nav class="h-14 xl:h-16 2xl:h-20 shadow-2xl flex justify-between">
    <div>
      <NavButton v-for="(menu, index) in menuLeft" :key="index" :menu="menu" />
    </div>
    <img
      src="https://directus.wemotion-wbtal.ch/assets/0d3f24ec-d502-452b-8d82-842631baa5de"
      class="h-12 xl:h-14 2xl:h-16 pt-2" />

    <div>
      <NavButton v-for="(menu, index) in menuRight" :key="index" :menu="menu" />
    </div>
  </nav>
  <main class="h-screen mx-10">
    <router-view />
  </main>
</template>
<script setup lang="ts">
import NavButton from '../components/NavButton.vue';

const menuLeft = [
  { label: 'Home', to: '/home' },
  { label: 'Programm', to: '/program' },
  { label: 'Sponsoren', to: '/sponsors' },
];
const menuRight = [
  { label: 'Tickets', to: '/tickets' },
  { label: 'Team', to: '/team' },
  { label: 'Kontakt', to: '/contact' },
];
</script>
