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
      <li v-for="user in usersAtHome" :key="user.id">
        <font-awesome-icon icon="fa-solid fa-circle-user" />
        <span>{{ user.name }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  padding: 0;
}

li {
  list-style: none;
  padding: 0.5rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

li svg {
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.5rem;
  color: var(--color-mint);
}
</style>
