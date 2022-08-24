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
    <div class="control control-horizontal">
      <button class="control-button decrease" @click="decreaseLight">-</button>
      <p class="control-value">{{ lightIntensity }}%</p>
      <button class="control-button increase" @click="increaseLight">+</button>
    </div>
  </section>
</template>

<style scoped>
.control {
  background: linear-gradient(to right, var(--vt-c-indigo), var(--color-mint));
}

.control::after {
  right: 0;
  height: 100%;
  width: calc(100% - var(--light-control-width));
  background-color: var(--vt-c-black-mute);
  transition: var(--transition);
}

.control-button.increase {
  background-color: var(--color-mint);
}

.control-button.decrease {
  background-color: var(--vt-c-indigo);
  color: var(--vt-c-white-soft);
}

.control-value {
  color: var(--vt-c-white-soft);
}
</style>
