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
          <q-btn flat rounded label="Landing Page" class="q-mr-sm"
          :class="{ 'active': activeTab === 'landing-page' }" @click="scrollTo('landing-page')" />

          <!-- Contact Button (Hidden for now) -->
          <q-btn flat rounded label="Contact" class="q-mr-sm" v-if="false" />

          <!-- Register Button (Hidden for now) -->
          <q-btn outline rounded label="Register"
           to="/auth/register" class="q-mr-sm" v-if="false" />

          <!-- Login Button (Hidden for now) -->
          <q-btn outline rounded label="Login" to="/auth/login" v-if="false" />
        </div>

        <div class="lt-md">
          <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Left Drawer -->
    <q-drawer v-model="leftDrawerOpen" bordered>
      <!-- Drawer Content -->
      <!-- Navigation Links -->
      <q-list separator>
        <!-- Home Link -->
        <q-item clickable v-ripple tag="a" href="#hero"
        :class="{ 'active': activeTab === 'hero' }">
          <q-item-section><q-item-label>Home</q-item-label></q-item-section>
        </q-item>

        <!-- Services Link -->
        <q-item clickable v-ripple tag="a" href="#services"
        :class="{ 'active': activeTab === 'services' }">
          <q-item-section><q-item-label>Services</q-item-label></q-item-section>
        </q-item>

        <!-- Landing Page Link -->
        <q-item clickable v-ripple tag="a" href="#landing-page"
        :class="{ 'active': activeTab === 'landing-page' }">
          <q-item-section><q-item-label>Landing Page</q-item-label></q-item-section>
        </q-item>
      </q-list>

      <!-- Register Button (Hidden for now) -->
      <q-btn outline rounded label="Register" to="/auth/register" class="q-ma-md" v-if="false" />

      <!-- Login Button (Hidden for now) -->
      <q-btn outline rounded label="Login" to="/auth/login" class="q-my-md" v-if="false" />
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
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
