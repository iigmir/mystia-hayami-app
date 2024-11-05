<template>
    <article id="router-characteritem">
        <p>{{ chosen_guest }}</p>
        <p>{{ chosen_character }}</p>
        <p>{{ chosen_partner }}</p>
    </article>
</template>

<script setup lang="js">
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { useDemographyStore } from "@/store/demography.js";

// Store module
const route = useRoute();
const store = useDemographyStore();

// Selected item module
const get_user = (guests = []) => guests.find( ({ app_label_id }) => app_label_id === route.params.name ) ?? {};
const chosen_guest = computed( () => get_user(store.rare_guests) );
const chosen_character = computed( () => get_user(store.normal_guests) );
const chosen_partner = computed( () => get_user(store.partners) );
const local_action = () => {};

// Actions
const init_store = (input = false) => {
    if( input ) {
        local_action(store);
    } else {
        store.get_all();
    }
};
store.$subscribe( (mutation, state) => {
    init_store( state.demography_done );
});
onMounted( () => {
    init_store( store.demography_done );
});
</script>
