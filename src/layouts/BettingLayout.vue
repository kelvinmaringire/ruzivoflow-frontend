<template>
  <q-layout view="hhh lpr fFf">

<q-header class="bg-dark">

  <q-tabs
    dense
    no-caps
    inline-label
    class="bg-primary shadow-2"
  >
    <q-route-tab :to="{name: 'predictions'}" icon="mail" label="Predictions" />
    <q-route-tab :to="{name: 'previews'}" icon="alarm" label="Priviews" />
    <q-route-tab :to="{name: 'leagues'}" icon="movie" label="Leagues" />
  </q-tabs>
</q-header>

<q-page-container>
  <router-view />
</q-page-container>

</q-layout>
</template>
