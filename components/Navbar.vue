<script setup lang="ts">
const localePath = useLocalePath()
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
        <!-- <VLangSwitcher /> -->
      </div>
    </div>
  </div>
</template>