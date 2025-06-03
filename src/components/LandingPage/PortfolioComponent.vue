<template>
  <section id="portfolio" class="q-pa-xl">
    <div class="text-center q-mb-xl">
      <h2 class="section-title text-h4 text-weight-bold q-mb-md">Portfolio</h2>
      <p class="section-subtitle">See our successful projects and client solutions</p>
    </div>

    <div class="row q-col-gutter-lg justify-center">
      <div
        class="col-12 col-sm-6 col-md-4"
        v-for="(project, index) in portfolioItems"
        :key="index"
      >
        <q-card class="portfolio-card">
          <q-img
            :src="project.image"
            :alt="project.name"
            ratio="16/9"
            class="portfolio-image"
          >
            <div class="absolute-bottom text-subtitle2 text-center">
              {{ project.platform }}
            </div>
          </q-img>

        <q-card-section>
          <div class="row items-center q-mb-sm">
            <q-avatar size="40px">
              <img :src="project.clientLogo">
            </q-avatar>
            <div class="text-h6 q-ml-sm">{{ project.client }}</div>
          </div>

          <h3 class="text-h6 text-weight-bold q-mt-none">{{ project.name }}</h3>
          <p class="text-grey-7">{{ project.description }}</p>

          <div class="q-mt-md row q-gutter-sm">
            <q-chip
              v-for="(tech, techIndex) in project.technologies"
              :key="techIndex"
              class="custom-chip"
              color="white"
              text-color="primary"
              outline
              dense
            >
              {{ tech }}
            </q-chip>
          </div>
        </q-card-section>

        <q-card-actions class="q-gutter-sm justify-center q-mt-md q-px-md q-pb-md">
          <q-btn
            v-if="project.websiteUrl"
            color="info"
            icon="open_in_new"
            label="Visit Website"
            :href="project.websiteUrl"
            target="_blank"
            class="custom-btn"
            unelevated
            rounded
            outline
          />
          <q-btn
            v-if="project.appStoreUrl"
            color="green-6"
            icon="android"
            label="Play Store"
            :href="project.appStoreUrl"
            target="_blank"
            class="custom-btn"
            unelevated
            rounded
          />
          <q-btn
            v-if="project.appleStoreUrl"
            color="black"
            icon="apple"
            label="App Store"
            :href="project.appleStoreUrl"
            target="_blank"
            class="custom-btn"
            unelevated
            rounded
          />
        </q-card-actions>

        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
const portfolioItems = [
  {
    name: 'E-Commerce Analytics Dashboard',
    client: 'ShopMaster',
    clientLogo: '/logos/shopmaster.png',
    image: '/projects/ecommerce-dash.jpg',
    platform: 'Web Application',
    description: 'Custom analytics platform for tracking sales, inventory and customer behavior across multiple stores.',
    technologies: ['Vue.js', 'Quasar', 'Node.js', 'MongoDB'],
    websiteUrl: 'https://shopmaster.example.com',
    appStoreUrl: null,
    appleStoreUrl: null,
    year: 2023,
  },
  {
    name: 'Mobile Banking App',
    client: 'First National Bank',
    clientLogo: '~assets/landing_page/github-sign.png',
    image: '/projects/banking-app.jpg',
    platform: 'Mobile Application',
    description: 'Secure banking application with biometric authentication and financial analytics features.',
    technologies: ['Flutter', 'Firebase', 'Node.js'],
    websiteUrl: null,
    appStoreUrl: 'https://play.google.com/store/apps/fnb',
    appleStoreUrl: 'https://apps.apple.com/us/app/fnb-banking/id123456',
    year: 2022,
  },
  {
    name: 'Mobile Banking App',
    client: 'First National Bank',
    clientLogo: '~assets/landing_page/github-sign.png',
    image: '/projects/banking-app.jpg',
    platform: 'Mobile Application',
    description: 'Secure banking application with biometric authentication and financial analytics features.',
    technologies: ['Flutter', 'Firebase', 'Node.js'],
    websiteUrl: null,
    appStoreUrl: 'https://play.google.com/store/apps/fnb',
    appleStoreUrl: 'https://apps.apple.com/us/app/fnb-banking/id123456',
    year: 2022,
  },
  // Add more projects as needed
];
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

.portfolio-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
}

.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.portfolio-image {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .section-title {
    font-size: 45px;
  }

  .portfolio-card {
    margin-bottom: 20px;
  }
}

.custom-chip {
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid #1976D2;
  border-radius: 16px;
  transition: background-color 0.3s, color 0.3s;
}
.custom-chip:hover {
  background-color: #E3F2FD;
  color: #0D47A1;
}

.custom-btn {
  min-width: 100px;
  font-weight: 400;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.custom-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

</style>
