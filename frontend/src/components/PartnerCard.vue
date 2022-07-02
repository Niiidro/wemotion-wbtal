<template>
  <a :href="partner.link" class="w-96 h-96 mb-10">
    <div class="h-96 w-full flex border border-green-700 shadow-lg">
      <img
        v-if="partner.image"
        :src="`https://directus.wemotion-wbtal.ch/assets/${partner.image.id}`"
        class="m-auto p-1 object-contain w-96 h-96" />
    </div>
    <div class="m-auto text-2xl text-center text-wemotion-purple">{{ partner.title }}</div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  partner: { type: Object, required: true },
});
</script>
