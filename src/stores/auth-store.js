import { defineStore } from 'pinia';
// import { api } from '../boot/axios.js';

export const authStore = defineStore('auth', {
  state: () => ({
    me: {},
    token: '',
    isAuthenticated: false,
  }),

  getters: {
    doubleCount(state) {
      return state;
    },
  },

  actions: {
    async doLogin() {
      // const response = await api.post('api/token/');
    },
  },
});
