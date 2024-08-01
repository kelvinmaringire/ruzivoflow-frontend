<template>
    <div class="row flex flex-center q-my-lg" id="landing-page">
      <div class="section-title q-pa-md"> {{homepage.landing_page_title}} </div>
    </div>

    <div class="row q-mb-xl">
      <div class="col-12 col-md">

        <div class="q-pa-md">
          <q-card class="my-card">

            <div class="row">

              <div class="col-12 col-md-4 q-pa-xs">
                <q-img v-if="homepage.landing_page_image" :src="homepage.landing_page_image.image"
                :alt="homepage.landing_page_image.name"></q-img>
              </div>
              <div class="col-12 col-md-8 q-pl-md q-pt-md">
                <div class="text-h3 text-bold  text-info">
                {{homepage.landing_page_box_title}}
                </div>
                <span class="q-pa-md" v-html="homepage.landing_page_box_subtitle"></span>
              </div>

            </div>

            <div class="row">

            <div class="col-12 col-md">

              <div class="q-pa-md">
                <q-card
                  class="my-card"
                >
                <a href="https://yozriner.com/" class="text-info" target="_blank">
                  <q-img src="../../assets/landing_page/yozriner.png" :ratio="16/9"/>
                </a>
                </q-card>
              </div>

            </div>

            <div class="col-12 col-md">

            <div class="q-pa-md">
              <q-card class="my-card">
                <a href="https://nattiesbeautycreations.com/" class="text-info" target="_blank">
                  <q-img src="../../assets/landing_page/nattiesbeautycreations.png" :ratio="16/9"/>
                </a>

              </q-card>
            </div>

            </div>

            <div class="col-12 col-md">

            <div class="q-pa-md">
              <q-card class="my-card">
                <a href="https://whalebergmotor.thedatamine.io/" class="text-info" target="_blank">
                  <q-img src="../../assets/landing_page/whalebergmotors.png" :ratio="16/9"/>
                </a>
              </q-card>
            </div>

            </div>

            </div>

          </q-card>
  </div>

      </div>
    </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useHomePageStore } from '../../stores/homepage-store';

defineOptions({
  name: 'LandingPageComponent',
});

const homePageStore = useHomePageStore();

const { homepage } = storeToRefs(homePageStore);

</script>
