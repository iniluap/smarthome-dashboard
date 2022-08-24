<script setup lang="ts">
import { ref } from "vue";
const temperatureInside = ref(23);
const maxTemperature = 30;
const minTemperature = 18;
const thermometerIndicatorStep = 5;
let thermometerIndicator = 55;

function increaseTemperature() {
  if (temperatureInside.value !== maxTemperature) {
    temperatureInside.value++;
    updateThermometer(thermometerIndicatorStep);
  } else {
    temperatureInside.value;
  }
}

function decreaseTemperature() {
  if (temperatureInside.value !== minTemperature) {
    temperatureInside.value--;
    updateThermometer(-thermometerIndicatorStep);
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
    <div class="control control-vertical">
      <button class="control-button increase" @click="increaseTemperature">
        +
      </button>
      <p class="control-value">{{ temperatureInside }}&#176;C</p>
      <button class="control-button decrease" @click="decreaseTemperature">
        -
      </button>
    </div>
  </section>
</template>

<style scoped>
.control {
  background: linear-gradient(to top, var(--color-mint), var(--color-peach));
}

.control::after {
  left: 0;
  width: 100%;
  height: var(--temperature-control-height);
  background-color: var(--color-background-soft);
  transition: var(--transition);
}

.control-button.increase {
  background-color: var(--color-peach);
}

.control-button.decrease {
  background-color: var(--color-mint);
}
</style>
