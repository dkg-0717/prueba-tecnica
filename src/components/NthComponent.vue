<template>
  <div class="container">
    <h1 class="title">Serie de numeros</h1>
    <input class="nth-input" type="text" v-model="serie">
    <button class="nth-button" @click="calculate">Calcular</button>
    <div class="formula" v-if="formula !== ''">
      <span>Formula </span>{{ formula }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { NTH } from '../utils/nthserie'

let formula = ref('')
const serie = ref('')

const calculate = () => {
  const numbers = [...serie.value.split(',')].map(n => Number(n))
  const nthNumber = new NTH(numbers)
  formula.value = nthNumber.findNthNumber()
}

</script>

<style scoped>
.nth-input {
  padding: 10px;
}

.read-the-docs {
  color: #888;
}
</style>
