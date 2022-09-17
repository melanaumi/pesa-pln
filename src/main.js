import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import PesaDashboard from "./pesa-dashboard";
import 'bootstrap-icons/font/bootstrap-icons.css'

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(PesaDashboard);
appInstance.mount("#app");