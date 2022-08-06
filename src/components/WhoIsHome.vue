<script setup lang="ts">
const users = [
  {
    id: 1,
    name: "Anna",
    isAtHome: true,
  },
  {
    id: 2,
    name: "Mark",
    isAtHome: false,
  },
];
const usersAtHome = users.filter((user) => user.isAtHome);
</script>

<template>
  <section class="box">
    <h3>Now at home</h3>
    <ul>
      <li v-for="user in usersAtHome" :key="user.id">{{ user.name }}</li>
    </ul>
  </section>
</template>
