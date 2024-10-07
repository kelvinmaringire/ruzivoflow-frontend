<template>
  <router-view />
</template>

<script setup>
import { useHomePageStore } from './stores/homepage-store';
import { useAuthStore } from './stores/auth-store';
import { useBettingTipsStore } from './stores/betting-store';
import { useEditorStore } from './stores/editor-store';

const homepageStore = useHomePageStore();
const authStore = useAuthStore();
const bettingTips = useBettingTipsStore();
const editorStore = useEditorStore();

defineOptions({
  name: 'App',
});

// Ensure store initialization
async function initStore() {
  await homepageStore.fetchHomePageData();

  await authStore.initAuth();
  await authStore.fetchUsers();

  await bettingTips.fetchBettingTips();
  await bettingTips.fetchBettingStats();
  await bettingTips.fetchBetwayOdds();

  await editorStore.fetchNodeCategories();
  await editorStore.fetchNodes();
  await editorStore.fetchWorkflows();
  await editorStore.fetchNodeItems();
  await editorStore.fetchConnections();
}

// Call the initialization function
initStore();
</script>

<style></style>
