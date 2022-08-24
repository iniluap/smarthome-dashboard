<script setup lang="ts">
import { ref } from "vue";
const airHumidity = ref(45);
const maxHumidity = 50;
const minHumidity = 30;
const humidityIndicatorStep = 3;
let humidityIndicator = 35;

function increaseHumidity(): void {
  if (airHumidity.value !== maxHumidity) {
    airHumidity.value++;
    updateHumidity(humidityIndicatorStep);
  } else {
    airHumidity.value;
  }
}

function decreaseHumidity(): void {
  if (airHumidity.value !== minHumidity) {
    airHumidity.value--;
    updateHumidity(-humidityIndicatorStep);
  } else {
    airHumidity.value;
  }
}

function updateHumidity(valueToChange: number): void {
  const root = document.documentElement;
  humidityIndicator = humidityIndicator - valueToChange;
  root.style.setProperty("--humidity-control-height", `${humidityIndicator}%`);
}
</script>

<template>
  <section class="box">
    <h3>Humidity</h3>
    <div class="control control-vertical">
      <button class="control-button increase" @click="increaseHumidity">
        +
      </button>
      <p class="control-value">{{ airHumidity }}%</p>
      <button class="control-button decrease" @click="decreaseHumidity">
        -
      </button>
    </div>
  </section>
</template>

<style scoped>
.control {
  background: linear-gradient(to top, var(--color-mustard), var(--color-sage));
}

.control::after {
  left: 0;
  width: 100%;
  height: var(--humidity-control-height);
  background-color: var(--color-background-soft);
  transition: var(--transition);
}

.control-button.increase {
  background-color: var(--color-sage);
}

.control-button.decrease {
  background-color: var(--color-mustard);
}
</style>
