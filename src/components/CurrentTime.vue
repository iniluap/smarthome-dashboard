<script setup lang="ts">
import { ref } from "vue";

const currentTime = ref("");
function getTime() {
  currentTime.value = new Date().toLocaleTimeString();
}
setInterval(getTime, 1000);
</script>

<template>
  <section class="box">
    <h3>Current time</h3>
    <p>{{ currentTime }}</p>
  </section>
</template>
