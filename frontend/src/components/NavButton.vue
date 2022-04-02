<template>
  <button
    @click="$router.push(menu.to)"
    class="h-full text-wemotion-purple text-3xl px-10 hover:text-white hover:bg-wemotion-purple btn">
    {{ menu.label }}
  </button>
</template>
<script setup lang="ts">
defineProps({
  menu: { type: Object, required: true },
});
</script>
