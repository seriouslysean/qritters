<script setup>
import { computed, ref } from 'vue';

import { mapQrToQritter } from '~utils';

import CodeScanner from '~components/CodeScanner.vue';

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
    type: scannedQritter.value.type.singular,
  };
});
</script>

<template>
  <h1>qritters</h1>

  <div class="scanner">
    <button v-if="!isScanning" @click="toggleScanner">{{ buttonMessage }}</button>
    <CodeScanner @scan="handleScan" @stop="handleStop" v-if="isScanning" />
  </div>

  <div v-if="!isScanning && qritter" class="qritter">
    <img :src="qritter.img" />
    <h2>{{ qritter.name }}</h2>
    <h3>{{ qritter.type }}</h3>
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

.qritter h3 {
  border: 1px solid #000;
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
  background: rgba(0, 0, 0, 0.5);
  text-transform: lowercase;
  line-height: 1;
  margin-top: 10px;
}

.qritter p {
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.25em;
}

button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
}
</style>
