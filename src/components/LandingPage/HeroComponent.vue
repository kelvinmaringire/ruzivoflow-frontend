<template>

    <div class="row bg-dark" id="hero">

      <div class="col">
        <div style="max-width: 650px; margin-left: auto; margin-right: auto; display:block">
        <h1 class="hero-title q-mt-xl q-pt-xl q-px-lg">
        Data Centric Software Solutions </h1>
        <div class="text-h6 text-weight-light q-px-lg q-pb-sm">
        Our expertise spans Data Analytics, Machine Learning, Web Scraping,
        Web Development, Mobile App Development and Desktop App Development,
        With a focus on excellence, we bring your data to life, helping you make informed decisions.
        Let’s turn your data into a valuable asset for your business
        </div>
        <q-btn class="glossy q-ml-lg q-my-lg" rounded outline color="primary"
        label="Learn More" href="#services"/>
        <q-btn class="q-ml-sm q-my-lg" flat color="primary"
        label="Get Your Business Online Today!" href="#landing-page"/>
      </div>
    </div>
      <div class="col gt-sm q-mt-md">
        <q-img src="~assets/hero-img.svg"
        class="q-my-md animated"
        style="margin-left: auto;
        margin-right: auto;
        display: block;
        max-width: 750px;
        height: auto;">
        </q-img>
      </div>
    </div>

</template>

<script setup>

defineOptions({
  name: 'HeroComponent',
});
</script>

<style>

.hero-title {
  font-size: 70px;
  font-weight: 600;
  background-image: linear-gradient(to bottom, #FF9800, #e3dcd3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
#hero .animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-10px);
  }
}

</style>
