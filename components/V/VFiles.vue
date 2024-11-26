<script setup lang="ts">
import type { File } from "@/types/file"

defineProps<{
  title: string,
  files?: File[]
}>()
</script>

<template>
  <ul class="menu bg-base-100 rounded-box">
    <li class="menu-title">{{ title }}</li>
    <li v-for="file in files">
      <NuxtLink :to="file.url">
        <Icon name="tabler:link" size="24px" />
        {{ file.title }}
      </NuxtLink>
    </li>
  </ul>
</template>