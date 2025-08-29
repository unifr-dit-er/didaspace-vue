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
  <div tabindex="0" class="bg-base-200 flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>