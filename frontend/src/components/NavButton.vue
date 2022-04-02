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
<style>
.btn {
  position: relative;
  overflow: hidden;
  transition: 0.3s;
}

.btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: 0.65s;
}

.btn:hover:before {
  left: 100%;
}
</style>
