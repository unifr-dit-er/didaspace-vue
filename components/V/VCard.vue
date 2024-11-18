<script setup lang="ts">
defineProps<{
  title: string,
  description: string
}>()
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <figure>
      <img src="/img/vignette-placeholder.png" alt="" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
      </h2>
      <p>{{ description}}</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Tag 1</div>
        <div class="badge badge-outline">Tag 2</div>
      </div>
    </div>
  </div>
</template>