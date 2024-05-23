import { defineStore } from 'pinia';
import { api } from '../boot/axios.js';

export const useAuthStore = defineStore('auth', {
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
    async doLogin(credentials) {
      const response = await api.post('api/token/', credentials);

      this.token = response.data;
      this.isAuthenticated = true;
      window.localStorage.setItem('token', JSON.stringify(response.data));
      api.defaults.headers.common.Authorization = `JWT ${response.data.access}`;
      this.getMe(response.data);
    },

    logout() {
      api.defaults.headers.common.Authorization = '';
      this.token = '';
      window.localStorage.removeItem('token');
      this.isAuthenticated = false;
    },

    async getMe(token) {
      const response = await api.post('api/users/me', token.access);
      this.me = response.data;
    },

    async initAuth() {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = JSON.parse(token);
        this.isAuthenticated = true;
        api.defaults.headers.common.Authorization = `JWT ${this.token.access}`;
        // await this.getMe(this.token);
      } else {
        this.token = '';
        window.localStorage.removeItem('token');
        this.isAuthenticated = false;
      }
    },

  },
});
