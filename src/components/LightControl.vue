<script setup lang="ts">
import { ref } from "vue";
const lightIntensity = ref(90);
const maxLight = 100;
const minLight = 0;

function increaseLight() {
  if (lightIntensity.value !== maxLight) {
    lightIntensity.value++;
  } else {
    lightIntensity.value;
  }
}

function decreaseLight() {
  if (lightIntensity.value !== minLight) {
    lightIntensity.value--;
  } else {
    lightIntensity.value;
  }
}
</script>

<template>
  <section class="box">
    <h3>Light intensity</h3>
    <div class="light-control">
      <button class="control-button decrease" @click="decreaseLight">-</button>
      <p class="light-intensity">{{ lightIntensity }}&#176;C</p>
      <button class="control-button increase" @click="increaseLight">+</button>
    </div>
  </section>
</template>

<style scoped>
.light-control {
  margin: 0.5rem auto;
  position: relative;
  width: 9rem;
  height: 3.5rem;
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  grid-template-areas: "decrease light increase";
  background: linear-gradient(to right, var(--color-mint), var(--vt-c-indigo));
  background-color: var(--color-background-soft);
  border-radius: 0.5rem;
  overflow: hidden;
  text-align: center;
}

.light-control::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--light-control-height);
  background-color: var(--color-background-soft);
  z-index: 1;
}

.control-button {
  border: none;
  position: relative;
  z-index: 2;
}

.control-button.increase {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: var(--vt-c-indigo);
}

.control-button.decrease {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: var(--color-mint);
}

.light-intensity {
  align-self: center;
  font-weight: bold;
  z-index: 2;
}
</style>
