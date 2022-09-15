<template>
  <div class="topbar">
    {{ queryInjection?.query.value }}
    <input type="search" @input="handleUpdate" />
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import injectionType from "./injection.type";

const queryInjection = inject(injectionType);

function handleUpdate(e: Event) {
  const input = e.target as HTMLInputElement;

  queryInjection?.updateInput(input.value);
}
</script>
