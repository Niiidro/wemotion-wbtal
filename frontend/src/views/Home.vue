<template>
  <div>
    <Card>
      <div>Wemotion – musicularium</div>
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
      text
    }
  }
`,
});
</script>
