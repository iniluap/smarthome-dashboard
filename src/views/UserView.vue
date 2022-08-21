<script setup lang="ts">
import UserDetails from "@/components/UserDetails.vue";
</script>

<template>
  <UserDetails />
</template>

<style>
@media (min-width: 1024px) {
  .user {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
