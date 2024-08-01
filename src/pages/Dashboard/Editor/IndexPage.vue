<template>
  <q-page padding>
    <div
      class="jtk-demo-canvas canvas-wide flowchart-demo jtk-surface jtk-surface-nopan"
      id="canvas"
    >
      <div
        id="upload"
        style="left: 50px; top: 100px;"
        class="window jtk-node"
      >
        <img
          class="node-icon"
          src="../../../assets/thedataeditor/upload.png"
        />
        <span class="node-title">File Upload</span>
      </div>

      <div
        id="save_file"
        style="left: 90px; top: 150px;"
        class="window jtk-node"
      >
        <img
          class="node-icon"
          src="../../../assets/thedataeditor/diskette.png"
        />
        <span class="node-title">Save File</span>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { onMounted } from 'vue';
import { newInstance } from '@jsplumb/browser-ui';

onMounted(() => {
  const container = document.getElementById('canvas');

  const instance = newInstance({
    container,
    PaintStyle: {
      strokeWidth: 3,
      stroke: '#ff9800',
      outlineStroke: 'white',
      outlineWidth: 1,
    },
    // default drag options
    DragOptions: { cursor: 'pointer', zIndex: 2000 },
    // the overlays to decorate each connection with
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
            click() {
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
            tap() {
              alert('hey');
            },
          },
        },
      ],
    ],
  });

  const upload = document.getElementById('upload');
  const saveFile = document.getElementById('save_file');

  instance.addEndpoint(upload, { endpoint: 'Dot' });
  instance.addEndpoint(saveFile, { endpoint: 'Dot' });

  instance.connect({
    source: upload,
    target: saveFile,
  });
});
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
  position: absolute;
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
