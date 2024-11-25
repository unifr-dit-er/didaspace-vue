<script setup lang="ts">

useHead({
  title: "DidaSpace",
  meta: [
    {
      name: "DidaSpace",
      content: "DidaSpace"
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