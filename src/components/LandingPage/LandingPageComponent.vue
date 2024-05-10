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
                <q-img :src="landingPageImage"></q-img>
              </div>
              <div class="col-12 col-md-8 q-pl-md q-pt-md">
                <div class="text-h3 text-bold  text-info">
                {{homepage.landing_page_box_title}}
                </div>
                <span class="q-pa-md" v-html="homepage.landing_page_box_subtitle"></span>
              </div>

            </div>

          </q-card>
  </div>

      </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useHomePageStore } from '../../stores/homepage-store';

defineOptions({
  name: 'LandingPageComponent',
});

const homePageStore = useHomePageStore();

const { homepage } = storeToRefs(homePageStore);

const landingPageImage = computed(() => {
  const htmlUrl = homepage.value.meta.html_url;
  const downloadUrl = homepage.value.landing_page_image.meta.download_url;
  // Remove trailing slash from htmlUrl and leading slash from downloadUrl if present
  const cleanedHtmlUrl = htmlUrl.endsWith('/') ? htmlUrl.slice(0, -1) : htmlUrl;
  // const cleanedDownloadUrl = downloadUrl.startsWith('/') ? downloadUrl.slice(1) : downloadUrl;

  // Concatenate the cleaned URLs
  return cleanedHtmlUrl + downloadUrl;
});

</script>
