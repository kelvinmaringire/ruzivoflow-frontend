<template>
  <router-view />
</template>

<script setup>
import { useHomePageStore } from './stores/homepage-store';
import { useAuthStore } from './stores/auth-store';
import { useBettingTipsStore } from './stores/betting-store';

const homepageStore = useHomePageStore();
const authStore = useAuthStore();
const bettingTips = useBettingTipsStore();

defineOptions({
  name: 'App',
});

// Ensure store initialization
async function initStore() {
  await homepageStore.fetchHomePageData();
  await authStore.initAuth();
  await bettingTips.fetchBettingTips();
  await bettingTips.fetchBettingStats();
  await bettingTips.fetchBetwayOdds();
}

// Call the initialization function
initStore();

</script>

<style>

</style>
