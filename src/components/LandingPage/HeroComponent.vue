<template>
  <div class="q-pa-xl bg-dark text-white" id="hero-section">
    <div class="row q-col-gutter-xl items-center">

      <!-- Left Column: Text Content -->
      <div class="col-12 col-md-6 flex flex-center">
        <div class="text-content q-px-md" style="max-width: 600px;">
          <div class="hero-title text-md-h2 q-mb-md">
            {{ homepage.heroTitle }}
          </div>
          <div class="hero-subtitle text-subtitle1 text-weight-light q-mb-lg"
          v-html="homepage.heroSubtitle"></div>

          <div class="q-gutter-sm q-mt-md">
            <q-btn
              rounded
              outline
              glossy
              color="primary"
              class="full-width full-width-sm"
              :label="homepage.heroOutlineButtonTitle"
              :href="homepage.heroOutlineButtonHref"
            />
            <q-btn
              flat
              rounded
              unelevated
              icon="arrow_forward"
              color="info"
              class="full-width full-width-sm"
              :label="homepage.heroFlatButtonTitle"
              :href="homepage.heroFlatButtonHref"
            />
          </div>
        </div>
      </div>

      <!-- Right Column: Hero Image -->
      <div class="col-12 col-md-6 flex flex-center q-mt-md q-mt-none-md">
        <q-img
          v-if="homepage.heroImage"
          :src="homepage.heroImage.image"
          :alt="homepage.heroImage.name"
          class="animated"
          style="max-width: 100%; height: auto;"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useHomePageStore } from '../../stores/homepage-store';

defineOptions({ name: 'HeroComponent' });

const homePageStore = useHomePageStore();
const { homepage } = storeToRefs(homePageStore);
</script>

<style scoped>
.hero-title {
  font-weight: 800;
  background-image: linear-gradient(to bottom, #FF9800, #e3dcd3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  line-height: 1.2;
  font-size: 30px; /* Mobile default (h4) */
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 60px; /* Desktop (h2) */
  }
}

.animated {
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

/* Responsive button styling */
.full-width-sm {
  width: 100%;
}
@media (min-width: 600px) {
  .full-width-sm {
    width: auto;
  }
}
</style>
