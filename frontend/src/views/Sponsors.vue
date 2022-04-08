<template>
  <div>
    <div v-if="sponsors1.sponsors.length > 0">
      <div class="text-4xl">Hauptsponsoren</div>
      <div class="flex">
        <SponsorCard v-for="(sponsor, index) in sponsors1.sponsors" :key="index" :sponsor="sponsor" class="w-60 h-60" />
      </div>
    </div>
    <div v-if="sponsors2.sponsors.length > 0">
      <div class="text-4xl">CO-Sponsoren</div>
      <div class="flex">
        <SponsorCard v-for="(sponsor, index) in sponsors2.sponsors" :key="index" :sponsor="sponsor" class="w-60 h-60" />
      </div>
    </div>
    <div v-if="sponsors3.sponsors.length > 0">
      <div class="text-4xl">Werbesponsoren</div>
      <div class="flex">
        <SponsorCard v-for="(sponsor, index) in sponsors3.sponsors" :key="index" :sponsor="sponsor" class="w-60 h-60" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from 'villus';
import SponsorCard from '../components/SponsorCard.vue';

const { data: sponsors1 } = useQuery({
  query: `{
  sponsors(filter: {category: {_eq: "hauptsponsor"}}) {
    id
    category
    logo {
      id
    }
    link
  }
}
`,
});
const { data: sponsors2 } = useQuery({
  query: `{
  sponsors(filter: {category: {_eq: "co-sponsor"}}) {
    id
    category
    logo {
      id
    }
    link
  }
}
`,
});
const { data: sponsors3 } = useQuery({
  query: `{
  sponsors(filter: {category: {_eq: "werbesponsor"}}) {
    id
    category
    logo {
      id
    }
    link
  }
}
`,
});
</script>
