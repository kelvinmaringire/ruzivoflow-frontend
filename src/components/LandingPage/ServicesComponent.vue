<template>
    <section id="services">
      <div class="row flex flex-center q-my-lg">
        <div class="section-title q-pa-md"> Services </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <q-icon name="language" />
            </div>
            <h3 class="service-title">Web Development</h3>
            <p>
              A professional website is crucial for any business or organization
               to establish an online presence,
               showcase products or services, and connect with customers.
              Our web development services include designing, building, and deploying responsive,
              user-friendly, and scalable websites using cutting-edge technologies like Wordpress,
              HTML, CSS, JavaScript, Python and frameworks like Django and Vue.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <q-icon name="smartphone" />
            </div>
            <h3 class="service-title">Mobile App Development</h3>
            <p>
              With the majority of users accessing websites and services through mobile devices,
              having a mobile app is essential to stay competitive and provide
               a seamless user experience. Our mobile app development services include designing,
               building, and deploying native and cross-platform mobile apps for Android and iOS
               devices using technologies like Android Studio, Rest APIs, and frameworks like Ionic
                and Capacitor.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <q-icon name="desktop_windows" />
            </div>
            <h3 class="service-title">Desktop App Development</h3>
            <p>
              Desktop applications provide a rich and immersive user experience,
              and are essential for businesses and organizations that require powerful
              and efficient software solutions that can also work offline.
              Our desktop app development services include designing, building, and deploying
              desktop applications for Windows, macOS, and Linux using technologies like Electron,
              .NET, and Javascript.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <q-icon name="analytics" />
            </div>
            <h3 class="service-title">Data Analysis</h3>
            <p>
              Data analysis is crucial for businesses and organizations to make informed
              decisions, identify trends, and optimize operations. Our data analysis services
              include data collection, processing, visualization, and interpretation using our
               inhouse tools and programming languages like Python, R, and SQL.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <q-icon name="psychology" />
            </div>
            <h3 class="service-title">Machine Learning</h3>
            <p>
              Machine learning is a powerful technology that enables businesses
              and organizations to automate processes, make predictions, and improve
              decision-making. Our machine learning services include building, training,
               and deploying machine learning models using popular frameworks like TensorFlow,
                PyTorch, and scikit-learn, and programming languages like Python and R.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <q-icon name="travel_explore" />
            </div>
            <h3 class="service-title">Web Scraping</h3>
            <p>
              Web scraping is essential for businesses and organizations to extract
              data from websites, monitor competitors, and gather market intelligence.
              Our web scraping services include building and deploying web scrapers using
              technologies like Python, JavaScript, and frameworks like Scrapy and Beautiful Soup,
              to extract data from websites and store it in a structured format.
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>

</script>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
}
.column {
  width: 100%;
  padding: 0 1em 1em 1em;
  text-align: center;
}
.card {
  width: 100%;
  height: 100%;
  padding: 2em 1.5em;
  background: linear-gradient(#ffffff 50%, #ff9800 50%);
  background-size: 100% 200%;
  background-position: 0 2.5%;
  border-radius: 50px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: 0.5s;
}
.service-title {
  font-size: 20px;
  font-weight: 600;
  color: #ff9800;
  margin: 1em 0;
}
p {
  color: #575a7b;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.03em;
}
.icon-wrapper {
  background-color: #ff9800;
  position: relative;
  margin: auto;
  font-size: 30px;
  height: 2.5em;
  width: 2.5em;
  color: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.5s;
}
.card:hover {
  background-position: 0 100%;
}
.card:hover .icon-wrapper {
  background-color: #ffffff;
  color: #ff9800;
}
.card:hover h3 {
  color: #ffffff;
}
.card:hover p {
  color: #f0f0f0;
}
@media screen and (min-width: 768px) {
  section {
    padding: 0 2em;
  }
  .column {
    flex: 0 50%;
    max-width: 50%;
  }
}
@media screen and (min-width: 992px) {
  section {
    padding: 1em 3em;
  }
  .column {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
}

</style>
