<template>
  <q-page>

    <q-tabs
          v-model="tab"
          dense
          class="bg-dark shadow-2"
          style="margin-top: -15px;"
          active-color="primary"
          indicator-color="primary"
          narrow-indicator
          no-caps
          inline-label
              >
          <q-tab name="yesterday" label="Yesterday" icon="verified_user" />
          <q-tab name="today" label="Today" icon="today" />
          <q-tab name="tomorrow" label="Tomorrow" icon="watch_later" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="yesterday">

            <PredictionsYesterdayComponent></PredictionsYesterdayComponent>

          </q-tab-panel>

          <q-tab-panel name="today">

            <PredictionsTodayComponent></PredictionsTodayComponent>

          </q-tab-panel>

          <q-tab-panel name="tomorrow">

            <PredictionsTomorrowComponent></PredictionsTomorrowComponent>

          </q-tab-panel>
        </q-tab-panels>

  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import PredictionsTomorrowComponent from 'components/thedatabet/PredictionsTomorrowComponent.vue';
import PredictionsTodayComponent from 'components/thedatabet/PredictionsTodayComponent.vue';
import PredictionsYesterdayComponent from 'components/thedatabet/PredictionsYesterdayComponent.vue';

const tab = ref('tomorrow');

</script>
