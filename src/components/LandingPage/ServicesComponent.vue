<template>
  <section id="services" class="q-pa-lg">
    <div class="text-center q-mb-xl">
      <h2 class="section-title text-h4 text-weight-bold q-mb-md">
        {{ homepage.services_title }}
      </h2>
      <p class="section-subtitle">
        {{ homepage.services_subtitle }}
      </p>
    </div>

    <div class="row q-col-gutter-lg justify-center">
      <div
        class="col-12 col-sm-6 col-md-4"
        v-for="service in homepage.services"
        :key="service.id"
      >
        <q-card
          class="service-card cursor-pointer"
          bordered
          flat
        >
          <q-card-section class="text-center">
            <q-icon
              :name="service.value.icon"
              size="lg"
              class="service-icon"
              color="primary"
            />

            <h3 class="service-title text-h6 text-weight-bold q-mt-md q-mb-sm">
              {{ service.value.title }}
            </h3>

            <p class="service-description" v-html="service.value.subtitle"></p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useHomePageStore } from '../../stores/homepage-store';

defineOptions({
  name: 'ServicesComponent',
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

.service-card {
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(255, 152, 0, 0.2);
  background: rgba(255, 152, 0, 0.05);
}

.service-icon {
  background: rgba(255, 152, 0, 0.1);
  padding: 16px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background: rgba(255, 152, 0, 0.2);
  transform: scale(1.1);
}

.service-title {
  color: white;
  transition: all 0.3s ease;
}

.service-card:hover .service-title {
  color: #FF9800;
}

.service-description {
  font-size: 0.9rem;
  line-height: 1.6;
  transition: all 0.3s ease;
}

.service-card:hover .service-description {
  color: rgba(255, 255, 255, 0.8);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .section-title {
    font-size: 45px;
  }

  .service-card {
    padding: 16px;
  }
}
</style>
