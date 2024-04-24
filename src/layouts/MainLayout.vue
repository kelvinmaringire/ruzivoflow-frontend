<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="bg-dark">
      <q-toolbar>

        <q-toolbar-title>
          <q-img
          style="width: 300px"
          src="../assets/logo/thedatamine.io.png">
          </q-img>
        </q-toolbar-title>

        <div class="gt-sm">
          <q-btn flat rounded label="Home" class="q-mr-sm" href="#hero"/>
          <q-btn flat rounded label="Services" class="q-mr-sm" href="#services"/>
          <q-btn flat rounded label="Landing Page" class="q-mr-sm" href="#landing-page"/>
          <q-btn flat rounded label="Contact" class="q-mr-sm" v-if="false"/>
          <q-btn outline rounded label="Register" to="/auth/register" class="q-mr-sm" v-if="false"/>
          <q-btn outline rounded label="Login" to="/auth/login" v-if="false"/>
        </div>
        <div class="lt-md">

          <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list separator>
        <q-item-label
          header

          class="q-mb-lg"
        >
        <q-img
          style="width: 250px"
          src="../assets/logo/thedatamine.io.png">
          </q-img>
        </q-item-label>

        <q-separator/>

        <q-item clickable v-ripple tag="a" href="#hero">
          <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
        </q-item>

        <q-item clickable v-ripple tag="a" href="#services">
          <q-item-section>
              <q-item-label>Services</q-item-label>
            </q-item-section>
        </q-item>

        <q-item clickable v-ripple tag="a" href="#landing-page">
          <q-item-section>
              <q-item-label>Landing Page</q-item-label>
            </q-item-section>
        </q-item>

        <q-separator/>

      </q-list>
      <q-btn outline rounded label="Register" to="/auth/register" class="q-ma-md" v-if="false"/>
      <q-btn outline rounded label="Login" to="/auth/login" class="q-my-md" v-if="false"/>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

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
import { ref } from 'vue';
// import EssentialLink from 'components/EssentialLink.vue';

defineOptions({
  name: 'MainLayout',
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
