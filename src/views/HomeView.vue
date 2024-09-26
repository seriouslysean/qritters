<script setup>
import { computed, ref } from 'vue';

import { mapQrToQritter } from '~utils/qritters';

import CodeScanner from '~components/CodeScanner.vue';
import QritterDetails from '~components/QritterDetails.vue';

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

function handleStop() {
  toggleScanner(false);
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
    // TODO support multiple types
    aspects: scannedQritter.value.aspects.map(({ singular }) => singular),
  };
});
</script>

<template>
  <CodeScanner @scan="handleScan" @stop="handleStop" v-if="isScanning" />

  <QritterDetails v-if="!isScanning && qritter" :qritter="qritter" />

  <div class="controls">
    <button v-if="!isScanning" @click="toggleScanner">{{ buttonMessage }}</button>
  </div>
</template>

<style scoped>
.controls {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
}

.controls button {
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
}
</style>
