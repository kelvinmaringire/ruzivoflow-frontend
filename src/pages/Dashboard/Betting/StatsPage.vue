<template>
  <q-page padding>

    <div class="row q-col-gutter-md q-mb-md">

      <div class="col-12 col-md">
          <q-card
            class="my-card"
          >
            <q-card-section>
              <div class="text-h6 flex flex-center text-info">Home Win</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-list dense separator>
                <q-item dense>
                  <q-item-section class="justify-start">Number of games</q-item-section>
                  <q-item-section class="justify-end">
                  {{bettingTipsStore.yesterday_stats.home_win_len}}</q-item-section>
                </q-item>

                <q-item dense>
                  <q-item-section class="justify-start">Winning Percentage</q-item-section>
                  <q-item-section class="justify-end">
                  {{bettingTipsStore.yesterday_stats.home_win_percentage}}%</q-item-section>
                </q-item>

              </q-list>
            </q-card-section>
          </q-card>
      </div>

      <div class="col-12 col-md">
        <q-card
            class="my-card"
          >
            <q-card-section>
              <div class="text-h6 flex flex-center text-info">Away Win</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-list dense separator>
                <q-item dense>
                  <q-item-section>Number of games</q-item-section>
                  <q-item-section>
                  {{bettingTipsStore.yesterday_stats.away_win_len}}</q-item-section>
                </q-item>

                <q-item dense>
                  <q-item-section class="justify-start">Winning Percentage</q-item-section>
                  <q-item-section class="justify-end">
                  {{bettingTipsStore.yesterday_stats.away_win_percentage}}%</q-item-section>
                </q-item>

              </q-list>
            </q-card-section>
          </q-card>
      </div>

      <div class="col-12 col-md">
        <q-card
            class="my-card"
          >
            <q-card-section>
              <div class="text-h6 flex flex-center text-info">Over 2.5</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-list dense separator>
                <q-item dense>
                  <q-item-section>Number of games</q-item-section>
                  <q-item-section>
                  {{bettingTipsStore.yesterday_stats.over_25_len}}</q-item-section>
                </q-item>

                <q-item dense>
                  <q-item-section>Winning Percentage</q-item-section>
                  <q-item-section>
                  {{bettingTipsStore.yesterday_stats.over_25_percentage}}%</q-item-section>
                </q-item>

              </q-list>
            </q-card-section>
          </q-card>
      </div>

    </div>

    <div class="row q-col-gutter-md q-mb-md">

      <div class="col-12 col-md">
          <q-card
            class="my-card"
          >
            <q-card-section>
              <div class="text-h6 flex flex-center text-info">Under 2.5</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-list dense separator>
                <q-item dense>
                  <q-item-section class="justify-start">Number of games</q-item-section>
                  <q-item-section class="justify-end">
                  {{bettingTipsStore.yesterday_stats.under_25_len}}</q-item-section>
                </q-item>

                <q-item dense>
                  <q-item-section class="justify-start">Winning Percentage</q-item-section>
                  <q-item-section class="justify-end">
                  {{bettingTipsStore.yesterday_stats.under_25_percentage}}%</q-item-section>
                </q-item>

              </q-list>
            </q-card-section>
          </q-card>
      </div>

      <div class="col-12 col-md">
        <q-card
            class="my-card"
          >
            <q-card-section>
              <div class="text-h6 flex flex-center text-info">BTTS</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-list dense separator>
                <q-item dense>
                  <q-item-section>Number of games</q-item-section>
                  <q-item-section>
                  {{bettingTipsStore.yesterday_stats.btts_len}}</q-item-section>
                </q-item>

                <q-item dense>
                  <q-item-section class="justify-start">Winning Percentage</q-item-section>
                  <q-item-section class="justify-end">
                  {{bettingTipsStore.yesterday_stats.btts_percentage}}%</q-item-section>
                </q-item>

              </q-list>
            </q-card-section>
          </q-card>
      </div>

      <div class="col-12 col-md">
        <q-card
            class="my-card"
          >
            <q-card-section>
              <div class="text-h6 flex flex-center text-info">Home Over 1.5</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-list dense separator>
                <q-item dense>
                  <q-item-section>Number of games</q-item-section>
                  <q-item-section>
                  {{bettingTipsStore.yesterday_stats.home_over_15_len}}</q-item-section>
                </q-item>

                <q-item dense>
                  <q-item-section>Winning Percentage</q-item-section>
                  <q-item-section>
                  {{bettingTipsStore.yesterday_stats.home_over_15_percentage}}%</q-item-section>
                </q-item>

              </q-list>
            </q-card-section>
          </q-card>
      </div>

    </div>

    <div class="row q-col-gutter-md">

    <div class="col-12 col-md">
        <q-card
          class="my-card"
        >
          <q-card-section>
            <div class="text-h6 flex flex-center text-info">Away Over 1.5</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-list dense separator>
              <q-item dense>
                <q-item-section class="justify-start">Number of games</q-item-section>
                <q-item-section class="justify-end">
                {{bettingTipsStore.yesterday_stats.away_over_15_len}}</q-item-section>
              </q-item>

              <q-item dense>
                <q-item-section class="justify-start">Winning Percentage</q-item-section>
                <q-item-section class="justify-end">
                {{bettingTipsStore.yesterday_stats.away_over_15_percentage}}%</q-item-section>
              </q-item>

            </q-list>
          </q-card-section>
        </q-card>
    </div>

    <div class="col-12 col-md">
      <q-card
          class="my-card"
        >
          <q-card-section>
            <div class="text-h6 flex flex-center text-info">Home or Draw</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-list dense separator>
              <q-item dense>
                <q-item-section>Number of games</q-item-section>
                <q-item-section>
                {{bettingTipsStore.yesterday_stats.home_draw_len}}</q-item-section>
              </q-item>

              <q-item dense>
                <q-item-section class="justify-start">Winning Percentage</q-item-section>
                <q-item-section class="justify-end">
                {{bettingTipsStore.yesterday_stats.home_draw_percentage}}%</q-item-section>
              </q-item>

            </q-list>
          </q-card-section>
        </q-card>
    </div>

    <div class="col-12 col-md">
      <q-card
          class="my-card"
        >
          <q-card-section>
            <div class="text-h6 flex flex-center text-info">Away or Draw</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-list dense separator>
              <q-item dense>
                <q-item-section>Number of games</q-item-section>
                <q-item-section>
                {{bettingTipsStore.yesterday_stats.away_draw_len}}</q-item-section>
              </q-item>

              <q-item dense>
                <q-item-section>Winning Percentage</q-item-section>
                <q-item-section>
                {{bettingTipsStore.yesterday_stats.away_draw_percentage}}%</q-item-section>
              </q-item>

            </q-list>
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
