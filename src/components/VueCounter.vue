<script setup>
import { ref } from 'vue';

defineProps({
  title: String,
});

const count = ref(0);
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="space-x-4">
      <button @click="count--" class="px-4 py-2 bg-blue-500 text-white">
        -
      </button>
      <button @click="count++" class="px-4 py-2 bg-blue-500 text-white">
        +
      </button>
      <span>{{ count }}</span>
    </div>
  </div>
</template>
