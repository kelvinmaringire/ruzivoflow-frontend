import { defineStore } from 'pinia';
import { api } from '../boot/axios.js';

export const useBettingTipsStore = defineStore('betting', {
  state: () => ({
    betting_tips: [],
    betting_stats: [],
  }),

  getters: {
    today(state) {
      const currentDate = new Date();

      const formattedCurrentDate = currentDate.toISOString().slice(0, 10);
      return state.betting_tips.find((pred) => pred.date === formattedCurrentDate);
    },
    today_home_win() {
      return this.today.games.filter((game) => game.home_win === 1);
    },
    today_away_win() {
      return this.today.games.filter((game) => game.away_win === 1);
    },
    today_home_draw() {
      return this.today.games.filter((game) => game.home_draw === 1);
    },
    today_away_draw() {
      return this.today.games.filter((game) => game.away_draw === 1);
    },
    today_over15() {
      return this.today.games.filter((game) => game.over_25 === 1);
    },
    today_under35() {
      return this.today.games.filter((game) => game.under_25 === 1);
    },
    today_homeOver05() {
      return this.today.games.filter((game) => game.home_over_15 === 1);
    },
    today_awayOver05() {
      return this.today.games.filter((game) => game.away_over_15 === 1);
    },
    today_btts() {
      return this.today.games.filter((game) => game.btts === 1);
    },
    yesterday(state) {
      // 86400000 = 24 hours in milliseconds
      const currentDate = new Date();
      const yesterdayDate = new Date(currentDate.getTime() - 86400000);
      const formattedYesterdayDate = yesterdayDate.toISOString().slice(0, 10);
      return state.betting_tips.find((pred) => pred.date === formattedYesterdayDate);
    },
    yesterday_home_win() {
      return this.yesterday.games.filter((game) => game.home_win === 1);
    },
    yesterday_away_win() {
      return this.yesterday.games.filter((game) => game.away_win === 1);
    },
    yesterday_home_draw() {
      return this.yesterday.games.filter((game) => game.home_draw === 1);
    },
    yesterday_away_draw() {
      return this.yesterday.games.filter((game) => game.away_draw === 1);
    },
    yesterday_over15() {
      return this.yesterday.games.filter((game) => game.over_25 === 1);
    },
    yesterday_under35() {
      return this.yesterday.games.filter((game) => game.under_25 === 1);
    },
    yesterday_homeOver05() {
      return this.yesterday.games.filter((game) => game.home_over_15 === 1);
    },
    yesterday_awayOver05() {
      return this.yesterday.games.filter((game) => game.away_over_15 === 1);
    },
    yesterday_btts() {
      return this.yesterday.games.filter((game) => game.btts === 1);
    },
    tomorrow(state) {
      // 86400000 = 24 hours in milliseconds
      const currentDate = new Date();
      const tomorrowDate = new Date(currentDate.getTime() + 86400000);
      const formattedTomorrowDate = tomorrowDate.toISOString().slice(0, 10);
      return state.betting_tips.find((pred) => pred.date === formattedTomorrowDate);
    },
    tomorrow_home_win() {
      return this.tomorrow.games.filter((game) => game.home_win === 1);
    },
    tomorrow_away_win() {
      return this.tomorrow.games.filter((game) => game.away_win === 1);
    },
    tomorrow_home_draw() {
      return this.tomorrow.games.filter((game) => game.home_draw === 1);
    },
    tomorrow_away_draw() {
      return this.tomorrow.games.filter((game) => game.away_draw === 1);
    },
    tomorrow_over15() {
      return this.tomorrow.games.filter((game) => game.over_25 === 1);
    },
    tomorrow_under35() {
      return this.tomorrow.games.filter((game) => game.under_25 === 1);
    },
    tomorrow_homeOver05() {
      return this.tomorrow.games.filter((game) => game.home_over_15 === 1);
    },
    tomorrow_awayOver05() {
      return this.tomorrow.games.filter((game) => game.away_over_15 === 1);
    },
    tomorrow_btts() {
      return this.tomorrow.games.filter((game) => game.btts === 1);
    },
    yesterday_stats(state) {
      // 86400000 = 24 hours in milliseconds
      const currentDate = new Date();
      const yesterdayDate = new Date(currentDate.getTime() - 86400000);
      const formattedYesterdayDate = yesterdayDate.toISOString().slice(0, 10);
      return state.betting_stats.find((stat) => stat.date === formattedYesterdayDate);
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
  },
});
