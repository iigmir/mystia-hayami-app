<template>
    <article id="router-places">
        <h2>地點</h2>
        <p>Where do you want to go today?</p>
        <section class="ts-select">
            <select v-model="chosen_place">
                <option v-for="its in store.places" v-bind:key="its.game_id" v-bind:value="its.game_id">
                    {{ its.name[$i18n.locale] }}
                </option>
            </select>
        </section>
        <section>
            <div class="ts-tab">
                <a
                    v-for="tab in tabs"
                    v-bind:key="tab.value"
                    v-on:click="set_tab_model(tab)"
                    v-bind:class="{ 'item': true, 'is-active': tab_model === tab.value }"
                >
                    <span v-bind:class="{ 'ts-icon': true, [tab.icon]: true }"></span>
                    {{ tab.text }}
                </a>
            </div>
        </section>
        <section>
             <component v-bind:is="selected_tab" v-bind:item="selected_item" />
        </section>
    </article>
</template>

<script setup>
import { computed, ref } from "vue";
import { useDemographyStore } from "../../store/demography.js";
import MetadataTab from "./MetadataTab.vue";
import CustomerTab from "./CustomerTab.vue";
import EmptyTab from "./EmptyTab.vue";

// Store module
const store = useDemographyStore();

// Selected list module
const chosen_place = ref("");
const selected_item = computed( () => store.places.find( its => its.game_id === chosen_place.value ) );
const init_place = (input = false) => {
    if( input ) {
        const first = store.places[0] ?? { game_id: "" };
        chosen_place.value = first.game_id;
    } else {
        store.get_all();
    }
};
store.$subscribe( (mutation, state) => {
    init_place( state.demography_done );
});

// Tabs module
const tabs = [
    { value: 1, text: "基本資料", icon: "is-list-icon" },
    { value: 2, text: "來客", icon: "is-chart-line-icon" },
    { value: 3, text: "標籤", icon: "is-scroll-icon" },
];
const tab_model = ref(1);
const set_tab_model = ({ value = 1 }) => {
    tab_model.value = value;
};
const selected_tab = computed( () => {
    switch (tab_model.value) {
        case 1: return MetadataTab;
        case 2: return CustomerTab;
        default: return EmptyTab;
    }
});
</script>

<style scoped>
section {
    margin: 1rem 0;
}
</style>
