<script setup lang="ts">
import VCard from '~/components/V/VCard.vue';
import VSearch from '~/components/V/VSearch.vue';
</script>

<template>
  <div class="container mx-auto px-4 pt-20 min-h-screen">
    <div class="my-8">
      <VSearch />
    </div>
    <div class="grid grid-cols-3 gap-4">
      <VCard title="Sujet 1" description="Description du sujet" />
      <VCard title="Débusquer le passager clandestin" description="Description du sujet" />
      <VCard title="Concevoir des Quizzes avec l'IA" description="Description du sujet" />
      <VCard title="Evaluer avec l'IA" description="Description du sujet" />
      <VCard title="Détecter le plagiat" description="Description du sujet" />
    </div>
  </div>
</template>