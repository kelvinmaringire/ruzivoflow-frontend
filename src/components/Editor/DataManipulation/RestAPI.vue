<!-- src/components/NodeContextMenu.vue -->
<template>
  <div>
    <q-file
      v-model="file"
      label="Pick a CSV file"
      filled
      style="max-width: 300px"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const file = ref(null);

defineProps({
  modelValue: Boolean,
  nodeItem: Object,
});

defineEmits(['update:modelValue', 'rename', 'delete']);

</script>
