<template>
  <q-page>
    <div class="row">
      <div class="col-md-3">
        <q-list bordered class="rounded-borders bg-dark flowchart-demo">
      <q-expansion-item
        expand-separator
        icon="insights"
        label="Data"
      >
        <q-card>
          <q-card-section>

            <div class="row q-mb-lg">

              <div class="col-3">
                <div
                  id="upload"
                  class="window jtk-node"
                >
                  <img
                    class="node-icon"
                    src="../../../assets/thedataeditor/upload.png"
                  />
                  <span class="node-title">File Upload</span>
                </div>
              </div>

              <div class="col-3">
                <div
                  id="upload"
                  class="window jtk-node"
                >
                  <img
                    class="node-icon"
                    src="../../../assets/thedataeditor/upload.png"
                  />
                  <span class="node-title">File Upload</span>
                </div>
              </div>

              <div class="col-3">
                <div
                  id="upload"
                  class="window jtk-node"
                >
                  <img
                    class="node-icon"
                    src="../../../assets/thedataeditor/upload.png"
                  />
                  <span class="node-title">File Upload</span>
                </div>
              </div>

              <div class="col-3">
                <div
                  id="upload"
                  class="window jtk-node"
                >
                  <img
                    class="node-icon"
                    src="../../../assets/thedataeditor/upload.png"
                  />
                  <span class="node-title">File Upload</span>
                </div>
              </div>

            </div>

            <div class="row q-mb-lg">

            <div class="col-3">
              <div
                id="upload"
                class="window jtk-node"
              >
                <img
                  class="node-icon"
                  src="../../../assets/thedataeditor/upload.png"
                />
                <span class="node-title">File Upload</span>
              </div>
            </div>

            <div class="col-3">
              <div
                id="upload"
                class="window jtk-node"
              >
                <img
                  class="node-icon"
                  src="../../../assets/thedataeditor/upload.png"
                />
                <span class="node-title">File Upload</span>
              </div>
            </div>

            <div class="col-3">
              <div
                id="upload"
                class="window jtk-node"
              >
                <img
                  class="node-icon"
                  src="../../../assets/thedataeditor/upload.png"
                />
                <span class="node-title">File Upload</span>
              </div>
            </div>

            <div class="col-3">
              <div
                id="upload"
                class="window jtk-node"
              >
                <img
                  class="node-icon"
                  src="../../../assets/thedataeditor/upload.png"
                />
                <span class="node-title">File Upload</span>
              </div>
            </div>

            </div>

          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="bar_chart"
        label="Visualization"
      >
        <q-card>
          <q-card-section>

          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="psychology"
        label="Machine Learning"
        header-class="text-purple"
      >
        <q-card>
          <q-card-section>

          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item icon="miscellaneous_services" label="Miscellaneous" disable>
        <q-card>
          <q-card-section>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
      </div>
      <div class="col-md-9">
        <div
      class="jtk-demo-canvas canvas-wide flowchart-demo jtk-surface jtk-surface-nopan"
      id="canvas"
    >

    </div>

      </div>
    </div>

  </q-page>
</template>

<script setup>

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
  position: relative;
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
