import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./routes";

import "@/assets/scss/main.scss";

createApp(App).use(store).use(router).mount("#app");
