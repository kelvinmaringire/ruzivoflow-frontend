<template>
  <router-view />
</template>

<script setup>

import { useHomePageStore } from './stores/homepage-store';
import { useAuthStore } from './stores/auth-store';

const homepageStore = useHomePageStore();
const authStore = useAuthStore();

defineOptions({
  name: 'App',
});

// Ensure store initialization
async function initStore() {
  await homepageStore.fetchHomePageData();
  await authStore.initAuth();
}

// Call the initialization function
initStore();

</script>

<style>

</style>
