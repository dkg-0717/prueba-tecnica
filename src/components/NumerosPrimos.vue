<template>
  <div class="container">
    <h1 class="title">Números primos</h1>
    <input class="primo-input" type="text" v-model="inputValue">
    <button @click="generate">Generar</button>
    <div class="grid-container">
      <div class="item animation" v-for="i in numerosPrimos">
        {{ i }}
      </div>
    </div>
    <p class="multiplos-txt" v-show="multiplos.length > 0">Multiplos de 3</p>
    <div class="grid-container" v-show="multiplos.length > 0">
      <div class="item" v-for="m in multiplos">
        {{ m }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Primo } from '../utils/isPrimo'

let inputValue = ref(0)
const primo = new Primo()
let numerosPrimos = ref([])
let multiplos = ref([])

const generate = () => {
  numerosPrimos.value.length = 0
  const numbers = primo.generateNumbers(Number(inputValue.value))
  numerosPrimos.value = numbers
  console.log(primo.getMultiplo())
  multiplos.value = primo.getMultiplo()
}
</script>

<style>
.multiplos-txt {
  text-align: left;
}

.primo-input {
  padding: 10px;
}

.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.item {
  color: #fff;
  height: 40px;
  width: 100%;
  font-size: 17px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #fff;
}

.animation {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0% {
    scale: 0;
  }

  100% {
    scale: 1;
  }
}
</style>