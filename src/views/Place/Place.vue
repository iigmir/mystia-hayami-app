<template>
    <div id="router-places">
        <h2>Place</h2>
        <p>Where do you want to go today?</p>
        <select v-model="chosen_place">
            <option
                v-for="its in list"
                v-bind:key="its.game_id"
                v-bind:value="its.game_id"
            >
                {{ its.name[$i18n.locale] }}
            </option>
        </select>
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
            <!-- is-active -->
             <!--  -->
             <component v-bind:is="selected_component" v-bind:item="selected_item" />
        </section>
    </div>
</template>

<script setup>
import { usePlaceStore } from "../../store/places.js";
import { computed, ref, watch } from "vue";
// Other
import MetadataTab from "./MetadataTab.vue";
import EmptyTab from "./EmptyTab.vue";

// Select list
const chosen_place = ref("");
const list = computed( () => usePlaceStore().main_list );
const main_list_inited = computed( () => usePlaceStore().main_list_inited );
watch( main_list_inited, (newval) => {
    if( newval === true ) {
        chosen_place.value = list.value[0].game_id;
    }
});
const selected_item = computed(
    () => list.value.find( its => its.game_id === chosen_place.value )
);

// Tabs
const tab_model = ref(1);
const set_tab_model = ({ value = 1 }) => {
    tab_model.value = value;
};
const tabs = [
    { value: 1, text: "基本資料", icon: "is-list-icon" },
    { value: 2, text: "來客", icon: "is-chart-line-icon" },
    { value: 3, text: "標籤", icon: "is-scroll-icon" },
];

// Selected
const selected_component = computed( () => {
    switch (tab_model.value) {
        case 1: return MetadataTab;
        default: return EmptyTab;
    }
});
</script>

<style scoped>
section {
    margin: 1rem 0;
}
</style>
