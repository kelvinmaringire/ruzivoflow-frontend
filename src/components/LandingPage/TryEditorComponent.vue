<template>
  <section id="try" class="q-pa-lg">
    <div class="text-center q-mb-xl">
      <h2 class="section-title text-h4 text-weight-bold q-mb-md">
        {{ homepage.try_editor_title }}
      </h2>
      <p class="section-subtitle text-body1 q-mb-md">
        {{ homepage.try_editor_subtitle }}
      </p>
      <p class="section-description text-body1 q-px-xl">
        {{ homepage.try_editor_description }}
      </p>
    </div>

    <!-- Demo Credentials Section -->
    <div class="row q-col-gutter-lg q-mb-xl justify-center">
      <div class="col-12 col-md-6">
        <q-card flat class="demo-card q-pa-md text-center">
          <q-card-section>
            <q-icon name="login" size="48px" class="q-mb-md" color="primary" />
            <h4 class="text-h6 text-weight-bold q-mb-sm">Demo Account</h4>
            <p class="text-body2">
              <strong>Username:</strong> {{ homepage.try_editor_username }} <br />
              <strong>Password:</strong> {{ homepage.try_editor_password }}
            </p>
            <q-btn
              color="positive"
              label="Login to Demo Account"
              icon="login"
              size="md"
              class="q-mt-md"
              :to="{name: 'login'}"
              v-if="!isAuthenticated"
              unelevated
            />
            <q-btn
              color="primary"
              label="Go to Demo Account"
              icon="login"
              size="md"
              class="q-mt-md"
              :to="{name: 'workflows'}"
              v-if="isAuthenticated"
              unelevated
              outline
            />
            <q-separator class="q-my-md" />
            <p class="text-caption text-grey-7">
              {{ homepage.try_editor_subtitle_box }}
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Call to Action Section -->
    <div class="text-center" v-if="!isAuthenticated">
      <h3 class="text-h5 text-weight-bold q-mb-lg">Create Your Own Account 🌟</h3>
      <p class="text-body1 q-mb-md q-px-xl">
        {{ homepage.try_editor_subtitle_signup }}
      </p>
      <q-btn
        color="info"
        label="Sign Up Now"
        icon="person_add"
        size="lg"
        class="q-mt-md"
        :to="{name: 'register'}"
        unelevated
        outline
      />
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useHomePageStore } from '../../stores/homepage-store';
import { useAuthStore } from '../../stores/auth-store';

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

defineOptions({
  name: 'TryEditorComponent',
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
    font-size: 20px;
  }

}

.section-subtitle {
  color: #757575;
}

.section-description {
  max-width: 800px;
  margin: 0 auto;
}

.demo-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.demo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
