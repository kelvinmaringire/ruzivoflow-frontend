<template>
  <q-page>
    <div class="row">
      <div class="col-md-3">
        <div class="text-h4 text-weight-bold text-blue-grey-3 q-pa-md"
        v-if="workflowNodeItems && workflowNodeItems.name">
          {{ workflowNodeItems.name }}
          </div>
        <q-list bordered class="rounded-borders bg-dark flowchart-demo">
          <q-expansion-item
            group="somegroup"
            :default-opened="index === 0"
            expand-separator
            :icon="cat.icon"
            :label="cat.name"
            :header-class="cat.header_class"
            v-for="(cat, index) in editorStore.node_categories_chunk"
            :key="cat.id"
          >
            <q-card>
              <q-card-section>
                <div
                  v-for="(chunk, chunkIndex) in cat.chunk_nodes"
                  :key="chunkIndex"
                  class="row q-mb-lg"
                >
                  <div v-for="node in chunk" :key="node.id" class="col-3">
                    <div
                      :id="node.html_id"
                      class="window jtk-node relative"
                      draggable="true"
                      @dragstart="onDragStart($event)"
                    >
                      <img
                        ondragstart="event.preventDefault();"
                        draggable="false"
                        class="node-icon"
                        :src="node.icon_url"
                      />
                      <span class="node-title">{{ node.name }}</span>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
      <div class="col-md-9">
        <div
          v-if="workflowNodeItems && workflowNodeItems.node_items"
          @dragover="onDragOver($event)"
          @drop="onDrop($event)"
          class="jtk-demo-canvas canvas-wide flowchart-demo jtk-surface jtk-surface-nopan"
          id="canvas"
        >
          <div
            class="window jtk-node absolute"
            v-for="(node_item, index) in workflowNodeItems.node_items"
            :key="index"
            :id="node_item.html_id"
            :style="node_item.style_object"
          >
            <img class="node-icon" :src="node_item.icon_url" />
            <span class="node-title">{{ node_item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {
  ref, computed, onMounted, nextTick,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { EVENT_DRAG_STOP, EVENT_CONNECTION, newInstance } from '@jsplumb/browser-ui';
import { useEditorStore } from '../../../stores/editor-store';
import { api } from '../../../boot/axios';

const editorStore = useEditorStore();

const jsPlumbInstance = ref(null);

const router = useRouter();
const route = useRoute();

const workflowNodeItems = computed(() => {
  if (!route.params.id || !editorStore.workflow_node_items) {
    return null;
  }

  const workflowId = JSON.parse(route.params.id);
  const workflows = editorStore.workflow_node_items;
  const workflow = workflows.find((wf) => wf.id === workflowId);

  return workflow || null;
});

onMounted(async () => {
  await nextTick();

  const container = document.getElementById('canvas');

  if (!container) {
    router.push({ name: 'workflows' });
  }

  jsPlumbInstance.value = newInstance({
    container,
    endpoint: 'Dot',
    connector: 'Bezier',
    maxConnections: 3,
    dragOptions: {
      containment: 'parentEnclosed',
    },
    endpointStyle: { fill: '#ff9800' },
    paintStyle: { strokeWidth: 3, stroke: '#ff9800' },
  });

  jsPlumbInstance.value.setSuspendDrawing(true);

  workflowNodeItems.value.node_items.forEach((nodeItem) => {
    const node = document.getElementById(nodeItem.html_id);
    const { type } = nodeItem;
    if (type === 'sourceAnchor') {
      jsPlumbInstance.value.addEndpoint(node, {
        anchors: 'Right',
        source: true,
      });
    } else if (type === 'sourceTargetAnchor') {
      jsPlumbInstance.value.addEndpoint(node, {
        anchors: 'Right',
        source: true,
      });
      jsPlumbInstance.value.addEndpoint(node, {
        anchor: 'Left',
        target: true,
      });
    } else if (type === 'targetAnchor') {
      jsPlumbInstance.value.addEndpoint(node, {
        anchor: 'Left',
        target: true,
      });
    } else {
      alert('Something is wrong with the node, please contact the dev team');
    }
  });

  workflowNodeItems.value.connections.forEach((conn) => {
    const sourceNode = document.getElementById(conn.sourceId);
    const targetNode = document.getElementById(conn.targetId);

    jsPlumbInstance.value.connect({
      source: sourceNode,
      target: targetNode,
      anchors: ['Right', 'Left'],
    });
  });

  jsPlumbInstance.value.setSuspendDrawing(false, true);

  jsPlumbInstance.value.bind(EVENT_DRAG_STOP, (payload) => {
    payload.elements.forEach((el) => {
      const { id } = el; // Element's ID
      const left = el.pos.x; // X-coordinate (left)
      const top = el.pos.y; // Y-coordinate (top)

      const posNodeItem = workflowNodeItems.value.node_items.find((item) => item.html_id === id);
      if (posNodeItem) {
        // Optionally, save the new position to your server via an API call
        api.patch(`thedataeditor/node_item/${posNodeItem.id}/`, {
          style_object: {
            top: `${top}px`,
            left: `${left}px`,
          },
        })
          .then((response) => {
            const newPosNodeItem = response.data;
            const nodeItem = workflowNodeItems.value.node_items.find(
              (node) => node.id === newPosNodeItem.id,
            );
            const index = workflowNodeItems.value.node_items.indexOf(nodeItem);
            workflowNodeItems.value.node_items[index] = newPosNodeItem;
          })
          .catch((err) => {
            console.error('Error saving position:', err);
          });
      }
    });
  });

  jsPlumbInstance.value.bind(EVENT_CONNECTION, (payload) => {
    api.post('thedataeditor/connection/', { workflow: JSON.parse(route.params.id), sourceId: payload.sourceId, targetId: payload.targetId })
      .then((response) => {
        workflowNodeItems.value.connections.push(response.data);
      });
  });
});

function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

async function onDrop(event) {
  const OriginalId = event.dataTransfer.getData('text');
  const node = editorStore.nodes.find((nod) => nod.html_id === OriginalId);
  const newNodeItem = {
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
    workflow: JSON.parse(route.params.id),
  };
  try {
    const response = await api.post('thedataeditor/node_item/', newNodeItem);
    const nodeItem = response.data;
    workflowNodeItems.value.node_items.push(nodeItem);
    await nextTick();
    const nod = document.getElementById(nodeItem.html_id);
    const { type } = nodeItem;
    if (type === 'sourceAnchor') {
      jsPlumbInstance.value.addEndpoint(nod, {
        anchors: 'Right',
        source: true,
      });
    } else if (type === 'sourceTargetAnchor') {
      jsPlumbInstance.value.addEndpoint(nod, {
        anchors: 'Right',
        source: true,
      });
      jsPlumbInstance.value.addEndpoint(nod, {
        anchor: 'Left',
        target: true,
      });
    } else if (type === 'targetAnchor') {
      jsPlumbInstance.value.addEndpoint(nod, {
        anchor: 'Left',
        target: true,
      });
    } else {
      alert('Something is wrong with the node, please contact the dev team');
    }
  } catch (err) {
    console.log(err);
  }
}
</script>

<style>
#canvas {
  height: calc(100vh - 100px);
  background-color: #121212;
  position: relative;
}

.demo {
  /* for IE10+ touch devices */
  touch-action: none;
}

.node-title {
  position: absolute;
  top: 50px;
  font-size: 10px;
  color: white;
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
  -o-box-shadow: 2px 2px 19px #aaa;
  -webkit-box-shadow: 2px 2px 19px #aaa;
  -moz-box-shadow: 2px 2px 19px #aaa;
  -moz-border-radius: 50%;
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
  background-color: #ffffff;
  color: black;
  font-family: helvetica, sans-serif;
  padding: 0.5em;
  font-size: 0.9em;
  -webkit-transition: -webkit-box-shadow 0.15s ease-in;
  -moz-transition: -moz-box-shadow 0.15s ease-in;
  -o-transition: -o-box-shadow 0.15s ease-in;
  transition: box-shadow 0.15s ease-in;
}

/* Relative positioning */
.flowchart-demo .window.relative {
  position: relative;
}

/* Absolute positioning */
.flowchart-demo .window.absolute {
  position: absolute;
}

.flowchart-demo .window:hover {
  box-shadow: 2px 2px 19px #444;
  -o-box-shadow: 2px 2px 19px #444;
  -webkit-box-shadow: 2px 2px 19px #444;
  -moz-box-shadow: 2px 2px 19px #444;
  opacity: 0.6;
}

.flowchart-demo .active {
  border: 1px dotted green;
}

.flowchart-demo .hover {
  border: 1px dotted red;
}

.flowchart-demo .jtk-connector {
  z-index: 4;
}

.flowchart-demo .jtk-endpoint,
.endpointTargetLabel,
.endpointSourceLabel {
  z-index: 21;
  cursor: pointer;
}

.flowchart-demo .aLabel {
  background-color: white;
  padding: 0.4em;
  font: 12px sans-serif;
  color: #444;
  z-index: 21;
  border: 1px dotted gray;
  opacity: 0.8;
  cursor: pointer;
}

.flowchart-demo .aLabel.jtk-hover {
  background-color: #5c96bc;
  color: white;
  border: 1px solid white;
}

.window.jtk-connected {
  border: 1px solid green;
}

.jtk-drag {
  outline: 4px solid pink !important;
}

path,
.jtk-endpoint {
  cursor: pointer;
}

.jtk-overlay {
  background-color: transparent;
}

.context-menu {
  position: absolute;
  width: 150px;
  z-index: 25;
}
</style>
