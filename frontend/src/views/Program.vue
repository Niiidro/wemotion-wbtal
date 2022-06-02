<template>
  <div v-if="program">
    <div class="mt-5">
      <div class="text-4xl border-b text-wemotion-purple border-green-700">Programm</div>
      <div class="flex mt-5 gap-10 flex-col">
        <ProgramCard v-for="(item, index) in program.program" :key="index" :program="item" class="odd:ml-auto" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from 'villus';
import ProgramCard from '../components/ProgramCard.vue';

const { data: program } = useQuery({
  query: `{
  program {
    id
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
</script>
