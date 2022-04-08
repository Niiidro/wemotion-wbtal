<template>
  <div class="flex flex-wrap gap-10 mt-10" v-if="data">
    <TeamCard v-for="(member, index) in data.team" :key="index" :member="member" />
  </div>
</template>
<script setup lang="ts">
import { useQuery } from 'villus';
import TeamCard from '../components/TeamCard.vue';

const { data } = useQuery({
  query: `{
  team{
    id
    name
    function
    image {
      id
    }
  }
}
`,
});
</script>
