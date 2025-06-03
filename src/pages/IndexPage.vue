<template>
  <q-page>

    <HeroComponent></HeroComponent>

    <ServicesComponent></ServicesComponent>

    <EditorComponent></EditorComponent>

    <TryEditorComponent></TryEditorComponent>

    <PortfolioComponent></PortfolioComponent>

    <ContactUsComponent></ContactUsComponent>

  </q-page>
</template>

<script setup>

import HeroComponent from 'components/LandingPage/HeroComponent.vue';
import ServicesComponent from 'components/LandingPage/ServicesComponent.vue';
import EditorComponent from 'components/LandingPage/EditorComponent.vue';
import TryEditorComponent from 'components/LandingPage/TryEditorComponent.vue';
import PortfolioComponent from 'src/components/LandingPage/PortfolioComponent.vue';
import ContactUsComponent from 'components/LandingPage/ContactUsComponent.vue';

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
