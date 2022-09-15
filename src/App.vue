<template>
  <TopBar />
  <Movies :movies="movies" />
</template>

<script setup lang="ts">
import { onMounted, provide, ref, watch } from "vue";
import { useDebounce } from "@vueuse/core";

import TopBar from "./components/TopBar.vue";
import Movies from "./components/Movies.vue";
import queryInjection from "./components/injection.type";
import searchMovies from "./requests/searchMovies";
import { Movie } from "./interfaces";
import { getAccess } from "./requests/spotify";

const input = ref("");
const query = useDebounce(input, 500);
const movies = ref<Movie[]>([]);

function updateInput(newValue: string) {
  input.value = newValue;
}

provide(queryInjection, {
  query,
  updateInput,
});

watch(query, (value) => {
  searchMovies(query.value).then((res) => {
    movies.value = res.data.results as Movie[];
  });
});

onMounted(() => {
  getAccess();
});
</script>
