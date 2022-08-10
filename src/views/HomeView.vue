<script setup lang="ts">
import CurrentTime from "@/components/CurrentTime.vue";
import TemperatureOutside from "../components/TemperatureOutside.vue";
import WhoIsHome from "../components/WhoIsHome.vue";
import LightControl from "../components/LightControl.vue";
import TemperatureInsideControl from "../components/TemperatureInsideControl.vue";
import HumidityControl from "../components/HumidityControl.vue";
</script>

<template>
  <div class="view-container">
    <CurrentTime />
    <TemperatureOutside />
    <WhoIsHome />
    <LightControl />
    <TemperatureInsideControl />
    <HumidityControl />
  </div>
</template>

<style scoped>
.view-container {
  display: grid;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .view-container {
    grid-template-columns: 4fr 4fr 3fr;
    grid-template-areas:
      "time temp who"
      "control control control";
  }
}
</style>
