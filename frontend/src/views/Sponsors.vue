<template>
  <div v-if="sponsors3">
    <div v-if="sponsors1.sponsors.length > 0" class="mt-5">
      <div class="text-4xl border-b text-wemotion-purple border-green-700">Hauptsponsoren</div>
      <div class="flex mt-5 gap-5 flex-wrap">
        <SponsorCard
          v-for="(sponsor, index) in sponsors1.sponsors"
          :key="index"
          :sponsor="sponsor"
          class="w-96 h-96"
          :hw="96" />
      </div>
    </div>
    <div v-if="sponsors2.sponsors.length > 0" class="mt-5">
      <div class="text-4xl border-b text-wemotion-purple border-green-700">CO-Sponsoren</div>
      <div class="flex mt-5 gap-5 flex-wrap">
        <SponsorCard
          v-for="(sponsor, index) in sponsors2.sponsors"
          :key="index"
          :sponsor="sponsor"
          class="w-72 h-72"
          :hw="72" />
      </div>
    </div>
    <div v-if="sponsors3.sponsors.length > 0" class="mt-5">
      <div class="text-4xl border-b text-wemotion-purple border-green-700">Werbesponsoren</div>
      <div class="flex mt-5 gap-5 flex-wrap">
        <SponsorCard
          v-for="(sponsor, index) in sponsors3.sponsors"
          :key="index"
          :sponsor="sponsor"
          class="w-60 h-60"
          :hw="60" />
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
