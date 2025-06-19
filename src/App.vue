<template>
  <q-layout>
    <!-- Loading overlay with spinner -->
    <q-inner-loading :showing="isLoading" color="primary">
      <q-spinner-gears size="50px" />
      <p class="text-primary q-mt-sm">Loading application data...</p>
    </q-inner-loading>

    <!-- Main content - only shown when loading is complete -->
    <router-view v-if="!isLoading" />
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHomePageStore } from './stores/homepage-store';
import { useAuthStore } from './stores/auth-store';
import { useEditorStore } from './stores/editor-store';

const homepageStore = useHomePageStore();
const authStore = useAuthStore();
const editorStore = useEditorStore();

const isLoading = ref(true);

defineOptions({
  name: 'App',
});

// Ensure store initialization
async function initStore() {
  try {
    // Start all store initializations in parallel
    await Promise.all([
      homepageStore.fetchHomePageData(),

      authStore.initAuth(),
      authStore.fetchUsers(),

      editorStore.fetchNodeCategories(),
      editorStore.fetchNodes(),
      editorStore.fetchWorkflows(),
      editorStore.fetchNodeItems(),
      editorStore.fetchConnections(),
    ]);
  } catch (error) {
    console.error('Error initializing app:', error);
    // You might want to show an error notification here
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  initStore();
});
</script>

<style></style>
