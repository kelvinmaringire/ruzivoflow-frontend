<template>
  <section id="editor" class="q-pa-lg">
    <div class="text-center q-mb-xl">
      <h2 class="section-title text-h4 text-weight-bold q-mb-md">
        Node Editor
      </h2>
      <p class="section-subtitle">
        Transform data into insights without writing code
      </p>
    </div>

    <div class="row justify-center q-mb-xl">
      <div class="col-md-8 text-center">
        <p class="text-body1 text-grey-5">
          Ruzivo is a no-code/low-code node editor that makes data analytics and machine learning accessible to everyone.
          Simply connect nodes to build powerful data workflows - no programming needed.
          Whether you're a business analyst, marketer, or researcher, Ruzivo helps you process, analyze,
          and visualize data with ease.
        </p>
      </div>
    </div>

    <div class="row q-mb-xl">
      <div class="col-12 text-center">
        <q-img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Node Editor Interface"
          style="max-width: 800px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15)"
          class="q-mb-md"
        />
        <p class="text-caption">Ruzivo's intuitive node-based interface for building data workflows</p>
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <q-card class="feature-card">
          <q-card-section class="text-center">
            <q-icon name="drag_indicator" size="xl" color="orange" />
            <h3 class="text-h6 q-mt-sm q-mb-xs">Drag-and-Drop Interface</h3>
            <p class="text-body2">
              Build data workflows visually by connecting nodes - no coding required.
              Intuitive UI makes complex data pipelines easy to create and understand.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-4 col-sm-6 col-xs-12">
        <q-card class="feature-card">
          <q-card-section class="text-center">
            <q-icon name="widgets" size="xl" color="orange" />
            <h3 class="text-h6 q-mt-sm q-mb-xs">Pre-Built Nodes</h3>
            <p class="text-body2">
              Ready-to-use nodes for data cleaning, transformation, visualization,
              and machine learning. Just drag, drop, and configure.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-4 col-sm-6 col-xs-12">
        <q-card class="feature-card">
          <q-card-section class="text-center">
            <q-icon name="storage" size="xl" color="orange" />
            <h3 class="text-h6 q-mt-sm q-mb-xs">Data Integration</h3>
            <p class="text-body2">
              Connect to CSV, Excel, JSON, databases, cloud storage and APIs.
              All your data sources in one place.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-4 col-sm-6 col-xs-12">
        <q-card class="feature-card">
          <q-card-section class="text-center">
            <q-icon name="insights" size="xl" color="orange" />
            <h3 class="text-h6 q-mt-sm q-mb-xs">Visualization Tools</h3>
            <p class="text-body2">
              Built-in charts, graphs, and dashboards to explore your data
              and create professional reports.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-4 col-sm-6 col-xs-12">
        <q-card class="feature-card">
          <q-card-section class="text-center">
            <q-icon name="model_training" size="xl" color="orange" />
            <h3 class="text-h6 q-mt-sm q-mb-xs">Machine Learning</h3>
            <p class="text-body2">
              Pre-trained models and no-code ML training for classification,
              regression, and clustering tasks.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-4 col-sm-6 col-xs-12">
        <q-card class="feature-card">
          <q-card-section class="text-center">
            <q-icon name="code" size="xl" color="orange" />
            <h3 class="text-h6 q-mt-sm q-mb-xs">Custom Scripting</h3>
            <p class="text-body2">
              For advanced users: add custom Python/R scripts within nodes
              when you need more control.
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row justify-center q-mt-xl">
      <div class="col-md-8 text-center">
        <q-img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Data Visualization Example"
          style="max-width: 800px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15)"
          class="q-mb-md"
        />
        <p class="text-caption">Create powerful visualizations and dashboards with your processed data</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineOptions({
  name: 'EditorComponent',
});
</script>

<style scoped>
.section-title {
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #FF9800, #FFC107);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .section-title {
    font-size: 45px;
  }
}

.feature-card {
  height: 100%;
  transition: transform 0.3s ease;
  border-radius: 8px;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.feature-card h3 {
  color: #aeaeae;
}

</style>
