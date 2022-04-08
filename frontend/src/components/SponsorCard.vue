<template>
  <a :href="sponsor.link">
    <div>
      <img :src="`https://directus.wemotion-wbtal.ch/assets/${sponsor.logo.id}`" /></div
  ></a>
</template>

<script setup lang="ts">
const props = defineProps({
  sponsor: { type: Object, required: true },
});
</script>
