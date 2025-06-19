<template>
  <q-page class="dashboard-page q-pa-md">
    <!-- Hero Section with Gradient Background -->
    <div class="hero-section text-white q-pa-xl text-center rounded-borders">
      <div class="hero-content">
        <h1 class="text-h3 q-mb-sm">Welcome back!</h1>
        <p class="text-h5 q-mb-lg">Ready to create something amazing with your data?</p>
        <q-btn
          unelevated
          color="accent"
          label="Launch Workflow Editor"
          :to="{name: 'workflows'}"
          size="lg"
          icon-right="rocket"
          class="q-mt-md animate-pop"
          padding="12px 24px"
        />
      </div>
    </div>

    <!-- Dashboard Grid Layout -->
    <div class="dashboard-grid q-mt-lg">
      <!-- Quick Actions Card -->
      <q-card class="quick-actions-card">
        <q-card-section>
          <h2 class="text-h6 q-mb-md">Quick Actions</h2>
          <div class="row q-col-gutter-md">
            <div class="col-6" v-for="action in quickActions" :key="action.label">
              <q-btn
                :icon="action.icon"
                :label="action.label"
                :color="action.color"
                :to="action.to"
                class="full-width"
                stack
              />
            </div>
          </div>
        </q-card-section>
      </q-card>

      <!-- Stats Overview Card -->
      <q-card class="stats-card">
        <q-card-section>
          <h2 class="text-h6 q-mb-md">Your Data at a Glance</h2>
          <div class="row">
            <div class="col-4" v-for="stat in stats" :key="stat.title">
              <div class="text-center q-pa-sm">
                <div class="text-h4 text-weight-bold" :class="`text-${stat.color}`">
                  {{ stat.value }}
                </div>
                <div class="text-caption text-grey-7">{{ stat.title }}</div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <!-- Recent Activity Card -->
      <q-card class="activity-card">
        <q-card-section>
          <div class="row items-center justify-between">
            <h2 class="text-h6 q-mb-none">Recent Activity</h2>
            <q-btn flat dense icon="more_vert" round />
          </div>
          <q-separator class="q-my-md" />
          <q-timeline color="secondary">
            <q-timeline-entry
              v-for="(event, index) in recentActivity"
              :key="index"
              :title="event.title"
              :subtitle="event.time"
              :icon="event.icon"
              :color="event.color"
            >
              <div>{{ event.description }}</div>
            </q-timeline-entry>
          </q-timeline>
        </q-card-section>
      </q-card>

      <!-- Workflow Templates Card -->
      <q-card class="templates-card">
        <q-card-section>
          <h2 class="text-h6 q-mb-md">Suggested Templates</h2>
          <div class="row q-col-gutter-md">
            <div class="col-6 col-md-3" v-for="template in templates" :key="template.name">
              <q-card class="template-card cursor-pointer" @click="useTemplate(template)">
                <q-img :src="template.image" ratio="1">
                  <div class="absolute-bottom template-label">
                    {{ template.name }}
                  </div>
                </q-img>
              </q-card>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Sample data - replace with real data from your store
const quickActions = ref([
  {
    label: 'New Workflow', icon: 'add', color: 'primary', to: { name: 'workflow-new' },
  },
  {
    label: 'Import Data', icon: 'upload', color: 'info', to: { name: 'data-import' },
  },
  {
    label: 'Scheduled Jobs', icon: 'schedule', color: 'warning', to: { name: 'schedules' },
  },
  {
    label: 'Team Members', icon: 'people', color: 'positive', to: { name: 'team' },
  },
]);

const stats = ref([
  { title: 'Active Workflows', value: '8', color: 'primary' },
  { title: 'Data Sources', value: '5', color: 'info' },
  { title: 'Processed Today', value: '1.2K', color: 'positive' },
  { title: 'Errors', value: '3', color: 'negative' },
]);

const recentActivity = ref([
  {
    title: 'Workflow Completed',
    description: 'Customer Data Pipeline finished processing',
    time: '10 minutes ago',
    icon: 'check_circle',
    color: 'positive',
  },
  {
    title: 'New Workflow Created',
    description: 'You started "Monthly Sales Report"',
    time: '2 hours ago',
    icon: 'create',
    color: 'info',
  },
  {
    title: 'Data Source Added',
    description: 'Connected to Shopify API',
    time: 'Yesterday',
    icon: 'cloud',
    color: 'primary',
  },
]);

const templates = ref([
  {
    name: 'ETL Pipeline',
    image: 'https://cdn.quasar.dev/img/etl-pipeline.jpg',
    description: 'Extract, transform and load data from multiple sources',
  },
  {
    name: 'Web Scraper',
    image: 'https://cdn.quasar.dev/img/web-scraper.jpg',
    description: 'Collect data from websites automatically',
  },
  {
    name: 'Data Dashboard',
    image: 'https://cdn.quasar.dev/img/data-dashboard.jpg',
    description: 'Visualize your processed data',
  },
  {
    name: 'API Integrator',
    image: 'https://cdn.quasar.dev/img/api-integrator.jpg',
    description: 'Connect multiple APIs together',
  },
]);

function useTemplate(template) {
  // In a real app, this would create a new workflow from the template
  console.log('Using template:', template.name);
  router.push({ name: 'workflow-new', query: { template: template.name } });
}
</script>

<style lang="scss" scoped>
.dashboard-page {
  max-width: 1400px;
  margin: 0 auto;
}

.hero-section {
  background: linear-gradient(135deg, var(--q-primary) 0%, #3a7bd5 100%);
  margin-bottom: 24px;

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;

  .quick-actions-card {
    grid-column: span 12;
    grid-row: 1;
  }

  .stats-card {
    grid-column: span 12;
    grid-row: 2;
  }

  .activity-card {
    grid-column: span 12;
    grid-row: 3;
  }

  .templates-card {
    grid-column: span 12;
    grid-row: 4;
  }

  @media (min-width: $breakpoint-md) {
    .quick-actions-card {
      grid-column: span 6;
      grid-row: 1;
    }

    .stats-card {
      grid-column: span 6;
      grid-row: 1;
    }

    .activity-card {
      grid-column: span 8;
      grid-row: 2;
    }

    .templates-card {
      grid-column: span 4;
      grid-row: 2;
    }
  }
}

.template-card {
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  .template-label {
    background: rgba(0, 0, 0, 0.6);
    padding: 8px;
    color: white;
  }
}

.animate-pop {
  animation: pop 0.3s ease;
}

@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>
