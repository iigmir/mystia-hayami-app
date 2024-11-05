<template>
    <article id="router-character">
        <h1>{{ $t("character.title") }}</h1>
        <p>{{ $t("character.subtitle") }}</p>
        <div class="ts-divider"></div>
        <h2>{{ $t("commons.customer.rare") }}</h2>
        <section class="rare-characters ts-grid">
            <customer-info v-for="item in store.rare_guests" v-bind:key="item.app_label_id" v-bind:item="item" />
        </section>
        <h2>{{ $t("commons.customer.regular") }}</h2>
        <section class="normal-characters ts-grid">
            <customer-info v-for="item in store.normal_guests" v-bind:key="item.app_label_id" v-bind:item="item" />
        </section>
    </article>
</template>

<script setup lang="js">
import { onMounted } from "vue";
import { useDemographyStore } from "@/store/demography.js";
import CustomerInfo from "@/components/Character/Link.vue";

// Store module
const store = useDemographyStore();

// Selected list module
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
