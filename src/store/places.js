import { defineStore } from "pinia";
import { useDataStore } from "./data";

export const usePlaceStore = defineStore("place", {
    getters: {
        main_list: () => useDataStore().places,
        main_list_inited: () => useDataStore().demography_done,
    },
    actions: {
        get_main_list() {
            fetch(`${domain}/data/main/places.json`).then( r => r.json() ).then( (response) => {
                useDataStore().places = response;
                useDataStore().demography_done = true;
            });
        }
    }
});
