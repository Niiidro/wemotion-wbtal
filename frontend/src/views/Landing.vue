<template>
  <div class="bg-wemotion bg-cover w-full h-screen">
    <div class="flex justify-center h-full">
      <div class="m-auto pt-40">
        <div class="text-4xl mb-10 text-wemotion-purple">22. | 23. | 24. September 2022</div>
        <button
          class="p-2 m-auto text-xl text-white rounded-md shadow-md bg-wemotion-purple btn"
          @click="$router.push('home')">
          Zum Event<i class="fa-solid fa-arrow-right animate-bounce-r ml-5"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
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
