/* eslint-disable */

<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';

defineOptions({
  name: 'App',
});

onMounted(() => {
  // eslint-disable-next-line no-var, camelcase, no-use-before-define
  var Tawk_API = Tawk_API || {}; const
    // eslint-disable-next-line camelcase, no-unused-vars
    Tawk_LoadStart = new Date();
  // eslint-disable-next-line func-names
  (function () {
    const s1 = document.createElement('script'); const s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/5db6c92e154bf74666b657b6/1ekj7uv1c';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  }());
});

</script>
