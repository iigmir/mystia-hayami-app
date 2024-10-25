import { createWebHistory, createRouter } from "vue-router";
// Local routes
import HomeView from "./Home.vue";
import AboutView from "./About.vue";
import PlaceView from "./Place/index.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env["BASE_URL"]),
    routes:  [
        { path: "/", component: HomeView },
        { path: "/about", component: AboutView },
        { path: "/place", component: PlaceView },
    ],
});

export default router
