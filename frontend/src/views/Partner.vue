<template>
  <div v-if="partner">
    <div class="mt-5">
      <div class="text-4xl border-b text-wemotion-purple border-green-700">Partner</div>
      <div class="flex mt-5 gap-5 flex-wrap">
        <PartnerCard v-for="(item, index) in partner.partner" :key="index" :partner="item" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from 'villus';
import PartnerCard from '../components/PartnerCard.vue';

const { data: partner } = useQuery({
  query: `{
  partner {
    id
    title
    image {
      id
    }
    link
  }
}
`,
});
</script>
