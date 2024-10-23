import { defineStore } from "pinia";

export const useDemographyStore = defineStore("demography", {
    state: () => ({
        demography_done: false,
        normal_guests: [],
        rare_guests: [],
        partners: [],
        places: [],
    }),
    actions: {
        get_all() {
            const domain = import.meta.env.VITE_API_domain;
            const demography_requests = Promise.all([
                fetch(`${domain}/data/main/characters/normal-guests.json`).then( r => r.json() ),
                fetch(`${domain}/data/main/characters/rare-guests.json`).then( r => r.json() ),
                fetch(`${domain}/data/main/characters/partners.json`).then( r => r.json() ),
                fetch(`${domain}/data/main/places.json`).then( r => r.json() ),
            ]);
            demography_requests.then( ([ngr, rgr, pnr, plr]) => {
                this.normal_guests = ngr;
                this.rare_guests = rgr;
                this.partners = pnr;
                this.places = plr;
                this.demography_done = true;
            });
        },
    }
});
