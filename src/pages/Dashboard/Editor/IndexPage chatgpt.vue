<template>
  <q-page padding>
    <div class="d-flex align-items-center justify-content-between">
      <h3 class="my-3 text-center font-weight-bolder">
        Node Editor (Workflow)
      </h3>

      <q-breadcrumbs class="mb-3" style="background-color: white">
        <q-breadcrumbs-el to="/dashboard">
          <q-icon name="house" /> Dashboard
        </q-breadcrumbs-el>
        <q-breadcrumbs-el to="/workflows">
          <q-icon name="assignment" /> Workflows
        </q-breadcrumbs-el>
        <q-breadcrumbs-el active>
          <q-icon name="edit" /> Node Editor
        </q-breadcrumbs-el>
      </q-breadcrumbs>
    </div>

    <div class="row no-gutters">
      <div class="col-md-3">
        <q-accordion>
          <q-expansion-item icon="folder" label="Data" expand-separator>
            <div v-for="(nodes, index) in chunkNodesList" :key="index" class="row mb-5">
              <div v-for="node in nodes" :key="node.id" class="col-3 mb-4">
                <div class="window jtk-node" :id="node.html_id" draggable="true" @dragstart="onDragStart">
                  <img class="node-icon" :src="node.icon_url" :alt="node.name" @dragstart.prevent />
                  <span class="node-title">{{ node.name }}</span>
                </div>
              </div>
            </div>
          </q-expansion-item>
          <q-expansion-item icon="insert_chart" label="Visualization" expand-separator>
            <div>
              <!-- Visualization content goes here -->
            </div>
          </q-expansion-item>
        </q-accordion>
      </div>
      <div class="col-md-9">
        <div @dragover.prevent @drop="onDrop" class="jtk-demo-canvas canvas-wide flowchart-demo jtk-surface jtk-surface-nopan" id="canvas">
          <div
            class="window jtk-node"
            v-for="(nodeItem, index) in nodeItems"
            :key="index"
            :id="nodeItem.html_id"
            :style="nodeItem.style_object"
            @contextmenu.prevent="contextMenu(nodeItem)"
            @dblclick="showModal(nodeItem)"
          >
            <img class="node-icon" :src="nodeItem.icon_url" :alt="nodeItem.name" />
            <span class="node-title">{{ nodeItem.name }}</span>
          </div>

          <q-list class="context-menu" :style="contextMenuNode.style_object" v-if="showContextMenu">
            <q-item clickable @click="deleteNode(contextMenuNode)">
              <q-item-section>Delete</q-item-section>
            </q-item>
            <q-item clickable @click="removeContext(contextMenuNode)">
              <q-item-section>Cancel</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <node-modal v-model:node_items="nodeItems" @updated_node_item="updatedNodeItem" />
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { newInstance } from '@jsplumb/browser-ui';
import { useRoute } from 'vue-router';
import _ from 'lodash';
import NodeModal from '@/components/NodeModal.vue';

const route = useRoute();
const nodeItems = ref([]);
const connections = ref([]);
const showContextMenu = ref(false);
const contextMenuNode = ref({});
const showModalNode = ref({});

const nodesList = computed(() =>
  // Replace this with actual data fetching or state management logic
  []);

const chunkNodesList = computed(() => _.chunk(nodesList.value, 4));

const onDragStart = (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);
};

const onDrop = (event) => {
  const originalId = event.dataTransfer.getData('text');
  const node = nodesList.value.find((node) => node.html_id === originalId);
  const nodeItem = {
    node: node.id,
    original_name: node.name,
    original_id: node.html_id,
    name: node.name,
    html_id: node.html_id + new Date().getTime(),
    icon: node.icon,
    icon_url: node.icon_url,
    type: node.type,
    style_object: {
      left: `${event.offsetX - 20}px`,
      top: `${event.offsetY - 20}px`,
    },
    formData: {},
    response_data: {},
  };

  nodeItems.value.push(nodeItem);
  initJsPlumbNode(nodeItem);
};

const initJsPlumbNode = (nodeItem) => {
  instance.draggable(nodeItem.html_id, {
    containment: true,
    stop: (e) => {
      updateNodePosition(nodeItem.html_id, e.finalPos[0], e.finalPos[1]);
    },
  });

  if (nodeItem.type === 'sourceAnchor') {
    const sourceUUID = `${nodeItem.html_id}sourceAnchor`;
    instance.addEndpoint(nodeItem.html_id, sourceEndpoint, {
      anchor: 'RightMiddle',
      uuid: sourceUUID,
    });
  } else if (nodeItem.type === 'sourceTargetAnchor') {
    const sourceUUID = `${nodeItem.html_id}sourceAnchor`;
    instance.addEndpoint(nodeItem.html_id, sourceEndpoint, {
      anchor: 'RightMiddle',
      uuid: sourceUUID,
    });
    const targetUUID = `${nodeItem.html_id}targetAnchor`;
    instance.addEndpoint(nodeItem.html_id, targetEndpoint, {
      anchor: 'LeftMiddle',
      uuid: targetUUID,
    });
  } else if (nodeItem.type === 'targetAnchor') {
    const targetUUID = `${nodeItem.html_id}targetAnchor`;
    instance.addEndpoint(nodeItem.html_id, targetEndpoint, {
      anchor: 'LeftMiddle',
      uuid: targetUUID,
    });
  } else {
    alert('Error');
  }
};

const updateNodePosition = (htmlId, left, top) => {
  const node = nodeItems.value.find((item) => item.html_id === htmlId);
  if (node) {
    node.style_object.left = `${left}px`;
    node.style_object.top = `${top}px`;
  }
};

let instance;
const sourceEndpoint = {};
const targetEndpoint = {};

onMounted(() => {
  const container = document.getElementById('canvas');
  instance = newInstance({
    container,
    PaintStyle: {
      strokeWidth: 3,
      stroke: '#ff9800',
      outlineStroke: 'white',
      outlineWidth: 1,
    },
    DragOptions: { cursor: 'pointer', zIndex: 2000 },
    ConnectionOverlays: [
      [
        'Arrow',
        {
          location: 1,
          visible: true,
          width: 11,
          length: 11,
          id: 'ARROW',
          events: {
            click: () => {
              alert('you clicked on the arrow overlay');
            },
          },
        },
      ],
      [
        'Label',
        {
          location: 0.5,
          id: 'label',
          cssClass: 'aLabel',
          events: {
            tap: () => {
              alert('hey');
            },
          },
        },
      ],
    ],
  });

  nodeItems.value.forEach((nodeItem) => {
    initJsPlumbNode(nodeItem);
  });
});
</script>

<style>
#canvas {
  height: calc(100vh - 200px);
  background-color: #f8f9fa;
  position: relative;
}

.node-title {
  position: absolute;
  top: 48px;
  font-size: 10px;
  font-weight: bold;
  width: 200%;
}

.node-icon {
  position: absolute;
  height: 24px;
  width: 24px;
}

.flowchart-demo .window {
  border: 1px solid #346789;
  box-shadow: 2px 2px 19px #aaa;
  border-radius: 50%;
  opacity: 0.8;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  z-index: 20;
  position: absolute;
  background-color: #eeeeef;
  color: black;
  font-family: helvetica, sans-serif;
  padding: 0.5em;
  font-size: 0.9em;
  transition: box-shadow 0.15s ease-in;
}

.flowchart-demo .window:hover {
  box-shadow: 2px 2px 19px #444;
  opacity: 0.6;
}

.context-menu {
  position: absolute;
  width: 150px;
  z-index: 25;
}
</style>
