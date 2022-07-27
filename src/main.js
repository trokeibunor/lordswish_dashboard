import { createApp } from "vue";
import { createPinia } from "pinia";


import App from "./App.vue";
import './index.css'
import router from "./router";
import Toast from "vue-toastification"
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toast);
app.mount("#app");
