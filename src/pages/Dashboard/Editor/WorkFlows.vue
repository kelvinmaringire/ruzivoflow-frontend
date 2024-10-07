<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="text-h4">Workflows</div>
      </div>
      <div class="col">
        <!-- Add button (shown when form is hidden) -->
        <q-btn round color="positive" icon="add"
          class="q-mx-sm" v-show="!showForm" @click="showForm = true" />

        <!-- Remove button (shown when form is visible) -->
        <q-btn round color="warning" icon="remove"
          class="q-mx-sm" v-show="showForm" @click="showForm = false" />
      </div>
    </div>

  <!-- Form section, visible when showForm is true -->
  <q-form class="q-my-lg" v-show="showForm" @submit.prevent="createWorkflow"
    @reset="onReset">
    <div class="row q-col-gutter-md q-px-md">
      <div class="col-12 col-md-6">
        <q-input v-model="newWorkflow.name" label="Name" class="q-pr-xl" />
      </div>
      <div class="col-12 col-md-6">
        <q-input v-model="newWorkflow.description" label="Description" />
      </div>
    </div>
    <div class="q-mt-md q-px-md">
      <q-btn label="Submit" type="submit" color="primary"/>
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>

    <div class="q-mt-md">
      <q-table
      :rows="editorStore.workflows"
      :columns="columns"
      row-key="id">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            <div class="text-body1">{{ props.row.name }}</div>
          </q-td>
          <q-td key="view" :props="props">
            <q-btn
              @click="viewWorkflow(props.row)"
              color="secondary"
              flat
              icon="visibility"
            />
          </q-td>
          <q-td key="edit" :props="props">
            <q-btn
              @click="editWorkflow(props.row)"
              color="accent"
              flat
              icon="edit"
            />
          </q-td>
          <q-td key="delete" :props="props">
            <q-btn
              @click="deleteWorkflow(props.row)"
              color="negative"
              flat
              icon="delete"
            />
          </q-td>
          <q-td key="editor" :props="props">
            <q-btn
              :to="{ name: 'editor', params: { id: props.row.id } }"
              color="primary"
              flat
              icon="insights"
            />
          </q-td>

        </q-tr>
      </template>

      </q-table>
    </div>

    <q-dialog v-model="showViewWorkflow" backdrop-filter="blur(4px) saturate(150%)" >
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ currentWorkflow.name }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
           {{ currentWorkflow.description }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showEditWorkflow" backdrop-filter="blur(4px) saturate(150%)" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Edit Workflow</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form>
            <div class="row q-col-gutter-md q-px-md">
              <div class="col-12">
                <q-input v-model="currentWorkflow.name" label="Name" class="q-pr-xl" />
              </div>
              <div class="col-12">
                <q-input v-model="currentWorkflow.description" label="Description" />
              </div>
            </div>
          </q-form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Submit" type="submit" color="primary" @click="editWorkflowFunction"/>
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showDeleteWorkflow" backdrop-filter="blur(4px) saturate(150%)" >
      <q-card>
        <q-card-section>
          <div class="text-h6">Delete Workflow</div>
        </q-card-section>

        <q-card-section>

          Are you sure you want to delete the workflow
          <span class="text-negative text-weight-bolder">{{ currentWorkflow.name }}</span>?
          This will permanently remove all associated nodes, data, and connections.

          This action is irreversible.

        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Delete" color="negative" @click="deleteWorkflowFunction" />
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useEditorStore } from '../../../stores/editor-store';
import { useAuthStore } from '../../../stores/auth-store';

const authStore = useAuthStore();
const editorStore = useEditorStore();
const $q = useQuasar();
const newWorkflow = ref({
  name: '',
  description: '',
});
const showForm = ref(false);
const showViewWorkflow = ref(false);
const showEditWorkflow = ref(false);
const showDeleteWorkflow = ref(false);
const currentWorkflow = ref({});

const columns = [
  {
    name: 'name', align: 'center', label: 'NAME', field: 'name', sortable: true,
  },
  { name: 'view', align: 'center', label: 'VIEW' },
  { name: 'edit', align: 'center', label: 'EDIT' },
  { name: 'delete', align: 'center', label: 'DELETE' },
  { name: 'editor', align: 'center', label: 'NODE EDITOR' },

];

function onReset() {
  newWorkflow.value.name = '';
  newWorkflow.value.description = '';
}
async function createWorkflow() {
  if (!newWorkflow.value.name) {
    $q.notify({
      type: 'negative',
      message: 'Workflow name is required.',
      position: 'top',
    });
  } else if (newWorkflow.value.name.length > 20) {
    $q.notify({
      type: 'negative',
      message: 'The workflow name must have less than 20 characters.',
      position: 'top',
    });
  } else if (newWorkflow.value.description.length > 200) {
    $q.notify({
      type: 'negative',
      message: 'The workflow description must have less than 200 characters.',
      position: 'top',
    });
  } else {
    try {
      const workflow = newWorkflow.value;
      workflow.user = authStore.userId;
      await editorStore.createWorkflow(newWorkflow.value);

      $q.notify({
        type: 'positive',
        message: 'Workflow created',
        position: 'top',
      });

      newWorkflow.value = { name: '', description: '' };
      showForm.value = false;
    } catch (err) {
      if (err.response.data.detail) {
        $q.notify({
          type: 'negative',
          message: err.response.data.detail,
          position: 'top',
        });
      }
    }
  }
}

function viewWorkflow(workflow) {
  currentWorkflow.value = workflow;
  showViewWorkflow.value = true;
}
function editWorkflow(workflow) {
  currentWorkflow.value = JSON.parse(JSON.stringify(workflow));
  showEditWorkflow.value = true;
}
async function editWorkflowFunction() {
  try {
    await editorStore.editWorkflow(currentWorkflow.value);

    $q.notify({
      type: 'positive',
      message: 'Workflow edited',
      position: 'top',
    });

    showEditWorkflow.value = false;
  } catch (err) {
    console.log(err);
    if (err.response.data.detail) {
      $q.notify({
        type: 'negative',
        message: err.response.data.detail,
        position: 'top',
      });
    }
  }
}
function deleteWorkflow(workflow) {
  currentWorkflow.value = workflow;
  showDeleteWorkflow.value = true;
}

async function deleteWorkflowFunction() {
  try {
    await editorStore.deleteWorkflow(currentWorkflow.value);

    $q.notify({
      type: 'positive',
      message: 'Workflow delete',
      position: 'top',
    });

    showDeleteWorkflow.value = false;
  } catch (err) {
    console.log(err);
    if (err.response.data.detail) {
      $q.notify({
        type: 'negative',
        message: err.response.data.detail,
        position: 'top',
      });
    }
  }
}

</script>
