<script setup>
import { useHead } from 'unhead';
import { computed } from 'vue';

import { getQritters } from '~utils/qritters';

const qritters = computed(() => getQritters());

useHead({
  title: 'Qritters Codex',
});
</script>

<template>
  <ul>
    <li v-for="qritter in qritters" :key="qritter.id">
      <router-link :to="`/codex/${qritter.slug}`">{{ qritter.name }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
li {
  margin: 0 20px 20px;
}
</style>
