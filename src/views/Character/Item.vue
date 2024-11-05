<template>
    <article id="router-characteritem">
        <metadata-table v-if="metadata.name" v-bind:item="metadata" />
    </article>
</template>

<script setup lang="js">
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { useDemographyStore } from "@/store/demography.js";
import MetadataTable from "@/components/MetadataTable/index.vue";

// Store module
const route = useRoute();
const store = useDemographyStore();

// Selected item module
const get_user = (guests = []) => guests.find( ({ app_label_id }) => app_label_id === route.params.name ) ?? {};
const chosen_guest = computed( () => get_user(store.rare_guests) );
const chosen_character = computed( () => get_user(store.normal_guests) );
const chosen_partner = computed( () => get_user(store.partners) );
const metadata = computed( () => {
    if( chosen_character.value.name ) {
        return chosen_character.value;
    }
    if( chosen_guest.value.name ) {
        return chosen_guest.value;
    }
    if( chosen_partner.value.name ) {
        return chosen_partner.value;
    }
    return {};
});
// name
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
