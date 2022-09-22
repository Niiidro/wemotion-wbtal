<template>
  <button
    @click="$router.push(menu.to)"
    class="h-full text-green-700 text-xl 2xl:text-2xl px-1 md:px-2 lg:px-2 xl:px-4 2xl:px-6 hover:text-white hover:bg-green-700 btn">
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
