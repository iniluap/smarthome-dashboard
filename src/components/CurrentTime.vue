<script setup lang="ts">
const currentTime: string = new Date().toLocaleTimeString();
</script>

<template>
  <section class="box">
    <h3>Current time</h3>
    <p>{{ currentTime }}</p>
  </section>
</template>
