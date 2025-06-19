<template>
  <section id="contact" class="q-pa-lg">
    <div class="text-center q-mb-xl">
      <h2 class="section-title text-h4 text-weight-bold q-mb-md">
        {{ homepage.contact_title }}
      </h2>
      <p class="section-subtitle">
        {{ homepage.contact_subtitle }}
      </p>
    </div>

    <div class="row q-col-gutter-md">

      <!-- Contact Form -->
      <div class="col-12 col-md">
        <q-card>
          <q-card-section>
            <q-avatar color="primary" size="103px"
              class="absolute-center shadow-2" icon="contact_mail">
            </q-avatar>
          </q-card-section>

          <q-card-section>
            <q-form class="q-gutter-md q-pa-lg" @submit.prevent="onContact">
              <q-input label="Fullname" v-model="contactForm.fullname" />
              <q-input label="Email" type="email" v-model="contactForm.email" />
              <q-input label="Message" type="textarea" v-model="contactForm.message" />
              <div>
                <q-btn class="full-width" color="primary"
                  label="Send" type="submit" icon-right="send" rounded />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>

      <!-- Contact Info -->
      <div class="col-12 col-md">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h4">
              {{ homepage.contact_box_title }}
            </div>
          </q-card-section>

          <q-card-section class="text-h6 text-weight-light">
            <q-icon size="md" color="primary" name="place" class="q-mr-sm" />
            {{ homepage.contact_location }}
          </q-card-section>

          <q-card-section class="text-h6 text-weight-light">
            <q-icon size="md" color="primary" name="email" class="q-mr-sm" />
            {{ homepage.contact_email }}
          </q-card-section>

          <q-card-section class="text-h6 text-weight-light">
            <q-icon size="md" color="primary" name="call" class="q-mr-sm" />
            {{ homepage.contact_phone_number }}
          </q-card-section>

          <q-separator class="q-my-md" />

          <q-card-section class="q-pb-md">
            <div class="text-h5">
              Social Media Links
              <q-icon color="warning" name="share" class="q-mr-xs" />
              <q-icon color="warning" name="thumb_up_alt" />
            </div>
          </q-card-section>

          <q-card-section class="text-h6 q-pb-lg">
            <div class="row">
              <div class="col"
              v-for="(social_media, index) in homepage.social_media_items" :key="index">
                <a :href="social_media.link" target="_blank">
                  <img :src="social_media.image.image" :alt="social_media.image.name" />
                </a>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { useAuthStore } from '../../stores/auth-store';
import { useHomePageStore } from '../../stores/homepage-store';

const authStore = useAuthStore();
const $q = useQuasar();
const homePageStore = useHomePageStore();
const { homepage } = storeToRefs(homePageStore);

const contactForm = ref({
  fullname: '',
  email: '',
  message: '',
});

async function onContact() {
  if (!contactForm.value.fullname || !contactForm.value.email || !contactForm.value.message) {
    $q.notify({
      type: 'negative',
      message: 'The provided data is invalid.',
      position: 'top',
    });
  } else {
    try {
      await authStore.doContact(contactForm.value);

      $q.notify({
        type: 'positive',
        message: "Thank you for reaching out. We'll be in touch shortly.",
        position: 'top',
      });

      contactForm.value = {
        fullname: '',
        email: '',
        message: '',
      };
    } catch (err) {
      const detail = err?.response?.data?.detail || 'Something went wrong.';
      $q.notify({
        type: 'negative',
        message: detail,
        position: 'top',
      });
    }
  }
}
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
</style>
