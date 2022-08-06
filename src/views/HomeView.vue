<script setup lang="ts">
import CurrentTime from "@/components/CurrentTime.vue";
import TemperatureOutside from "../components/TemperatureOutside.vue";
import WhoIsHome from "../components/WhoIsHome.vue";
import LightControl from "../components/LightControl.vue";
import TemperatureInsideControl from "../components/TemperatureInsideControl.vue";
import HumidityControl from "../components/HumidityControl.vue";
</script>

<template>
  <main>
    <CurrentTime />
    <TemperatureOutside />
    <WhoIsHome />
    <LightControl />
    <TemperatureInsideControl />
    <HumidityControl />
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-areas:
    "time temp who"
    "control control control";
  gap: 2rem;
}
</style>
