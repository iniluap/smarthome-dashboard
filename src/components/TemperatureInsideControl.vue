<script setup lang="ts">
import { ref } from "vue";
const temperatureInside = ref(23);
const maxTemperature = 30;
const minTemperature = 18;
let thermometerIndicator = 55;

function increaseTemperature() {
  if (temperatureInside.value !== maxTemperature) {
    temperatureInside.value++;
    updateThermometer(5);
  } else {
    temperatureInside.value;
  }
}

function decreaseTemperature() {
  if (temperatureInside.value !== minTemperature) {
    temperatureInside.value--;
    updateThermometer(-5);
  } else {
    temperatureInside.value;
  }
}

function updateThermometer(valueToChange: number): void {
  const root = document.documentElement;
  thermometerIndicator = thermometerIndicator - valueToChange;
  root.style.setProperty(
    "--temperature-control-height",
    `${thermometerIndicator}%`
  );
}
</script>

<template>
  <section class="box">
    <h3>Temperature inside</h3>
    <div class="temperature-control">
      <button class="control-button increase" @click="increaseTemperature">
        +
      </button>
      <p class="temperature">{{ temperatureInside }}&#176;C</p>
      <button class="control-button decrease" @click="decreaseTemperature">
        -
      </button>
    </div>
  </section>
</template>

<style scoped>
.temperature-control {
  margin: 0.5rem auto;
  position: relative;
  width: 3.5rem;
  height: 9rem;
  display: grid;
  grid-template-rows: 2rem 1fr 2rem;
  grid-template-areas:
    "increase"
    "temp"
    "decrease";
  background: linear-gradient(to top, var(--color-mint), var(--color-peach));
  background-color: var(--color-background-soft);
  border-radius: 0.5rem;
  overflow: hidden;
  text-align: center;
}

.temperature-control::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--temperature-control-height);
  background-color: var(--color-background-soft);
  z-index: 1;
}

.control-button {
  border: none;
  position: relative;
  z-index: 2;
}

.control-button.increase {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-color: var(--color-peach);
}

.control-button.decrease {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: var(--color-mint);
}

.temperature {
  align-self: center;
  font-weight: bold;
  z-index: 2;
}
</style>
