<template>
  <q-page padding>

  <div class="row q-gutter-lg q-mb-md">
    <div class="col">
      <q-input outlined filled square
      v-model="searchQuery" label="Search" style="max-width: 300px" />
    </div>
    <div class="col">
      <q-select outlined filled square v-model="model" :options="options" label="Sort By"
      style="max-width: 300px" />
    </div>
  </div>
    <q-list bordered separator >

      <q-item v-for="(game, key) in paginatedGames " :key="key">

          <div class="col-md-2 col-sm-3 text-weight-bold">
            <q-item-section>
              <q-item-label>
                {{ game.DATE_BAH }}
           </q-item-label>
           </q-item-section>
          </div>
          <div class="col-md-6 col-sm-9">
            <q-item-section>
              <q-item-label>
              <q-badge text-color="black" color="info" :label="game.Predicted_Host_SC" />
          {{ game.HOST_NAME }} {{ game.host_sc_pr }} - {{ game.guest_sc_pr }}  {{ game.GUEST_NAME }}
              <q-badge color="info" text-color="black" :label="game.Predicted_Guest_SC" />
              </q-item-label>
            </q-item-section>
          </div>
          <div class="col-md-3 col-sm-8 text-weight-bold">
            <q-item-section>
              <q-item-label>
            {{ game.country }} - {{ game.league }}
            </q-item-label>
            </q-item-section>
          </div>

          <div class="col-md-1 col-sm-4 text-weight-bold">
            <q-item-section>
              <q-item-label>
              <q-btn class="glossy" color="info" icon="visibility" size="xs"
              outline rounded @click="showDialog(game)" />
             </q-item-label>
             </q-item-section>
          </div>

      </q-item>

    </q-list>

    <div class="flex flex-center q-my-md">
      <q-pagination
        v-model="currentPage"
        :max="maxPage"
        direction-links
        outline
        color="orange"
        active-design="unelevated"
        active-color="brown"
        active-text-color="orange"
      />
    </div>

    <q-dialog ref="dialogRef" @hide="onDialogHide">
      <q-card class="q-dialog-plugin">

        <q-card-section class="row items-center q-pb-none q-mb-sm">
          <div class="text-h5">Game Info</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

      <q-card-section>

        <q-separator color="orange" />

        <div class="row justify-between q-pa-sm">
          <div class="col-auto">
            Datetime
          </div>
          <div class="col-auto">
              {{ selectedGame.DATE_BAH }}
          </div>
        </div>

        <q-separator color="orange" />

        <div class="row justify-between q-pa-sm">
          <div class="col-auto">
            League
          </div>
          <div class="col-auto">
              {{ selectedGame.country }} - {{ selectedGame.league }}
          </div>
        </div>

        <q-separator color="orange" />

        <div class="row justify-between q-pa-sm">
      <div class="col-auto">
        Home
      </div>
      <div class="col-auto">
      {{ selectedGame.HOST_NAME }}
      <q-btn class="glossy q-ml-sm" color="orange" icon="content_copy" size="xs"
        outline rounded @click="copyName(selectedGame.HOST_NAME)" />
      </div>
    </div>

    <q-separator color="orange" />

    <div class="row justify-between q-pa-sm">
      <div class="col-auto">
        Away
      </div>
      <div class="col-auto">
          {{ selectedGame.GUEST_NAME }}
          <q-btn class="glossy q-ml-sm" color="orange" icon="content_copy" size="xs"
        outline rounded @click="copyName(selectedGame.GUEST_NAME)" />
      </div>
    </div>

    <q-separator color="orange" />

    <div class="row justify-between q-pa-sm">
      <div class="col-auto">
        Analytics Prediction
      </div>
      <div class="col-auto">
        <q-badge color="white" text-color="black"
        :label="selectedGame.Predicted_result" class="q-mr-sm" />
          {{ selectedGame.Predicted_Host_SC }} - {{ selectedGame.Predicted_Guest_SC }}

      </div>
    </div>

    <q-separator color="orange" />

    <div class="row justify-between q-pa-sm">
      <div class="col-auto">
        Tipster Prediction
      </div>
      <div class="col-auto">
          {{ selectedGame.host_sc_pr }} - {{ selectedGame.guest_sc_pr }}
      </div>
    </div>

    <q-separator color="orange" />

    <div class="row justify-between q-pa-sm">
      <div class="col-auto">
        Result Probabilities
      </div>
      <div class="col-auto">
          {{ selectedGame.Pred_1 }}% ~ {{ selectedGame.Pred_X }}% ~ {{ selectedGame.Pred_2 }}%
      </div>
    </div>

    <q-separator color="orange" />

    <div class="row justify-between q-pa-sm">
      <div class="col-auto">
        Goals Average
      </div>
      <div class="col-auto">
          {{ selectedGame.goalsavg }}
      </div>
    </div>

    <q-separator color="orange" />

    <div class="row justify-between q-pa-sm">
      <div class="col-auto">
        Home (Scored ~ Conceded)
      </div>
      <div class="col-auto">
          {{ selectedGame.Host_Perfom }} ~ {{ selectedGame.Host_Concede }}
      </div>
    </div>

    <q-separator color="orange" />

    <div class="row justify-between q-pa-sm">
      <div class="col-auto">
        Away (Scored ~ Conceded)
      </div>
      <div class="col-auto">
          {{ selectedGame.Guest_Perfom }} ~ {{ selectedGame.Guest_Concede }}
      </div>
    </div>

    <q-separator color="orange" />

      </q-card-section>

        <q-card-actions align="right">
          <q-btn color="secondary" size="sm" label="Close" @click="onOKClick" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { copyToClipboard, useQuasar, useDialogPluginComponent } from 'quasar';
