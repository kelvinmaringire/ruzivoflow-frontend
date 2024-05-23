import { defineStore } from 'pinia';
import { api } from '../boot/axios.js';

export const useBettingTipsStore = defineStore('betting', {
  state: () => ({
    betting_tips: [],
  }),

  getters: {
    today(state) {
      const currentDate = new Date();

      const formattedCurrentDate = currentDate.toISOString().slice(0, 10);
      return state.betting_tips.find((pred) => pred.date === formattedCurrentDate);
    },
    yesterday(state) {
      // 86400000 = 24 hours in milliseconds
      const currentDate = new Date();
      const yesterdayDate = new Date(currentDate.getTime() - 86400000);
      const formattedYesterdayDate = yesterdayDate.toISOString().slice(0, 10);
      return state.betting_tips.find((pred) => pred.date === formattedYesterdayDate);
    },
    tomorrow(state) {
      // 86400000 = 24 hours in milliseconds
      const currentDate = new Date();
      const tomorrowDate = new Date(currentDate.getTime() + 86400000);
      const formattedTomorrowDate = tomorrowDate.toISOString().slice(0, 10);
      return state.betting_tips.find((pred) => pred.date === formattedTomorrowDate);
    },
  },

  actions: {
    async fetchBettingTips() {
      const response = await api.get('betting_tips/');
      this.betting_tips = response.data;
    },
  },
});
