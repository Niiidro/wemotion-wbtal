<template>
  <div v-if="program">
    <div class="mt-5">
      <div class="text-4xl border-b text-wemotion-purple border-green-700">Programm</div>
      <div class="grid grid-cols-2 gap-10 mt-10">
        <div class="w-full mb-10">
          <div class="m-auto text-3xl text-center text-wemotion-purple">
            {{ moderation.title }}
          </div>
          <div class="h-full w-full flex border border-green-700 shadow-lg">
            <img
              v-if="moderation.image"
              :src="`https://directus.wemotion-wbtal.ch/assets/${moderation.image.id}`"
              class="m-auto p-1 object-contain h-full" />
          </div>
        </div>
        <template class="flex flex-col gap-10">
          <ProgramCard v-for="(item, index) in program.program" :key="index" :program="item"
        /></template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from 'villus';
import { computed } from 'vue';
import ProgramCard from '../components/ProgramCard.vue';

const { data: program } = useQuery({
  query: `{
  program {
    id
    sort
    time
    title
    description
    image {
      id
    }
  }
}
`,
});

const moderation = computed(() => {
  return program.value.program.find((program: any) => program.sort === 1);
});
</script>
