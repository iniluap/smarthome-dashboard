<script setup lang="ts">
import { ref } from "vue";
const lightIntensity = ref(80);
const maxLight = 100;
const minLight = 0;

function increaseLight(): void {
  if (lightIntensity.value !== maxLight) {
    lightIntensity.value++;
    updateLightIntense(lightIntensity.value);
  } else {
    lightIntensity.value;
  }
}

function decreaseLight(): void {
  if (lightIntensity.value !== minLight) {
    lightIntensity.value--;
    updateLightIntense(lightIntensity.value);
  } else {
    lightIntensity.value;
  }
}

function updateLightIntense(valueToChange: number): void {
  const root = document.documentElement;
  root.style.setProperty("--light-control-width", `${valueToChange}%`);
}
</script>

<template>
  <section class="box">
    <h3>Light intensity</h3>
    <div class="light-control">
      <button class="control-button decrease" @click="decreaseLight">-</button>
      <p class="light-intensity">{{ lightIntensity }}%</p>
      <button class="control-button increase" @click="increaseLight">+</button>
    </div>
  </section>
</template>

<style scoped>
.light-control {
  margin: 3rem auto auto;
  position: relative;
  width: 100%;
  height: 3.5rem;
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  grid-template-areas: "decrease light increase";
  background: linear-gradient(to right, var(--vt-c-indigo), var(--color-mint));
  border-radius: 0.5rem;
  overflow: hidden;
  text-align: center;
}

.light-control::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: calc(100% - var(--light-control-width));
  background-color: var(--vt-c-black-mute);
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
  background-color: var(--color-mint);
}

.control-button.decrease {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: var(--vt-c-indigo);
  color: var(--vt-c-white-soft);
}

.light-intensity {
  align-self: center;
  color: var(--vt-c-white-soft);
  font-weight: bold;
  z-index: 2;
}
</style>
