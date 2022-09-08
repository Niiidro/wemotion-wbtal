<template>
  <div v-if="program.sort > 1">
    <div class="m-auto text-2xl text-center text-wemotion-purple">
      {{ program.title }}
    </div>
    <div class="h-full w-full flex border border-green-700 shadow-lg">
      <img
        v-if="program.image"
        :src="`https://directus.wemotion-wbtal.ch/assets/${program.image.id}`"
        class="m-auto p-1 object-contain w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  program: { type: Object, required: true },
});
</script>
