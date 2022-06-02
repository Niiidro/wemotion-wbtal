<template>
  <div class="w-1/2 mb-10">
    <div
      class="m-auto text-7xl text-center"
      :class="[program.image ? 'translate-y-20 text-white' : 'text-wemotion-purple']">
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
