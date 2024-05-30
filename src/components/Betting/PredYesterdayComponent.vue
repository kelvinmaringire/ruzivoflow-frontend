<template>
  <div>
            <q-table
              dense
              title="Predictions (Yesterday)"
              class="my-sticky-header-table my-sticky-column-table"
              :rows="bettingTipsStore.yesterday.games"
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
    </div>
</template>

<script setup>
import { useBettingTipsStore } from '../../stores/betting-store';

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
