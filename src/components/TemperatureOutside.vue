<script setup lang="ts">
const currentTemperature = 22;
</script>

<template>
  <section class="box">
    <h3>Temperature outside</h3>
    <p class="widget-content"><font-awesome-icon icon="fa-solid fa-temperature-half" /> {{ currentTemperature }}&#176;C</p>
  </section>
</template>
