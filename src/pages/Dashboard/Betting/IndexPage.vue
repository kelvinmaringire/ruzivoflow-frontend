<template>
  <q-page padding>
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="match_result" label="Match Result" />
          <q-tab name="over_15" label="Over 1.5" />
          <q-tab name="under_35" label="Under 3.5" />
          <q-tab name="double_chance" label="Double Chance" />
          <q-tab name="double_chance" label="BTTS" />
          <q-tab name="over_05" label="Team Over 0.5" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="match_result">
            <div class="text-h6">Match Result</div>
            <MatchResultComponent></MatchResultComponent>
          </q-tab-panel>

          <q-tab-panel name="over_15">
            <div class="text-h6">Over 1.5</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="under_35">
            <div class="text-h6">Under 3.5</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import MatchResultComponent from '../../../components/Betting/MatchResultComponent.vue';

const tab = ref('mails');
</script>
