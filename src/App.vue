<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <nav>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="85"
      height="85"
    />

    <RouterLink to="/"><font-awesome-icon icon="fa-solid fa-house" /></RouterLink>
    <RouterLink to="/user"><font-awesome-icon icon="fa-solid fa-user-gear" /></RouterLink>
  </nav>
  <main>
    <header>
      <HelloWorld userName="Paulina" />
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

main {
  max-height: 100vh;
  padding: 2rem;
  background-color: var(--color-background);
  border-top-left-radius: var(--border-radius-primary);
  border-bottom-left-radius: var(--border-radius-primary);
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

nav {
  width: 100%;
  max-height: 100vh;
  position: relative;
  padding: 2rem 0 2rem 2rem;
  border-top-left-radius: var(--border-radius-primary);
  border-bottom-left-radius: var(--border-radius-primary);
  background-color: var(--color-blush);
  font-size: 12px;
  text-align: center;
}

nav::after {
  content: "";
  background-color: var(--color-blush);
  display: block;
  position: absolute;
  top: 0;
  right: -100px;
  width: 100px;
  height: 100vh;
  z-index: -1;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  width: 3rem;
  height: 3rem;
  margin: 0 auto 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
  }

  nav a {
    display: flex;
  }
}
</style>
