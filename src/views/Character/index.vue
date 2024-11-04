<template>
    <article id="router-character">
        <h1>{{ $t("character.title") }}</h1>
        <p>{{ $t("character.subtitle") }}</p>
        <div class="ts-divider"></div>
        <h2>{{ $t("commons.customer.rare") }}</h2>
        <div class="ts-divider"></div>
        <h2>{{ $t("commons.customer.regular") }}</h2>
    </article>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useDemographyStore } from "../../store/demography.js";

// Store module
const store = useDemographyStore();

// Selected list module
const local_action = () => {
    // 
};

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
