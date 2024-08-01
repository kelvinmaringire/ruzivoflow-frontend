<template>
  <q-layout view="hHh lpR fFf" container style="height: 92vh">

    <q-page-container class="q-pt-md">
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs
        dense
        no-caps
        inline-label
        outside-arrows
        mobile-arrows
        class="bg-primary shadow-2 q-pb-xs"
      >
        <q-route-tab :to="{name: 'predictions'}" icon="online_prediction" label="Pred" />
        <q-route-tab :to="{name: 'betway'}" icon="confirmation_number"  label="Betway" />
        <q-route-tab :to="{name: 'stats'}" icon="assessment"  label="Stats" />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>
