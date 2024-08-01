<template>
  <q-page padding>
    <div>{{ odds }}</div>
    <li v-for="odd in odds">
      {{ odd.url }}
    </li>
  </q-page>
</template>

<script setup>
import { useBettingTipsStore } from '../../../stores/betting-store';

const bettingTipsStore = useBettingTipsStore();
const { odds } = bettingTipsStore.tomorrow_betway_odds;

</script>

<style>

</style>
