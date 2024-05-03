<template>
  <q-page>

    <HeroComponent></HeroComponent>

    <ServicesComponent></ServicesComponent>

    <LandingPageComponent></LandingPageComponent>

  </q-page>
</template>

<script setup>

import HeroComponent from 'components/LandingPage/HeroComponent.vue';
import ServicesComponent from 'components/LandingPage/ServicesComponent.vue';
import LandingPageComponent from 'components/LandingPage/LandingPageComponent.vue';

defineOptions({
  name: 'IndexPage',
});
</script>

<style>

.section-title {
  font-size: 50px;
  font-weight: 500;
  background-image: linear-gradient(to bottom, #FF9800, #e3dcd3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

</style>
