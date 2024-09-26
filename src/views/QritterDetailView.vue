<script setup>
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

import { getQritterBySlug } from '~utils/qritters';
import QritterDetails from '~components/QritterDetails.vue';

// Get the route object
const route = useRoute();

// Extract the slug from the URL parameters
const slug = computed(() => route.params.slug);

// Get the qritter by slug
const qritter = computed(() => getQritterBySlug(slug.value));
</script>

<template>
  <RouterLink to="/codex">Back to Codex</RouterLink>

  <QritterDetails v-if="qritter" :qritter="qritter" />
  <p v-else>Qritter not found.</p>
</template>

<style scoped>
</style>
