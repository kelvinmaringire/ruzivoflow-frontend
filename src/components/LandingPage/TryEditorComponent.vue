<template>
  <section id="try" class="q-pa-lg">
    <div class="text-center q-mb-xl">
      <h2 class="section-title text-h4 text-weight-bold q-mb-md">
        Try Ruzivo Flow Node Editor 🚀
      </h2>
      <p class="section-subtitle text-body1 q-mb-md">
        Experience the power of our no-code/low-code data analytics platform
      </p>
      <p class="section-description text-body1 q-px-xl">
        Get started with our demo account to explore the Ruzivo Flow Node Editor! Use the credentials below to try out the platform. Since the demo account is shared by many users, we recommend creating your own account to save your workflows securely and enjoy a personalized experience. 🔒
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
              <strong>Username:</strong> demo <br />
              <strong>Password:</strong> Demo123!
            </p>
            <q-btn
              color="positive"
              label="Login to Demo Account"
              icon="login"
              size="md"
              class="q-mt-md"
              to="/login"
              unelevated
            />
            <q-separator class="q-my-md" />
            <p class="text-caption text-grey-7">
              This account is for demo purposes only and shared among multiple users. Your workflows may not be private.
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Call to Action Section -->
    <div class="text-center">
      <h3 class="text-h5 text-weight-bold q-mb-lg">Create Your Own Account 🌟</h3>
      <p class="text-body1 q-mb-md q-px-xl">
        Sign up for a free account to save your workflows, access advanced features, and keep your data secure.
      </p>
      <q-btn
        color="info"
        label="Sign Up Now"
        icon="person_add"
        size="lg"
        class="q-mt-md"
        to="/signup"
        unelevated
        outline
      />
    </div>
  </section>
</template>

<script setup>
defineOptions({
  name: 'TryRuzivo',
});
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
