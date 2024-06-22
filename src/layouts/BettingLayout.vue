<template>
  <q-layout view="hhh lpr fFf">

<q-header class="bg-dark">

  <q-tabs
    dense
    no-caps
    inline-label
    outside-arrows
    mobile-arrows
    class="bg-primary shadow-2 q-pb-xs"
  >
    <q-route-tab :to="{name: 'stats'}" icon="assessment"  label="Stats" />
    <q-route-tab :to="{name: 'predictions'}" icon="online_prediction" label="Pred" />
    <q-route-tab :to="{name: 'home_win'}" label="1" />
    <q-route-tab :to="{name: 'away_win'}"  label="2" />
    <q-route-tab :to="{name: 'home_draw'}"  label="1X" />
    <q-route-tab :to="{name: 'away_draw'}"  label="2X" />
    <q-route-tab :to="{name: 'over15'}" label="O1.5" />
    <q-route-tab :to="{name: 'under35'}"  label="U3.5" />
    <q-route-tab :to="{name: 'homeOver05'}"  label="H0.5" />
    <q-route-tab :to="{name: 'awayOver05'}"  label="A0.5" />
    <q-route-tab :to="{name: 'btts'}"  label="BTTS" />

  </q-tabs>
</q-header>

<q-page-container>
  <router-view />
</q-page-container>

</q-layout>
</template>
