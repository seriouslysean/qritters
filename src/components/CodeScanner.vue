<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import QrScanner from 'qr-scanner';

const emit = defineEmits(['scan', 'stop']);

const videoRef = ref(null);
const qrScanner = ref(null);

function stopScanner() {
  qrScanner.value.stop();
  emit('stop');
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
  <div class="code-scanner">
    <div class="reticle">
      <div class="reticle-top"></div>
      <div class="reticle-bottom"></div>
    </div>

    <video ref="videoRef"></video>

    <button @click="stopScanner">Stop</button>
  </div>
</template>

<style scoped lang="scss">
.code-scanner {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  line-height: 0;
  overflow: hidden;
}

.reticle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 66.67vw;
  height: 66.67vw;
  max-height: 66.67vh;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  z-index: 10;

  .reticle-top::before,
  .reticle-top::after,
  .reticle-bottom::before,
  .reticle-bottom::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 6px solid rgba(255, 255, 0, 0.7);
  }

  .reticle-top::before {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }

  .reticle-top::after {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
  }

  .reticle-bottom::before {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
  }

  .reticle-bottom::after {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }
}

video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
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

<style>
/* qr-scanner overrides */
.scan-region-highlight,
.scan-region-highlight-svg,
.code-outline-highlight {
  display: none !important;
}
</style>
