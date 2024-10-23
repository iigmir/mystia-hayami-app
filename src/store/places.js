import { defineStore } from "pinia";
import { useDataStore } from "./data";

export const usePlaceStore = defineStore("place", {
    getters: {
        main_list: () => useDataStore().places,
        main_list_inited: () => useDataStore().demography_done,
    }
});
