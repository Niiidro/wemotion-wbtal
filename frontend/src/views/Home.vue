<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20" v-if="data">
    <Card class="bg-green-700 text-white shadow-xl" v-for="(card, index) in data.cards" :key="index">
      <div class="text-2xl mb-5">{{ card.title }}</div>
      <div class="whitespace-pre-wrap">{{ card.content }}</div>
    </Card>
  </div>
</template>
<script setup lang="ts">
import Card from '@/components/Card.vue';
import { useQuery } from 'villus';

const { data } = useQuery({
  query: `{
    cards(filter: { page: { _eq: "home" } }) {
      id
      page
      title
      content
    }
  }
`,
});
</script>
