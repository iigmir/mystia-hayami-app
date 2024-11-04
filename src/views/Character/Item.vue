<template>
    <article id="router-characteritem">
        <p>{{ chosen_guest }}</p>
        <p>{{ chosen_character }}</p>
        <p>{{ chosen_partner }}</p>
    </article>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, ref, onMounted } from "vue";
import { useDemographyStore } from "@/store/demography.js";

// Store module
const route = useRoute();
const store = useDemographyStore();

// Selected item module
const chosen_guest = computed(() => {
    return store.rare_guests.find( its => its.app_label_id === route.params.name ) ?? {};
});
const chosen_character = computed(() => {
    return store.normal_guests.find( its => its.app_label_id === route.params.name ) ?? {};
});
const chosen_partner = computed(() => {
    return store.partners.find( its => its.app_label_id === route.params.name ) ?? {};
});
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
