<template>
  <q-page padding>

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

            <q-table
              dense
              title="Away Win (Yesterday)"
              class="my-sticky-header-table my-sticky-column-table"
              :rows="bettingTipsStore.yesterday_away_win"
              :columns="columns"
              :filter="filter"
              :pagination="initialPagination"
              no-data-label="I didn't find anything for you"
              row-key="name"
              style="max-width: 100%;"
              separator="cell">

              <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>

            </q-table>

          </q-tab-panel>

          <q-tab-panel name="today">

            <q-table
              dense
              title="Away Win (Today)"
              class="my-sticky-header-table my-sticky-column-table"
              :rows="bettingTipsStore.today_away_win"
              :columns="columns"
              :filter="filter"
              :pagination="initialPagination"
              no-data-label="I didn't find anything for you"
              row-key="name"
              style="max-width: 100%;"
              separator="cell">

              <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>
            </q-table>

          </q-tab-panel>

          <q-tab-panel name="tomorrow">

            <q-table
              dense
              title="Away Win (Tomorrow)"
              class="my-sticky-header-table my-sticky-column-table"
              :rows="bettingTipsStore.tomorrow_away_win"
              :columns="columns"
              :filter="filter"
              :pagination="initialPagination"
              no-data-label="I didn't find anything for you"
              row-key="name"
              style="max-width: 100%;"
              separator="cell">

              <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>
            </q-table>

          </q-tab-panel>
        </q-tab-panels>

  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useBettingTipsStore } from '../../../stores/betting-store';

const filter = ref('');
const tab = ref('tomorrow');

const bettingTipsStore = useBettingTipsStore();

const initialPagination = {
  sortBy: 'desc',
  descending: false,
  rowsPerPage: 15,
  // rowsNumber: xx if getting data from a server
};

const columns = [
  {
    name: 'DATE_BAH', label: 'Datetime', field: 'DATE_BAH', align: 'left', sortable: true,
  },
  {
    name: 'HOST_NAME', label: 'Home', field: 'HOST_NAME', align: 'left', sortable: true,
  },
  {
    name: 'GUEST_NAME', label: 'Away', field: 'GUEST_NAME', align: 'left', sortable: true,
  },
  {
    name: 'country', label: 'Country', field: 'country', align: 'left', sortable: true,
  },
  {
    name: 'league', label: 'League', field: 'league', align: 'left', sortable: true,
  },
  {
    name: 'Predicted_Host_SC', label: 'H Pred', field: 'Predicted_Host_SC', align: 'left', sortable: true,
  },
  {
    name: 'Predicted_Guest_SC', label: 'A Pred', field: 'Predicted_Guest_SC', align: 'left', sortable: true,
  },
  {
    name: 'Predicted_result', label: 'Res Pred', field: 'Predicted_result', align: 'left', sortable: true,
  },
  {
    name: 'host_sc_pr', label: 'Tip_1', field: 'host_sc_pr', align: 'left', sortable: true,
  },
  {
    name: 'guest_sc_pr', label: 'Tip_2', field: 'guest_sc_pr', align: 'left', sortable: true,
  },
  {
    name: 'Pred_1', label: 'Pred_1', field: 'Pred_1', align: 'left', sortable: true,
  },
  {
    name: 'Pred_X', label: 'Pred_X', field: 'Pred_X', align: 'left', sortable: true,
  },
  {
    name: 'Pred_2', label: 'Pred_2', field: 'Pred_2', align: 'left', sortable: true,
  },
  {
    name: 'goalsavg', label: 'goalsavg', field: 'goalsavg', align: 'left', sortable: true,
  },
  {
    name: 'Host_Perfom', label: 'H Perf', field: 'Host_Perfom', align: 'left', sortable: true,
  },
  {
    name: 'Host_Concede', label: 'H Con', field: 'Host_Concede', align: 'left', sortable: true,
  },
  {
    name: 'Guest_Perfom', label: 'A Perf', field: 'Guest_Perfom', align: 'left', sortable: true,
  },
  {
    name: 'Guest_Concede', label: 'A Con', field: 'Guest_Concede', align: 'left', sortable: true,
  },
  {
    name: 'home_win', label: 'HW', field: 'home_win', align: 'left', sortable: true,
  },
  {
    name: 'away_win', label: 'AW', field: 'away_win', align: 'left', sortable: true,
  },
  {
    name: 'over_25', label: 'O1.5', field: 'over_25', align: 'left', sortable: true,
  },
  {
    name: 'under_25', label: 'U3.5', field: 'under_25', align: 'left', sortable: true,
  },
  {
    name: 'btts', label: 'BTTS', field: 'btts', align: 'left', sortable: true,
  },
  {
    name: 'home_over_15', label: 'HO 0.5', field: 'home_over_15', align: 'left', sortable: true,
  },
  {
    name: 'away_over_15', label: 'AO 0.5', field: 'away_over_15', align: 'left', sortable: true,
  },
  {
    name: 'home_draw', label: '1X', field: 'home_draw', align: 'left', sortable: true,
  },
  {
    name: 'away_draw', label: '2X', field: 'away_draw', align: 'left', sortable: true,
  },
];
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 100%

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #1976D2

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px

.my-sticky-column-table
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  max-width: 600px

  thead tr:nth-child(2) th:nth-child(2),
  thead tr:nth-child(3) th:nth-child(3)
    /* bg color is important for th; just specify one */
    background-color: #1976D2

  td:nth-child(2),
  td:nth-child(3)
    background-color: #1976D2

  th:nth-child(2),
  td:nth-child(2)
    position: sticky
    left: 0
    z-index: 1

  th:nth-child(3),
  td:nth-child(3)
    position: sticky
    left: calc(100px + 50px)
    z-index: 1

</style>
