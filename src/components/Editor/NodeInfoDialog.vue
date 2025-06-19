<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :maximized="maximizedToggle"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-grey-9 text-white">
      <q-bar class="bg-dark-page text-white">
        <q-space />
        <q-btn dense flat icon="minimize" @click="maximizedToggle = false"
        :disable="!maximizedToggle">
          <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
        </q-btn>
        <q-btn dense flat icon="crop_square" @click="maximizedToggle = true"
        :disable="maximizedToggle">
          <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
        </q-btn>
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h6">{{ nodeItem.name }}</div>
      </q-card-section>

      <component :is="getComponent()" :nodeItemId="nodeItem.id"/>

    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import ReadCSV from 'src/components/Editor/DataManipulation/ReadCSV.vue';
import ReadExcel from 'src/components/Editor/DataManipulation/ReadExcel.vue';
import RestAPI from 'src/components/Editor/DataManipulation/RestAPI.vue';
import ReadJSON from 'src/components/Editor/DataManipulation/ReadJSON.vue';

const props = defineProps({
  modelValue: Boolean,
  nodeItem: Object,
});

const maximizedToggle = ref(false); // Starts minimized

defineEmits(['update:modelValue']);

const componentMap = {
  'Read JSON': ReadJSON,
  'Read CSV': ReadCSV,
  'Read Excel': ReadExcel,
  'Rest API': RestAPI,
  // Add more mappings as needed
};

const getComponent = () => componentMap[props.nodeItem.original_name] || null;
</script>