import { ref, computed } from 'vue';
import { useBettingTipsStore } from '../../../stores/betting-store';

const $q = useQuasar();
const bettingTipsStore = useBettingTipsStore();
// const today_games = bettingTipsStore.today.games
const model = ref('Time');
const options = [
  'Time', 'League',
];
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(20);
const selectedGame = ref(null);

// Calculate the maximum page based on items per page
const maxPage = computed(() => Math.ceil(bettingTipsStore.today.games.length / itemsPerPage.value));

// Compute the filtered games based on the search query
const filteredGames = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return bettingTipsStore.today.games.filter((game) => game.HOST_NAME.toLowerCase().includes(query)
    || game.GUEST_NAME.toLowerCase().includes(query)
    || game.country.toLowerCase().includes(query)
    || game.league.toLowerCase().includes(query));
});

// Compute the paginated games to be displayed on the current page
const paginatedGames = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredGames.value.slice(start, end);
});

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits,
]);

const {
  dialogRef, onDialogHide, onDialogOK,
} = useDialogPluginComponent();
// dialogRef      - Vue ref to be applied to QDialog
// onDialogHide   - Function to be used as handler for @hide on QDialog
// onDialogOK     - Function to call to settle dialog with "ok" outcome
//                    example: onDialogOK() - no payload
//                    example: onDialogOK({ /*...*/ }) - with payload
// onDialogCancel - Function to call to settle dialog with "cancel" outcome

// this is part of our example (so not required)
function onOKClick() {
  // on OK, it is REQUIRED to
  // call onDialogOK (with optional payload)
  onDialogOK();
  // or with payload: onDialogOK({ ... })
  // ...and it will also hide the dialog automatically
}

function showDialog(game) {
  selectedGame.value = game;
  dialogRef.value.show();
}

function copyName(teamName) {
  copyToClipboard(teamName)
    .then(() => {
      $q.notify({
        type: 'positive',
        message: 'Copied to clipboard',
        position: 'top',
      });
    })
    .catch(() => {
      $q.notify({
        type: 'negative',
        message: 'Failed to copy',
        position: 'top',
      });
    });
}
</script>
