import { defineStore } from 'pinia';
import { api } from '../boot/axios.js';

export const useBettingTipsStore = defineStore('betting', {
  state: () => ({
    betting_tips: [],
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    async fetchBettingTips() {
      const response = await api.get('betting_tips/');
      this.betting_tips = response.data;
    },
  },
});
