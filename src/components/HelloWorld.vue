<script setup lang="ts">
defineProps<{
  userName: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1>Hello, {{ userName }}!</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.greetings h1 {
  color: var(--color-emerald);
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1 {
    text-align: left;
  }
}
</style>
