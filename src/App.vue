<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <h1><RouterLink to="/">qritters</RouterLink></h1>

  <RouterView />
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 0.5em;
}

h1 a {
  text-decoration: none;
}
</style>
