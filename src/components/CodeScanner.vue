<script setup>
import { defineEmits, onBeforeUnmount, onMounted, ref } from 'vue';

import QrScanner from 'qr-scanner';

const emit = defineEmits(['scan']);

const videoRef = ref(null);
const qrScanner = ref(null);

function stopScanner() {
  qrScanner.value.stop();
}

function onDecode(result) {
  if (!result.data) {
    return;
  }
  emit('scan', result.data);
}

function onDecodeError(error) {
  console.error(error);
}

onMounted(() => {
  qrScanner.value = new QrScanner(
    videoRef.value,
    onDecode,
    {
      onDecodeError,
      highlightScanRegion: true,
      highlightCodeOutline: true,
      maxScansPerSecond: 5,
    },
  );
  qrScanner.value.start();
});

onBeforeUnmount(() => {
  stopScanner();
});
</script>

<template>
  <h2>Code Scanner</h2>
  <video id="video" ref="videoRef"></video>
</template>

<style scoped>
#video {
    line-height: 0;
}

#video {
    position: relative;
    width: max-content;
    height: max-content;
    overflow: hidden;
}
#video .scan-region-highlight {
    border-radius: 30px;
    outline: rgba(0, 0, 0, .25) solid 50vmax;
}
#video .scan-region-highlight-svg {
    display: none;
}
#video .code-outline-highlight {
    stroke: rgba(255, 255, 255, .5) !important;
    stroke-width: 15 !important;
    stroke-dasharray: none !important;
}
</style>
