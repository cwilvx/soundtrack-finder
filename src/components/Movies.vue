<template>
  <div v-for="m in movies" :key="m.id">
    {{ m.title }}
  </div>
</template>
<script setup lang="ts">
import { Movie } from "../interfaces";

defineProps<{
  movies: Movie[];
}>();
</script>
