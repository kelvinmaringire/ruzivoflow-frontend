<template>
  <div class="q-pa-md">
    <div class="row items-center q-gutter-sm">
      <q-file
        v-model="file"
        label="Pick a CSV file"
        filled
        class="col"
      />

      <q-btn
        color="primary"
        label="Send"
        :disable="!file"
        @click="handleSend"
        class="q-ml-sm"
      />
    </div>
    <div v-if="nodeItem.response_data.html_table" class="table-container">
      <div v-html="sanitizedTable"></div>
    </div>

    <!-- Display statistics -->
    <div v-if="nodeItem.response_data.stats" class="q-mt-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">Dataset Statistics</div>
          <div>Total Rows: {{ nodeItem.response_data.stats.rows }}</div>
          <div>Total Columns: {{ nodeItem.response_data.stats.columns }}</div>
          <div>Column Names: {{ nodeItem.response_data.stats.column_names.join(', ') }}</div>
        </q-card-section>
      </q-card>
    </div>

  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';
import DOMPurify from 'dompurify';
import { useEditorStore } from 'src/stores/editor-store';

const props = defineProps({
  nodeItemId: Number,
});

const editorStore = useEditorStore();

const file = ref(null);
const formData = ref({
  file_id: 27,
  node_item_id: props.nodeItemId,
});

// eslint-disable-next-line max-len
const nodeItem = computed(() => editorStore.node_items.find((item) => item.id === props.nodeItemId));

// Sanitize the HTML table to prevent XSS attacks
const sanitizedTable = computed(() => DOMPurify.sanitize(nodeItem.value.response_data.html_table));

async function handleSend() {
  if (file.value) {
    nodeItem.value.formData = formData.value;
    await editorStore.editNodeItemFormData(nodeItem.value);
  }
}
</script>

<style scoped>
.q-ml-sm {
  margin-left: 8px;
}

.table-container {
  overflow-x: auto;
  max-width: 100%;
  margin-bottom: 20px;
  background-color: #273238;
  color: white;
}

/* Style the table to match your dark theme */
.table-container :deep(table) {
  width: 100%;
  border-collapse: collapse;
  background-color: #273238;
  color: white;
}

.table-container :deep(th),
.table-container :deep(td) {
  padding: 8px 12px;
  border: 1px solid #465a65;
}

.table-container :deep(thead) {
  background-color: #36474f;
  color: white;
}

.table-container :deep(tr:nth-child(even)) {
  background-color: #2e3a41;
}
</style>
