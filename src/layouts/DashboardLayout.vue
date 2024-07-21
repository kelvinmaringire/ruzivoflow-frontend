<template>
  <q-layout view="hHh LpR fff">

    <q-header class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-img style="width: 250px" src="../assets/logo/thedatamine.io.png"></q-img>
        </q-toolbar-title>

        <q-btn flat dense color="primary" icon="home" :to="{name: 'homepage'}" class="q-mr-xs">
          <q-tooltip class="bg-primary">
            Homepage
          </q-tooltip>
        </q-btn>

        <q-btn flat dense color="negative" icon="power_settings_new"
         @click="logout()">
          <q-tooltip class="bg-primary">
              Logout
            </q-tooltip>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" :width="180" side="left">

          <q-list class="q-mt-lg">

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Dashboard'" v-ripple class="q-my-sm"
              :to="{ name: menuItem.path}">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon"/>
                </q-item-section>
                <q-item-section style="margin-left: -25px;">
                  {{ menuItem.label}}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth-store';

const authStore = useAuthStore();
const router = useRouter();

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function logout() {
  authStore.logout();
  router.push({ name: 'homepage' });
}

const menuList = [
  {
    icon: 'dashboard',
    label: 'Dashboard',
    separator: true,
    path: 'dashboard',
  },
  {
    icon: 'insights',
    label: 'Editor',
    separator: false,
    path: 'editor',
  },
  {
    icon: 'sports_soccer',
    label: 'Betting',
    separator: true,
    path: 'thedatabet',
  },

  {
    icon: 'school',
    iconColor: 'primary',
    label: 'Knowledge',
    separator: false,
    path: 'dashboard',
  },
  {
    icon: 'person',
    label: 'Profile',
    separator: false,
    path: 'dashboard',
  },
];

</script>

<style>

.column {
    flex: 0 50%;
    max-width: 100%;
}

@media screen and (min-width: 992px) {
      .column {
          max-width: 100%;
      }
  }

.q-toolbar__title {
    padding: 0 0;
}
</style>
