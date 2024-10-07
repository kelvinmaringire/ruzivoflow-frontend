<template>
    <div class="row flex flex-center q-my-lg" id="contact">
      <div class="section-title q-pa-md">Contact</div>
    </div>
    <div class="row q-ma-md q-col-gutter-md">

      <div class="col-12 col-md">
        <q-card>
       <q-card-section>
         <q-avatar color="primary" size="103px"
          class="absolute-center shadow-2" icon="contact_mail">
         </q-avatar>
       </q-card-section>
       <q-card-section>
       </q-card-section>
       <q-card-section>
         <q-form class="q-gutter-md q-pa-lg" @submit.prevent="onContact">
           <q-input label="Fullname" v-model="contactForm.fullname">
           </q-input>
           <q-input label="Email" type="email" v-model="contactForm.email">
           </q-input>
           <q-input label="Message" type="textarea" v-model="contactForm.message">
           </q-input>
           <div>
             <q-btn class="full-width" color="primary"
              label="Send" type="submit" icon-right="send" rounded>
             </q-btn>
           </div>
         </q-form>
       </q-card-section>
     </q-card>

      </div>

      <div class="col-12 col-md">

        <q-card class="my-card">
          <q-card-section>
            <div class="text-h4">Get in touch
              <q-icon color="warning" name="sentiment_very_satisfied" />
            </div>
          </q-card-section>

          <q-card-section class="text-h6 text-weight-light">
            <q-icon size="md" color="primary" name="place" class="q-mr-sm" />
            13 Long St, Hermanus, 7200, Western Cape, SA
          </q-card-section>

          <q-card-section class="text-h6 text-weight-light">
            <q-icon size="md" color="primary" name="email" class="q-mr-sm" /> info@thedatamine.io
          </q-card-section>

          <q-card-section class="text-h6 text-weight-light">
            <q-icon size="md" color="primary" name="call" class="q-mr-sm" /> +27 65 826 1000
          </q-card-section>

          <q-separator class="q-my-md"/>

          <q-card-section class="q-pb-md">
            <div class="text-h5">Social Media Links
              <q-icon color="warning" name="share" class="q-mr-xs"/>
              <q-icon color="warning" name="thumb_up_alt" />
            </div>
          </q-card-section>

          <q-card-section class="text-h6 q-pb-lg">
            <div class="row">
              <div class="col">
                <a href="https://www.facebook.com/thedatamine" target="_blank">
                  <img src="~assets/landing_page/facebook.png">
                </a>
              </div>
              <div class="col">
                <a href="https://www.instagram.com/thedatamine.io/" target="_blank">
                  <img src="~assets/landing_page/instagram.png">
                </a>
              </div>
              <div class="col">
                <a href="https://www.linkedin.com/company/thedatamine" target="_blank">
                  <img src="~assets/landing_page/linkedin.png">
                </a>
              </div>
              <div class="col">
                <a href="https://youtube.com/@thedatamineio" target="_blank">
                  <img src="~assets/landing_page/youtube.png">
                </a>
              </div>
              <div class="col">
                <a href="https://www.tiktok.com/@thedatamine.io" target="_blank">
                  <img src="~assets/landing_page/tiktok.png">
                </a>
              </div>
              <div class="col">
                <a href="https://github.com/kelvinmaringire/" target="_blank">
                  <img src="~assets/landing_page/github-sign.png">
                </a>
              </div>
            </div>
          </q-card-section>

        </q-card>

      </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useAuthStore } from '../../stores/auth-store';

const authStore = useAuthStore();
const $q = useQuasar();
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
    // Call the doLogin action from the Pinia store with the provided credentials
      await authStore.doContact(contactForm.value);

      $q.notify({
        type: 'positive',
        message: "Thank you for reaching out. We'll be in touch shortly",
        position: 'top',
      });

      contactForm.value = {
        fullname: '',
        email: '',
        message: '',
      };
    } catch (err) {
      if (err.response.data.detail) {
        $q.notify({
          type: 'negative',
          message: err.response.data.detail,
          position: 'top',
        });
      }
    }
  }
}

</script>
