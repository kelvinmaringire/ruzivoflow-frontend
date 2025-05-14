<!-- src/components/NodeContextMenu.vue -->
<template>
  <q-dialog :model-value="modelValue"  @update:model-value="$emit('update:modelValue', $event)">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ nodeItem.name }}</div>
      </q-card-section>
      <q-list bordered separator>
        <q-item clickable v-ripple @click="$emit('rename', nodeItem)">
          <q-item-section>Rename</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$emit('delete', nodeItem)">
          <q-item-section>Delete</q-item-section>
        </q-item>
      </q-list>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  modelValue: Boolean,
  nodeItem: Object,
});

// const contextMenu = ref(false);

defineEmits(['update:modelValue', 'rename', 'delete']);

</script>
