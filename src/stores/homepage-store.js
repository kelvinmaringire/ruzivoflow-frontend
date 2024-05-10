import { defineStore } from 'pinia';
import { api } from '../boot/axios.js';

export const useHomePageStore = defineStore('homepage', {
  state: () => ({
    homepage: [],
  }),

  getters: {
    HeroImageGetter(state) {
      return state.homepage.heroImage;
    },

  },

  actions: {
    async fetchHomePageData() {
      const response = await api.get('api/v2/pages/3/');
      this.homepage = response.data;
    },
  },
});
