<template>
  <div class="flex justify-center h-screen">
    <div class="m-auto flex flex-col gap-10">
      <Card class="bg-green-700 text-white shadow-xl">
        <div class="whitespace-pre-wrap">
          Unsere Tickets verkaufen wir über Eventfrog. Über den untenstehenden Button gelangt man direkt auf die Seite
          für den Ticketverkauf.
        </div></Card
      >
      <div class="flex justify-center">
        <a
          href="https://eventfrog.ch/de/p/gruppen/wemotion-2022-6967522686416118347.html"
          class="h-10 bg-green-600 rounded-md flex px-2 py-1 hover:shadow-xl"
          ><div class="m-auto text-white text-xl">Tickets kaufen</div></a
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Card from '../components/Card.vue';
import dayjs from 'dayjs';
</script>
