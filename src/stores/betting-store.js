import { defineStore } from 'pinia';
import { api } from '../boot/axios.js';

export const useBettingTipsStore = defineStore('betting', {
  state: () => ({
    betting_tips: [],
    betting_stats: [],
    betway_odds: [],
  }),

  getters: {
    today(state) {
      const currentDate = new Date();
      const formattedCurrentDate = currentDate.toISOString().slice(0, 10);
      return state.betting_tips.find((pred) => pred.date === formattedCurrentDate)?.games || [];
    },
    yesterday(state) {
      // 86400000 = 24 hours in milliseconds
      const currentDate = new Date();
      const yesterdayDate = new Date(currentDate.getTime() - 86400000);
      const formattedYesterdayDate = yesterdayDate.toISOString().slice(0, 10);
      return state.betting_tips.find((pred) => pred.date === formattedYesterdayDate)?.games || [];
    },
    tomorrow(state) {
      // 86400000 = 24 hours in milliseconds
      const currentDate = new Date();
      const tomorrowDate = new Date(currentDate.getTime() + 86400000);
      const formattedTomorrowDate = tomorrowDate.toISOString().slice(0, 10);
      return state.betting_tips.find((pred) => pred.date === formattedTomorrowDate)?.games || [];
    },

    yesterday_stats(state) {
      // 86400000 = 24 hours in milliseconds
      const currentDate = new Date();
      const yesterdayDate = new Date(currentDate.getTime() - 86400000);
      const formattedYesterdayDate = yesterdayDate.toISOString().slice(0, 10);
      return state.betting_stats.find((stat) => stat.date === formattedYesterdayDate) || {};
    },
    tomorrow_betway_odds(state) {
      const currentDate = new Date();
      const tomorrowDate = new Date(currentDate.getTime() + 86400000);
      const formattedTomorrowDate = tomorrowDate.toISOString().slice(0, 10);
      return state.betway_odds.find((stat) => stat.date === formattedTomorrowDate) || { odds: [] };
    },
  },

  actions: {
    async fetchBettingTips() {
      const response = await api.get('betting_tips/');
      this.betting_tips = response.data;
    },
    async fetchBettingStats() {
      const response = await api.get('betting_stats/');
      this.betting_stats = response.data;
    },
    async fetchBetwayOdds() {
      const response = await api.get('betway_odds/');
      this.betway_odds = response.data;
    },
  },
});
