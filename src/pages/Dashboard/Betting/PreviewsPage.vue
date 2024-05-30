<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-weight-bold">Datetime</div>
        <div class="text-weight-light">1716940800000</div>
        <q-separator class="q-mt-xs"/>
        <div class="text-weight-bold">Home</div>
        <div class="text-weight-light">Manchester Untied
          <q-btn icon="content_copy" class="q-ml-sm"
          dense color="positive" @click="clipboard('Manchester Untied')"/>
        </div>
        <q-separator class="q-mt-xs"/>
        <div class="text-weight-bold">Away</div>
        <div class="text-weight-light">Tottenham Hotspurs
          <q-btn icon="content_copy" class="q-ml-sm"
          dense color="positive" @click="clipboard('Tottenham Hotspurs')"/>
        </div>
        <q-separator class="q-mt-xs"/>

        <div class="row">
        <div class="col">
          <div class="text-weight-bold">H Pred</div>
        <div class="text-weight-light">2</div>
        </div>
        <div class="col">
          <div class="text-weight-bold">G Pred</div>
        <div class="text-weight-light">0</div>
        </div>
      </div>

      <q-separator class="q-my-xs"/>
      <div class="flex flex-center">
        <q-btn outline rounded color="primary" @click="gameInfo = true">
          More info</q-btn>
      </div>

      </q-card-section>
    </q-card>
    <q-dialog v-model="gameInfo">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { copyToClipboard, useQuasar } from 'quasar';

const $q = useQuasar();

const gameInfo = ref(false);

function clipboard(team) {
  copyToClipboard(team)
    .then(() => {
      $q.notify({
        type: 'positive',
        message: 'Copied to clipboard',
        position: 'bottom',
      });
    })
    .catch(() => {
      $q.notify({
        type: 'negative',
        message: 'Failed to Copy',
        position: 'bottom',
      });
    });
}

</script>
