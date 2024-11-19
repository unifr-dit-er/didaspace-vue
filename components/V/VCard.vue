<script setup lang="ts">
defineProps<{
  title: string,
  description: string
  vignette?: string
  link?: string
  tags?: string[]
}>()
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <figure>
      <img v-if="vignette" :src="vignette" alt="" />
      <img v-else src="/img/vignette-placeholder.png" alt="" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <NuxtLink :to="link ? link : '#'" class="link link-primary decoration-dotted hover:decoration-solid underline-offset-8">
          {{ title }}
        </NuxtLink>
      </h2>
      <div v-if="description" v-html="description"></div>
      <div v-if="tags" class="card-actions justify-end items-center">
        <div class="badge badge-outline">Tag 1</div>
        <div class="badge badge-outline">Tag 2</div>
      </div>
    </div>
  </div>
</template>