<template>
  <img
    :src="`https://directus.wemotion-wbtal.ch/assets/${image.directus_files_id.id}`"
    class="p-1 object-contain w-80 h-80" />
</template>

<script setup lang="ts">
const props = defineProps({
  image: Object,
});
</script>
