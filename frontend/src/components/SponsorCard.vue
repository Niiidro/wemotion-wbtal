<template>
  <a :href="sponsor.link">
    <div class="h-full w-full border border-green-700 flex shadow-lg">
      <img
        :src="`https://directus.wemotion-wbtal.ch/assets/${sponsor.logo.id}`"
        class="m-auto p-1 object-contain"
        :class="`w-${hw} h-${hw}`" /></div
  ></a>
</template>

<script setup lang="ts">
const props = defineProps({
  sponsor: { type: Object, required: true },
  hw: { type: Number, required: true },
});
</script>
