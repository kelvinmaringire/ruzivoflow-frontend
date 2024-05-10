<template>

    <div class="row bg-dark" id="hero-section">

      <div class="col">
        <div style="max-width: 650px; margin-left: auto; margin-right: auto; display:block">
        <h1 class="hero-title q-mt-xl q-pt-xl q-px-lg">
        {{ homepage.heroTitle }}</h1>
        <div class="text-h6 text-weight-light q-px-lg q-pb-sm" v-html="homepage.heroSubtitle">
        </div>
        <q-btn class="glossy q-ml-lg q-my-lg" rounded outline color="primary"
        :label="homepage.heroOutlineButtonTitle" :href="homepage.heroOutlineButtonHref"/>
        <q-btn class="q-ml-sm q-my-lg" flat color="primary"
        :label="homepage.heroFlatButtonTitle" :href="homepage.heroFlatButtonHref"/>
      </div>
    </div>
      <div class="col gt-sm q-mt-md">
        <q-img :src="heroImage"
        class="q-my-md animated"
        style="margin-left: auto;
        margin-right: auto;
        display: block;
        max-width: 750px;
        height: auto;">
        </q-img>
      </div>
    </div>

</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useHomePageStore } from '../../stores/homepage-store';

defineOptions({
  name: 'HeroComponent',
});

const homePageStore = useHomePageStore();

const { homepage } = storeToRefs(homePageStore);

const heroImage = computed(() => {
  const htmlUrl = homepage.value.meta.html_url;
  const downloadUrl = homepage.value.heroImage.meta.download_url;
  // Remove trailing slash from htmlUrl and leading slash from downloadUrl if present
  const cleanedHtmlUrl = htmlUrl.endsWith('/') ? htmlUrl.slice(0, -1) : htmlUrl;
  // const cleanedDownloadUrl = downloadUrl.startsWith('/') ? downloadUrl.slice(1) : downloadUrl;

  // Concatenate the cleaned URLs
  return cleanedHtmlUrl + downloadUrl;
});

</script>

<style>

.hero-title {
  font-size: 70px;
  font-weight: 600;
  background-image: linear-gradient(to bottom, #FF9800, #e3dcd3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
#hero-section .animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-10px);
  }
}

</style>
