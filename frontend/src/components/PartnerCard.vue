<template>
  <a :href="partner.link">
    <div class="h-full w-full flex shadow-lg">
      <img
        v-if="partner.image"
        :src="`https://directus.wemotion-wbtal.ch/assets/${partner.image.id}`"
        class="m-auto p-1 object-contain" />
      <div class="m-auto text-2xl">{{ partner.title }}</div>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  partner: { type: Object, required: true },
});
</script>
