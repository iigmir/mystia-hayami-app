import { defineStore } from "pinia";

export const useFoodStore = defineStore("food", {
    state: () => ({
        food_done: false,
        dishes: [],
        beverages: [],
        ingredients: [],

        // Tags
        dish_tags: [],
        beverage_tags: [],
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
        },
    }
});
