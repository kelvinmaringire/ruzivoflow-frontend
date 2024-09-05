<template>
  <q-page padding>
    <div class="row q-gutter-lg q-mb-md">
      <div class="col">
        <q-input
          outlined
          filled
          square
          dense
          v-model="searchQuery"
          label="Search"
          size="sm"
          style="max-width: 300px"
        />
      </div>
    </div>

    <q-list bordered separator>
      <q-item v-for="(game, key) in paginatedGames" :key="key" class="custom-item">
        <div class="row q-col-gutter-xs">
        <div class="col-12 col-md-2 text-weight-bold">
          <q-item-section>
            <q-item-label>{{ game.time }}</q-item-label>
          </q-item-section>
        </div>
        <div class="col-12 col-md-6">
          <q-item-section>
            <q-item-label>
              {{ game.home_team }} Vs {{ game.away_team }}
            </q-item-label>
          </q-item-section>
        </div>
        <div class="col-10 col-md-3 text-weight-bold">
          <q-item-section>
            <q-item-label>{{ game.country }} - {{ game.league }}</q-item-label>
          </q-item-section>
        </div>
        <div class="col-2 col-md-1 text-weight-bold">
          <q-item-section>
            <q-item-label>
              <q-btn
                class="glossy"
                color="info"
                icon="visibility"
                size="xs"
                outline
                rounded
                @click="showDialog(game)"
              />
            </q-item-label>
          </q-item-section>
        </div>
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
            <div class="col-auto">Time</div>
            <div class="col-auto">{{ selectedGame.time }}</div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">League</div>
            <div class="col-auto">{{ selectedGame.country }} - {{ selectedGame.league }}</div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Home</div>
            <div class="col-auto">
              {{ selectedGame.home_team }}
              <q-btn
                class="glossy q-ml-sm"
                color="orange"
                icon="content_copy"
                size="xs"
                outline
                rounded
                @click="copyName(selectedGame.home_team)"
              />
            </div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Away</div>
            <div class="col-auto">
              {{ selectedGame.away_team }}
              <q-btn
                class="glossy q-ml-sm"
                color="orange"
                icon="content_copy"
                size="xs"
                outline
                rounded
                @click="copyName(selectedGame.away_team)"
              />
            </div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Home Win</div>
            <div class="col-auto">
              {{ selectedGame.home_win }}
            </div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Away Win</div>
            <div class="col-auto">
            {{ selectedGame.away_win }}
            </div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Home or Draw</div>
            <div class="col-auto">
              {{ selectedGame.home_draw }}
            </div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Away or Draw</div>
            <div class="col-auto">{{ selectedGame.away_draw }}</div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Total Over 1.5</div>
            <div class="col-auto">
            {{ selectedGame.over15 }}
            </div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Total Under 3.5</div>
            <div class="col-auto">
            {{ selectedGame.under35 }}
            </div>
          </div>
          <q-separator color="orange" />

          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Home over 0.5</div>
            <div class="col-auto">
            {{ selectedGame.home05 }}
            </div>
          </div>
          <q-separator color="orange" />

          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Away Over 0.5</div>
            <div class="col-auto">
            {{ selectedGame.away05 }}
            </div>
          </div>
          <q-separator color="orange" />

          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Both Teams To Score Yes</div>
            <div class="col-auto">
            {{ selectedGame.bttsy }}
            </div>
          </div>
          <q-separator color="orange" />

          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Both Teams To Score No</div>
            <div class="col-auto">
            {{ selectedGame.bttsn }}
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
import { ref, computed, watch } from 'vue';
import { useBettingTipsStore } from '../../../stores/betting-store';

const bettingTipsStore = useBettingTipsStore();
const { odds } = bettingTipsStore.tomorrow_betway_odds;
const $q = useQuasar();
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(9);
const selectedGame = ref(null);

// Compute the filtered games based on the search query
const filteredGames = computed(() => {
  const query = searchQuery.value.toLowerCase();

  return odds.filter((game) => game.home_team.toLowerCase().includes(query)
      || game.away_team.toLowerCase().includes(query)
      || game.country.toLowerCase().includes(query)
      || game.league.toLowerCase().includes(query));
});

// Compute the maximum page based on filtered items
const maxPage = computed(() => Math.ceil(filteredGames.value.length / itemsPerPage.value));

// Compute the paginated games to be displayed on the current page
const paginatedGames = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredGames.value.slice(start, end);
});

// Watch for changes in search query to reset the current page
watch(searchQuery, () => {
  currentPage.value = 1;
});

const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent();

// this is part of our example (so not required)
function onOKClick() {
  onDialogOK();
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

<style>

.custom-item {
  display: block; /* Override the row class */
  /* Add any other styles you need */
}

</style>
