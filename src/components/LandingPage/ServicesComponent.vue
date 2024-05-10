<template>
    <section id="services">
      <div class="row flex flex-center q-my-lg">
        <div class="section-title q-pa-md"> {{ homepage.services_title }} </div>
      </div>
      <div class="row">
        <div class="column" v-for="service in homepage.services" :key="service.id">
          <div class="card">
            <div class="icon-wrapper">
              <q-icon :name="service.value.icon" />
            </div>
            <h3 class="service-title">{{service.value.title}}</h3>
            <span v-html="service.value.subtitle"></span>
          </div>
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

<style>
.row {
  display: flex;
  flex-wrap: wrap;
}
.column {
  width: 100%;
  padding: 0 1em 1em 1em;
  text-align: center;
}
.card {
  width: 100%;
  height: 100%;
  padding: 2em 1.5em;
  background: linear-gradient(#ffffff 50%, #ff9800 50%);
  background-size: 100% 200%;
  background-position: 0 2.5%;
  border-radius: 50px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: 0.5s;
}
.service-title {
  font-size: 20px;
  font-weight: 600;
  color: #ff9800;
  margin: 1em 0;
}
p[data-block-key="fazw0"] {
  color: #575a7b;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.03em;
}
.icon-wrapper {
  background-color: #ff9800;
  position: relative;
  margin: auto;
  font-size: 30px;
  height: 2.5em;
  width: 2.5em;
  color: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.5s;
}
.card:hover {
  background-position: 0 100%;
}
.card:hover .icon-wrapper {
  background-color: #ffffff;
  color: #ff9800;
}
.card:hover h3 {
  color: #ffffff;
}
.card:hover p {
  color: #f0f0f0;
}
@media screen and (min-width: 768px) {
  section {
    padding: 0 2em;
  }
  .column {
    flex: 0 50%;
    max-width: 50%;
  }
}
@media screen and (min-width: 992px) {
  section {
    padding: 1em 3em;
  }
  .column {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
}

</style>
