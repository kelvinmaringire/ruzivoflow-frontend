<template>
  <router-view />
</template>

<script setup>

import { useHomePageStore } from './stores/homepage-store';

const homepageStore = useHomePageStore();

defineOptions({
  name: 'App',
});

// Ensure store initialization
async function initStore() {
  await homepageStore.fetchHomePageData();
}

// Call the initialization function
initStore();

</script>

<style>

</style>
