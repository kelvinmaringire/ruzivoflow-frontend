<template>
  <q-page padding>

    <div class="row q-col-gutter-md q-mb-md">

      <div class="col-12 col-md">
        <q-card class="q-dialog-plugin">
        <q-card-section>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Home Win <q-badge color="white" text-color="black"
              :label="bettingTipsStore.yesterday_stats.home_win_len" class="q-mr-sm" /></div>
            <div class="col-auto">{{bettingTipsStore.yesterday_stats.home_win_percentage}}%</div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Away Win <q-badge color="white" text-color="black"
              :label="bettingTipsStore.yesterday_stats.away_win_len" class="q-mr-sm" /></div>
            <div class="col-auto">{{bettingTipsStore.yesterday_stats.away_win_percentage}}%</div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">BTTS Yes <q-badge color="white" text-color="black"
              :label="bettingTipsStore.yesterday_stats.btts_len" class="q-mr-sm" /></div>
            <div class="col-auto">{{bettingTipsStore.yesterday_stats.btts_percentage}}%</div>
          </div>
          <q-separator color="orange" />

        </q-card-section>
      </q-card>
      </div>

      <div class="col-12 col-md">
        <q-card class="q-dialog-plugin">
        <q-card-section>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Over 1.5 <q-badge color="white" text-color="black"
              :label="bettingTipsStore.yesterday_stats.over_25_len" class="q-mr-sm" /></div>
            <div class="col-auto">{{bettingTipsStore.yesterday_stats.over_25_percentage}}%</div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Under 3.5 <q-badge color="white" text-color="black"
              :label="bettingTipsStore.yesterday_stats.under_25_len" class="q-mr-sm" /></div>
            <div class="col-auto">{{bettingTipsStore.yesterday_stats.under_25_percentage}}%</div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Home Over 0.5 <q-badge color="white" text-color="black"
              :label="bettingTipsStore.yesterday_stats.home_over_15_len" class="q-mr-sm" /></div>
            <div class="col-auto">
              {{bettingTipsStore.yesterday_stats.home_over_15_percentage}}%
              </div>
          </div>
          <q-separator color="orange" />

        </q-card-section>
      </q-card>
      </div>

      <div class="col-12 col-md">
        <q-card class="q-dialog-plugin">
        <q-card-section>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Away Over 0.5 <q-badge color="white" text-color="black"
              :label="bettingTipsStore.yesterday_stats.away_over_15_len" class="q-mr-sm" /></div>
            <div class="col-auto">
            {{bettingTipsStore.yesterday_stats.away_over_15_percentage}}%
            </div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Home or Draw <q-badge color="white" text-color="black"
              :label="bettingTipsStore.yesterday_stats.home_draw_len" class="q-mr-sm" /></div>
            <div class="col-auto">
            {{bettingTipsStore.yesterday_stats.home_draw_percentage}}%
            </div>
          </div>
          <q-separator color="orange" />
          <div class="row justify-between q-pa-sm">
            <div class="col-auto">Away or Draw <q-badge color="white" text-color="black"
              :label="bettingTipsStore.yesterday_stats.away_draw_len" class="q-mr-sm" /></div>
            <div class="col-auto">{{bettingTipsStore.yesterday_stats.away_draw_percentage}}%</div>
          </div>
          <q-separator color="orange" />

        </q-card-section>
      </q-card>
      </div>

    </div>

  </q-page>
</template>

<script setup>
import { useBettingTipsStore } from '../../../stores/betting-store';

const bettingTipsStore = useBettingTipsStore();

</script>
