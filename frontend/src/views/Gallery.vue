<template>
  <div class="flex" v-if="gallery">
    <Image v-for="(image, index) in gallery.gallery_by_id.images" :key="index" :image="image" />
  </div>
</template>
<script setup lang="ts">
import Image from '../components/Image.vue';
import { useQuery } from 'villus';

const { data: gallery } = useQuery({
  query: `{
  gallery_by_id(id: 1) {
    id
    images{
      id,
      directus_files_id {
      id
    }
    }
  }
}
`,
});
</script>
