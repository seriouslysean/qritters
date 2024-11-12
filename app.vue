<template>
  <div class="app">
    <NuxtRouteAnnouncer />

    <h1><NuxtLink to="/">qritters</NuxtLink></h1>
    <NuxtPage />
  </div>
</template>

<style scoped>
.app {
    width: 100%;
    max-width: clamp(600px, 40vw, 100%);
    margin: 0 auto;
    text-align: center;
}

h1 {
  text-align: center;
  margin: 0.5em;
}

h1 a {
  text-decoration: none;
}
</style>
