<script setup lang="ts">
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const langs = [
  { id: "fr", title: "Français" },
  { id: "de", title: "Deutsch" }
]
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <img class="w-12 hidden lg:block" src="/img/unifr-logo.png" alt="Unifr logo" />
      <img class="w-28 hidden lg:block" src="/img/hesso-logo.png" alt="Hes so logo" />
    </div>
    <div class="navbar-center">
      <NuxtLink :to="localePath('/')" class="btn btn-ghost text-2xl">DidaSpace<span class="hidden md:inline"> : Espace pédagogique du supérieur</span></NuxtLink>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
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
    </div>
  </div>
</template>