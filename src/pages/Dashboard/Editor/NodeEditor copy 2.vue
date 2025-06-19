<template>
  <q-page>
    <div class="row">
      <div class="col-md-3">
        <div class="text-h4 text-weight-bold text-blue-grey-3 q-pa-md"
        v-if="workflowName">
          {{ workflowName}}
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
          v-if="nodeItems"
          @dragover="onDragOver($event)"
          @drop="onDrop($event)"
          class="jtk-demo-canvas canvas-wide flowchart-demo jtk-surface jtk-surface-nopan"
          id="canvas"
        >
          <div
            class="window jtk-node absolute"
            v-for="(node_item, index) in nodeItems"
            :key="index"
            :id="node_item.html_id"
            :style="node_item.style_object"
            @dblclick="onNodeDoubleClick(node_item)"
            @contextmenu.prevent="onNodeRightClick($event, node_item)"
          >
            <img class="node-icon" :src="node_item.icon_url" />
            <span class="node-title">{{ node_item.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <NodeContextMenu
    v-model="contextMenu"
    :nodeItem="contextMenuNodeItem"
    @rename="handleRename"
    @delete="handleDelete"
  />
  <NodeInfoDialog
    v-model="nodeInfoDialog"
    :nodeItem="nodeItemInfo"
  />

  </q-page>
</template>

<script setup>
import {
  ref, onMounted, nextTick,
} from 'vue';
import { debounce, uid } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import {
  EVENT_DRAG_STOP, EVENT_CONNECTION, EVENT_CONNECTION_DETACHED, newInstance,
} from '@jsplumb/browser-ui';
import NodeContextMenu from 'src/components/Editor/NodeContextMenu.vue';
import NodeInfoDialog from 'src/components/Editor/NodeInfoDialog.vue';
import { useEditorStore } from '../../../stores/editor-store';

const editorStore = useEditorStore();

const jsPlumbInstance = ref(null);
const contextMenu = ref(false);
const contextMenuNodeItem = ref({});

const workflowName = ref('');
const connections = ref([]);
const nodeItems = ref([]);

const nodeInfoDialog = ref(false);
const nodeItemInfo = ref({});

const router = useRouter();
const route = useRoute();

function addEndpointsToNode(nodeElement, type) {
  const js = jsPlumbInstance.value;
  switch (type) {
    case 'sourceAnchor':
      js.addEndpoint(nodeElement, { anchors: 'Right', source: true });
      break;
    case 'targetAnchor':
      js.addEndpoint(nodeElement, { anchor: 'Left', target: true });
      break;
    case 'sourceTargetAnchor':
      js.addEndpoint(nodeElement, { anchors: 'Right', source: true });
      js.addEndpoint(nodeElement, { anchor: 'Left', target: true });
      break;
    default:
      alert('Something is wrong with the node, please contact the dev team');
  }
}

const debouncedSavePosition = debounce((id, left, top) => {
  const posNodeItem = nodeItems.value.find((item) => item.html_id === id);
  const posObject = { style_object: { top: `${top}px`, left: `${left}px` } };
  if (posNodeItem) {
    editorStore.patchNodeItem(posNodeItem, posObject);
    nodeItems.value.style_object = posObject.style_object;
  }
}, 300);

onMounted(async () => {
  const container = document.getElementById('canvas');

  if (!container) {
    router.push({ name: 'workflows' });
  }
  const workflowId = JSON.parse(route.params.id);
  const workflows = editorStore.workflow_node_items;
  const workflow = workflows.find((wf) => wf.id === workflowId);

  nodeItems.value = JSON.parse(JSON.stringify(workflow.node_items));
  connections.value = JSON.parse(JSON.stringify(workflow.connections));
  workflowName.value = JSON.parse(JSON.stringify(workflow.name));

  await nextTick();

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

  // Initialize nodes with endpoints
  nodeItems.value.forEach((nodeItem) => {
    const node = document.getElementById(nodeItem.html_id);
    addEndpointsToNode(node, nodeItem.type);
  });

  // Initialize connections with endpoints
  connections.value.forEach((conn) => {
    const sourceNode = document.getElementById(conn.sourceId);
    const targetNode = document.getElementById(conn.targetId);

    jsPlumbInstance.value.connect({
      source: sourceNode,
      target: targetNode,
      anchors: ['Right', 'Left'],
    });
  });

  jsPlumbInstance.value.setSuspendDrawing(false, true);
  jsPlumbInstance.value.repaintEverything();

  jsPlumbInstance.value.bind(EVENT_DRAG_STOP, (payload) => {
    payload.elements.forEach((el) => {
      const { id } = el;
      const left = el.pos.x;
      const top = el.pos.y;

      debouncedSavePosition(id, left, top);
    });
  });

  jsPlumbInstance.value.bind(EVENT_CONNECTION, (payload) => {
    const conn = {
      workflow: JSON.parse(route.params.id),
      sourceId: payload.sourceId,
      targetId: payload.targetId,
    };

    editorStore.addConnection(conn)
      .then((responseData) => {
        connections.value.push(responseData);
      })
      .catch((error) => {
        console.error('Failed to add connection:', error);
      });
  });

  jsPlumbInstance.value.bind(EVENT_CONNECTION_DETACHED, (payload) => {
    const conn = workflowNodeItems.value.connections.find((con) => con.sourceId === payload.sourceId
    && con.targetId === payload.targetId);
    console.log(conn);
    api.delete(`thedataeditor/connection/${conn.id}/`)
      .then((response) => {
        editorStore.deleteConnection(response.data);
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
    html_id: `node_${uid().slice(0, 8)}`,
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
    // Wait for the node to be added to the store
    const responseData = await editorStore.addNodeItem(newNodeItem);

    // Add to local ref
    nodeItems.value.push(responseData);

    // Wait for DOM update
    await nextTick();

    // Get the DOM element
    const nod = document.getElementById(responseData.html_id);

    if (!nod) {
      console.error('Node element not found in DOM');
      return;
    }

    // Initialize jsPlumb endpoints
    addEndpointsToNode(nod, responseData.type);
  } catch (error) {
    console.error('Error in onDrop:', error);
  }
}
function onNodeDoubleClick(nodeItem) {
  nodeItemInfo.value = nodeItem;
  nodeInfoDialog.value = true;
}
function onNodeRightClick(evt, nodeItem) {
  jsPlumbInstance.value.setSuspendDrawing(true);
  contextMenuNodeItem.value = nodeItem;
  contextMenu.value = true;
  jsPlumbInstance.value.setSuspendDrawing(false, true);
  jsPlumbInstance.value.repaintEverything();
}
function handleRename(item) {
  console.log('Rename clicked:', item);
}

async function handleDelete(item) {
  jsPlumbInstance.value.setSuspendDrawing(true);

  await editorStore.deleteNodeItem(item);

  const nod = document.getElementById(item.html_id);
  if (nod) {
    jsPlumbInstance.value.removeAllEndpoints(nod);
    jsPlumbInstance.value.unmanage(nod);
  }

  const index = nodeItems.value.findIndex((nd) => nd.id === item.id);
  if (index !== -1) {
    nodeItems.value.splice(index, 1);
  }

  contextMenu.value = false;

  jsPlumbInstance.value.setSuspendDrawing(false, true);
  jsPlumbInstance.value.repaintEverything();
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
