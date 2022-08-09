<script setup lang="ts">
import { ref } from "vue";
const airHumidity = ref(45);
const maxHumidity = 50;
const minHumidity = 30;
let humidityIndicator = 35;

function increaseHumidity(): void {
  if (airHumidity.value !== maxHumidity) {
    airHumidity.value++;
    updateHumidity(3);
  } else {
    airHumidity.value;
  }
}

function decreaseHumidity(): void {
  if (airHumidity.value !== minHumidity) {
    airHumidity.value--;
    updateHumidity(-3);
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
     <div class="humidity-control">
      <button class="control-button increase" @click="increaseHumidity">
        +
      </button>
      <p class="humidity">{{ airHumidity }}%</p>
      <button class="control-button decrease" @click="decreaseHumidity">
        -
      </button>
    </div>
  </section>
</template>

<style scoped>
.humidity-control {
  margin: 0.5rem auto;
  position: relative;
  width: 3.5rem;
  height: 9rem;
  display: grid;
  grid-template-rows: 2rem 1fr 2rem;
  grid-template-areas:
    "increase"
    "humidity"
    "decrease";
  background: linear-gradient(to top, var(--color-mustard), var(--color-sage));
  border-radius: 0.5rem;
  overflow: hidden;
  text-align: center;
}

.humidity-control::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--humidity-control-height);
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
  background-color: var(--color-sage);
}

.control-button.decrease {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: var(--color-mustard);
}

.humidity {
  align-self: center;
  font-weight: bold;
  z-index: 2;
}
</style>
