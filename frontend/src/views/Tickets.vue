<template>
  <div class="flex justify-center h-screen">
    <div class="text-5xl text-center my-auto" v-if="dayjs().isBefore(dayjs('2022-08-15T18:00'))">
      Tickets verfügbar ab: 15. August 2022 - 18:00 Uhr
    </div>
    <div v-else class="m-auto flex flex-col gap-10">
      <Card class="bg-green-700 text-white shadow-xl">
        <div class="whitespace-pre-wrap">
          Unsere Tickets verkaufen wir über Eventfrog. Über den untenstehenden Button gelangt man direkt auf die Seite
          für den Ticketverkauf.
          {{ dayjs('2022-08-15T18:00').format('DD.MM.YYYY - HH:mm') }}
        </div></Card
      >
      <div class="flex m-auto gap-20 text-xl">
        <div>
          <div class="font-bold text-center mb-2">Donnerstag, 22.09.22</div>
          <iframe
            src="https://embed.eventfrog.ch/de/embed/button-buy.html?eventId=6891005664903537904"
            frameborder="0"
            scrolling="no"
            width="217px"></iframe>
        </div>
        <div>
          <div class="font-bold text-center mb-2">Freitag, 23.09.22</div>
          <iframe
            src="https://embed.eventfrog.ch/de/embed/button-buy.html?eventId=6964625615119867526"
            frameborder="0"
            scrolling="no"
            width="217px"></iframe>
        </div>
        <div>
          <div class="font-bold text-center mb-2">Samstag 24.09.22</div>
          <iframe
            src="https://embed.eventfrog.ch/de/embed/button-buy.html?eventId=6964625678361584020"
            frameborder="0"
            scrolling="no"
            width="217px"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Card from '../components/Card.vue';
import dayjs from 'dayjs';
</script>
