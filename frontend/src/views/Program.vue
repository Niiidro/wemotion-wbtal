<template>
  <div v-if="program">
    <div class="mt-5">
      <div class="text-4xl border-b text-wemotion-purple border-green-700">Programm</div>
      <div class="flex mt-5 gap-10 flex-wrap flex-col">
        <div v-for="(item, index) in program.program" :key="index">
          <div class="text-3xl text-green-700 text-center">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from 'villus';

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
