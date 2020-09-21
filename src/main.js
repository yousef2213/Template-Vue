import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";
import VueGeolocation from "vue-browser-geolocation";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGeolocation);
Vue.use(Chartkick.use(Chart));
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC5r94EDFoA3Mkz417kP6nf6a5CNDDtYCM",
    libraries: "places"
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
