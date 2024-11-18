<script setup lang="ts">

useHead({
  title: "MyPTE",
  meta: [
    {
      name: "MyPTE",
      content: "MyPTE"
    }
  ]
})
</script>

<template>
  <div tabindex="0" class="bg-base-200">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>