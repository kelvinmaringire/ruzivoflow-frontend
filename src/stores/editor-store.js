import { defineStore } from 'pinia';
import { api } from '../boot/axios.js';

export const useBettingTipsStore = defineStore('editor', {
  state: () => ({
    nodes_list: [
      {
        id: 1,
        name: "Read CSV",
        category: "Data",
        html_id: "read_csv",
        type: "sourceAnchor"
        icon: ""


      }
    ],
  }),

  getters: {

  },

  actions: {
    async fetchBettingTips() {
      const response = await api.get('betting_tips/');
      this.betting_tips = response.data;
    },
  },
});
