<!-- src/components/NodeContextMenu.vue -->
<template>
  <div>
    <q-file
      v-model="file"
      label="Pick a Excel file"
      filled
      style="max-width: 300px"
    />
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

defineProps({
  nodeItem: Object,
});

const file = ref(null);

</script>
