<script setup lang="ts">
defineProps<{
  url: string
  title?: string,
  description?: string
}>()
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <figure class="w-full">
      <iframe class="w-full aspect-video" :src="url" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </figure>
    <div class="card-body">
      <h2 v-if="title" class="card-title">{{ title }}</h2>
      <div v-if="description" v-html="description"></div>
    </div>
  </div>
</template>