<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const { name, surname, city, phone, isHome, lastLogin, cities } = storeToRefs(
  useUserStore()
);
const isEdited = ref(false);
</script>

<template>
  <h3>User details</h3>
  <section class="box">
    <div class="user-details">
      <h4>Name:</h4>
      <strong>{{ name }}</strong>
      <h4>Surname:</h4>
      <strong>{{ surname }}</strong>
      <h4>City:</h4>
      <strong>{{ city }}</strong>
      <h4>Phone number:</h4>
      <strong>{{ phone }}</strong>
      <h4>Location:</h4>
      <strong>{{ isHome ? "Home" : "Outside" }}</strong>
      <h4>Last login:</h4>
      <strong>{{ lastLogin }}</strong>
    </div>
    <div>
      <form>
        <label for="name">Name:</label>
        <input
          type="text"
          placeholder="Jack"
          id="name"
          v-model="name"
          :disabled="!isEdited"
        />
        <label for="surname">Surname:</label>
        <input
          type="text"
          placeholder="Doe"
          id="surname"
          v-model="surname"
          :disabled="!isEdited"
        />
        <label for="city">City:</label>
        <select v-model="city" id="city" :disabled="!isEdited">
          <option disabled value="Please select one">Please select one</option>
          <template v-for="cityOption of cities" v-bind:key="cityOption">
            <option>{{ cityOption }}</option>
          </template>
        </select>
        <label for="phone">Phone number:</label>
        <input
          type="text"
          placeholder="012345678"
          id="phone"
          v-model="phone"
          :disabled="!isEdited"
        />
      </form>
      <button
        @click="isEdited = !isEdited"
        :class="{ 'is-form-disabled': !isEdited }"
      >
        {{ isEdited ? "Save" : "Edit" }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.user-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(6, 2rem);
  gap: 1rem;
  margin-bottom: 2rem;
  padding-left: 2rem;
  padding-bottom: 1rem;
  border-left: 2px solid var(--color-mint);
}

h4 {
  color: var(--vt-c-text-light-2);
  font-weight: normal;
}

input,
select {
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid var(--color-peach);
}

input[disabled],
select[disabled] {
  border-color: var(--vt-c-divider-light-1);
  background-color: var(--color-background-mute);
}

button {
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  background-color: var(--color-peach);
  border: none;
}

input,
select,
button {
  border-radius: 0.5rem;
  height: 2.5rem;
  width: 100%;
  max-width: 300px;
  transition: var(--transition);
}

button.is-form-disabled {
  background-color: var(--color-background-mute);
}

@media (min-width: 1024px) {
  section {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }
}
</style>
