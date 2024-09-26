<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  qritter: {
    type: Object,
    required: true,
  },
});

const formattedQritter = computed(() => {
  if (!props.qritter) {
    return null;
  }
  return {
    ...props.qritter,
    img: `images/qritters/${props.qritter.img}`,
    aspects: props.qritter.aspects.map(({ singular }) => singular),
  };
});
</script>

<template>
  <div v-if="formattedQritter" class="qritter">
    <img :src="formattedQritter.img" class="image" />
    <h2 class="name">{{ formattedQritter.name }}</h2>
    <ul class="aspects">
      <li v-for="aspect in formattedQritter.aspects" :key="aspect" class="aspect">
        {{ aspect }}
      </li>
    </ul>
    <p class="description">{{ formattedQritter.description }}</p>
  </div>
  <p v-else>Qritter not found.</p>
</template>

<style scoped>
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
</style>
