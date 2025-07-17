<script lang="ts" setup>
const switchLocalePath = useSwitchLocalePath()

const langs = [
{ id: "fr", title: "Français" },
{ id: "de", title: "Deutsch" }
]
</script>

<template>
  <div>
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
      <Icon name="tabler:language" size="24px" />
    </div>
    <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow">
      <li v-for="lang in langs" :key="lang.id">
        <NuxtLink :to="switchLocalePath(lang.id as 'fr' | 'de')">
          <img class="w-6 rounded" :src="`/img/${lang.id}.svg`" alt="" /> {{ lang.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>