import { defineStore } from "pinia";

const dataOfLoggingIn = new Date().toDateString();

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "",
    surname: "",
    city: "",
    phone: "",
    isHome: true,
    lastLogin: dataOfLoggingIn,
    cities: ["Berlin", "Amsterdam", "Warsaw", "Paris", "Rome"],
  }),
  getters: {
    getIsHome: (state) => state.isHome,
  },
});
