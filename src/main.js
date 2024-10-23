// Packages
import { createApp } from "vue";
import { createPinia } from "pinia";
// Local
import router from "./views/index.js";
import i18n from "./i18n/index.js";
import App from "./App.vue";

createApp(App)
    .use(i18n)
    .use(router)
    .use(createPinia())
    .mount("#app")
;
