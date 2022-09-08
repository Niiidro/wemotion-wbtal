<template>
  <div v-if="media">
    <div class="mt-5">
      <div class="text-4xl border-b text-wemotion-purple border-green-700 text-center">Medien</div>
      <div class="flex mt-5 gap-5 flex-wrap flex-col">
        <div v-for="(item, index) in media.medien" :key="index">
          <a v-if="item.file" :href="`https://directus.wemotion-wbtal.ch/assets/${item.file.id}`" target="_blank">
            <div class="text-2xl text-green-700 hover:text-green-500 underline text-center">{{ item.title }}</div>
          </a>
          <a v-else-if="item.link" :href="item.link" target="_blank">
            <div class="text-2xl text-green-700 hover:text-green-500 underline text-center">{{ item.title }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from 'villus';

const { data: media } = useQuery({
  query: `{
  medien {
    id
    title
    file {
      id
    }
    link
  }
}
`,
});
</script>
