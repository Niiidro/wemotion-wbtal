<template>
  <div class="h-screen">
    <img src="./assets/wemotion_logo.svg" class="w-1/2 m-auto my-20" />
    <div class="text-4xl text-center mb-20">22.|23.|24. September 2022</div>
    <Countdown
      class="w-1/2 mx-auto"
      :labels="labels"
      deadline="2022-09-22 19:00:00"
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
//@ts-ignore
import { Countdown } from "vue3-flip-countdown";

const labels = {
  days: "Tage",
  hours: "Stunden",
  minutes: "Minuten",
  seconds: "Sekunden",
};
</script>
