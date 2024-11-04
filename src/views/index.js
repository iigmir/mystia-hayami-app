import { createWebHistory, createRouter } from "vue-router";
// Local routes
import HomeView from "./Home.vue";
import AboutView from "./About.vue";
import PlaceView from "./Place/index.vue";
import CharacterView from "./Character/index.vue";
import CharacterItemView from "./Character/Item.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env["BASE_URL"]),
    routes:  [
        { path: "/", component: HomeView },
        { path: "/about", component: AboutView },
        { path: "/place", component: PlaceView },
        { path: "/character", component: CharacterView },
        { path: "/character/:name", component: CharacterItemView },
    ],
});

export default router
