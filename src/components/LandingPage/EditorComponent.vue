<template>
  <section id="editor" class="q-pa-lg">
    <div class="text-center q-mb-xl">
      <h2 class="section-title text-h4 text-weight-bold q-mb-md">
        {{ homepage.editor_title }}
      </h2>
      <p class="section-subtitle">
        {{ homepage.editor_subtitle }}
      </p>
    </div>

    <div class="row justify-center q-mb-xl">
      <div class="col-md-8 text-center">
        <p class="text-body1 text-grey-5">
         {{ homepage.editor_description }}
        </p>
      </div>
    </div>

    <div class="row q-mb-xl">
      <div class="col-12 text-center">
        <q-img
          :src="homepage.editor_top_image.image"
          :alt="homepage.editor_top_image.name"
          style="max-width: 800px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15)"
          class="q-mb-md"
        />
        <p class="text-caption">{{ homepage.editor_top_image_description }}</p>
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <div
        class="col-md-4 col-sm-6 col-xs-12"
        v-for="feature in homepage.features"
        :key="feature.id">
        <q-card class="feature-card">
          <q-card-section class="text-center">
            <q-icon :name="feature.value.icon" size="xl" color="orange" />
            <h3 class="text-h6 q-mt-sm q-mb-xs">{{ feature.value.title }}</h3>
            <p class="text-body2" v-html="feature.value.subtitle"></p>
          </q-card-section>
        </q-card>
      </div>

    </div>

    <div class="row justify-center q-mt-xl">
      <div class="col-md-8 text-center">
        <q-img
          :src="homepage.editor_bottom_image.image"
          :alt="homepage.editor_bottom_image.name"
          style="max-width: 800px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15)"
          class="q-mb-md"
        />
        <p class="text-caption">{{ homepage.editor_bottom_image_description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useHomePageStore } from '../../stores/homepage-store';

defineOptions({
  name: 'EditorComponent',
});

const homePageStore = useHomePageStore();
const { homepage } = storeToRefs(homePageStore);
</script>

<style scoped>
.section-title {
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #FF9800, #FFC107);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .section-title {
    font-size: 45px;
  }
}

.feature-card {
  height: 100%;
  transition: transform 0.3s ease;
  border-radius: 8px;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.feature-card h3 {
  color: #aeaeae;
}

</style>
