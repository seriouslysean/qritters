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
    aspects: scannedQritter.value.aspects.map(({ singular }) => singular),
  };
});
</script>

<template>
  <h1>qritters</h1>

  <CodeScanner @scan="handleScan" @stop="handleStop" v-if="isScanning" />

  <div v-if="!isScanning && qritter" class="qritter">
    <img :src="qritter.img" class="image" />
    <h2 class="name">{{ qritter.name }}</h2>
    <ul class="aspects">
      <li v-for="aspect in qritter.aspects" :key="aspect" class="aspect">
        {{ aspect }}
      </li>
    </ul>

    <p class="description">{{ qritter.description }}</p>
  </div>

  <div class="controls">
    <button v-if="!isScanning" @click="toggleScanner">{{ buttonMessage }}</button>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 0.5em;
}

.qritter {
  text-align: center;
  margin-top: 1em;
}

.image {
  width: 100%;
  max-width: 50%;
  height: auto;
  border-radius: 10px;
}

.name {
  font-size: 24px;
  margin-bottom: 0.5em;
}

.aspects {
  padding: 0 2em 1em;
}

.aspect {
  border: 1px solid #000;
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
  background: rgba(0, 0, 0, 0.5);
  text-transform: lowercase;
  line-height: 1;
}

.description {
  padding: 0 2em 1em;
  font-size: 16px;
  line-height: 1.5em;
}

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
