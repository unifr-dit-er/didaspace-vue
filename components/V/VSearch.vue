<script setup lang="ts">
const model = useSearch()
</script>

<template>
  <label class="input input-bordered flex items-center gap-2">
    <input v-model.trim="model" type="text" class="grow" :placeholder="$t('search')" />
    <Icon name="tabler:search" />
  </label>
</template>