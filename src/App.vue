<template>
  <div class="components-container">
    <NthComponent />
    <NumerosPrimos />
  </div>
</template>

<script setup>
import NthComponent from './components/NthComponent.vue'
import NumerosPrimos from './components/NumerosPrimos.vue';
</script>

<style scoped>
.components-container {
  /* max-inline-size: 1500px; */
  inline-size: auto;
  gap: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
