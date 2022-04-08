<template>
  <div class="flex flex-col">
    <img
      :src="`https://directus.wemotion-wbtal.ch/assets/${member.image.id}`"
      class="m-auto object-contain border-2 border-green-700 shadow-lg" />
    <div class="text-3xl text-wemotion-purple text-center">{{ member.name }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  member: { type: Object, required: true },
});
</script>
