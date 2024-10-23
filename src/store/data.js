import { defineStore } from "pinia";

const get_json = (api = "") => {
    const domain = import.meta.env.VITE_API_domain;
    const path = `${domain}${api}`;
    return new Promise( (resolve, reject) => {
        fetch(path).then( r => r.json() ).then( r => resolve(r) ).catch( e => reject(e) );
    });
};

export const useDataStore = defineStore("data", {
    state: () => ({
        // Foods
        food_done: false,
        dishes: [],
        dish_tags: [],
        beverages: [],
        beverage_tags: [],
        ingredients: [],

        // Demography
        demography_done: false,
        normal_guests: [],
        rare_guests: [],
        partners: [],
        places: [],
    }),
    actions: {
        get_all() {
            const domain = import.meta.env.VITE_API_domain;
            
            const food_requests = Promise.all([
                fetch(`${domain}/data/main/foods/dishes.json`).then( r => r.json() ),
                fetch(`${domain}/data/main/foods/dishes.tags.json`).then( r => r.json() ),
                fetch(`${domain}/data/main/foods/beverages.json`).then( r => r.json() ),
                fetch(`${domain}/data/main/foods/beverages.tags.json`).then( r => r.json() ),
                fetch(`${domain}/data/main/foods/ingredients.json`).then( r => r.json() ),
            ]);
            food_requests.then( ([dr, dtr, br, btr, ir]) => {
                this.dishes = dr;
                this.dish_tags = dtr;
                this.beverages = br;
                this.beverage_tags = btr;
                this.ingredients = ir;
                this.food_done = true;
            });
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
