<template>
  <q-layout view="lHh Lpr lff">
    <!-- Header -->
    <q-header class="bg-dark">
      <q-toolbar>
        <q-toolbar-title @click="scrollTo('hero')">
          <q-img style="width: 300px" src="../assets/logo/thedatamine.io.png"></q-img>
        </q-toolbar-title>

        <div class="gt-sm">
          <!-- Home Button -->
          <q-btn flat rounded label="Home" class="q-mr-sm"
          :class="{ 'active': activeTab === 'hero' }" @click="scrollTo('hero')" />

          <!-- Services Button -->
          <q-btn flat rounded label="Services" class="q-mr-sm"
          :class="{ 'active': activeTab === 'services' }" @click="scrollTo('services')" />

          <!-- Landing Page Button -->
          <q-btn flat rounded label="Website" class="q-mr-sm"
          :class="{ 'active': activeTab === 'landing-page' }" @click="scrollTo('landing-page')" />

          <!-- Contact Button (Hidden for now) -->
          <q-btn flat rounded label="Contact" class="q-mr-sm" v-if="false" />

          <q-btn outline rounded label="Login" :to="{name: 'login'}"
          class="q-mx-xs" icon="login" v-if="!isAuthenticated" />

          <!-- Register Button (Hidden for now) -->
          <q-btn outline rounded label="Register" class="q-mx-xs"
           :to="{name: 'register'}" icon="person_add"  v-if="!isAuthenticated" />

           <q-btn outline rounded label="Dashboard" class="q-mx-xs"
           :to="{name: 'dashboard'}" icon="dashboard" v-if="isAuthenticated" />
        </div>

        <div class="lt-md">
          <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Left Drawer -->
    <q-drawer v-model="leftDrawerOpen" :width="200" bordered>

      <q-toolbar-title @click="scrollTo('hero')">
          <q-img style="width: 200px" src="../assets/logo/thedatamine.io.png"></q-img>
        </q-toolbar-title>

      <!-- Drawer Content -->
      <!-- Navigation Links -->
      <q-list class="q-mt-lg" separator>
        <!-- Home Link -->
        <q-item clickable v-ripple tag="a" href="#hero"
        :class="{ 'active': activeTab === 'hero' }" class="q-my-sm">
          <q-item-section><q-item-label>Home</q-item-label></q-item-section>
        </q-item>

        <!-- Services Link -->
        <q-item clickable v-ripple tag="a" href="#services"
        :class="{ 'active': activeTab === 'services' }" class="q-my-sm">
          <q-item-section><q-item-label>Services</q-item-label></q-item-section>
        </q-item>

        <!-- Landing Page Link -->
        <q-item clickable v-ripple tag="a" href="#landing-page"
        :class="{ 'active': activeTab === 'landing-page' }" class="q-my-sm">
          <q-item-section><q-item-label>Website</q-item-label></q-item-section>
        </q-item>
      </q-list>

      <div class="flex flex-center">
      <q-btn outline rounded label="Login" :to="{name: 'login'}"
          class="q-mx-xs" icon="login" v-if="!isAuthenticated" />
        </div>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container id="hero">
      <!-- Router View -->
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer elevated class="bg-brown-9 q-mt-lg-xl">
      <q-toolbar>
        <q-toolbar-title class="flex flex-center">
          &copy; 2024 thedatamine.io. All rights reserved.
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores/auth-store';

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

// Define reactive variable for left drawer state
const leftDrawerOpen = ref(false);

// Get router instance
const router = useRouter();

// Define reactive variable for active tab
const activeTab = ref('');

// Function to toggle left drawer
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

// Function to smoothly scroll to a section
const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }
};

// Initialize activeTab based on current route hash
const updateActiveTab = () => {
  activeTab.value = router.currentRoute.value.hash.substring(1);
};

// Update activeTab when route changes
router.afterEach(() => {
  updateActiveTab();
});

// Initialize activeTab on component mount
onMounted(() => {
  updateActiveTab();
});
</script>

<style scoped>
/* Define styles for active tab/button */
.active {
  color: #ff9800; /* Change text color to brown */
}
</style>
