<script setup>
import { computed, ref } from 'vue'

import { mapQrToQritter } from '~utils'

import CodeScanner from '~components/CodeScanner.vue'

const isScanning = ref(false);
const scannedQritter = ref(false);

function toggleScanner(shouldScan) {
  isScanning.value = shouldScan ?? !isScanning.value;
}

async function handleScan(data) {
  toggleScanner(false);
  const qritter = await mapQrToQritter(data);
  console.log('scanned:', qritter);
  scannedQritter.value = qritter;
}

const buttonMessage = computed(() => {
  if (isScanning.value) {
    return 'Stop Scanner';
  }
  return scannedQritter.value ? 'Scan Again' : 'Start Scanner';
});

const qritter = computed(() => {
  if (typeof scannedQritter.value !== 'object') {
    return null;
  }
  return {
    ...scannedQritter.value,
    img: `images/qritters/${scannedQritter.value.img}`,
  };
});
</script>

<template>
  <h1>QRitters</h1>

  <div class="scanner">
    <button @click="toggleScanner">{{ buttonMessage }}</button>
    <CodeScanner @scan="handleScan" v-if="isScanning" />
  </div>

  <div v-if="!isScanning && qritter" class="qritter">
    <img :src="qritter.img" />
    <h2>{{ qritter.name }}</h2>
    <p>{{ qritter.description }}</p>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
}

.qritter {
  text-align: center;
  margin-top: 20px;
}

.qritter img {
  width: 100%;
  max-width: 50%;
  height: auto;
  border-radius: 10px;
}

.qritter h2 {
  margin-top: 10px;
  font-size: 24px;
}

.qritter p {
  margin-top: 10px;
  font-size: 16px;
}
</style>
