<template>
    <article id="router-place">
        <h1>{{ $t("place.title") }}</h1>
        <p>{{ $t("place.subtitle") }}</p>
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

<script setup lang="js">
import { computed, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useDemographyStore } from "../../store/demography.js";
// Components
import MetadataTab from "@/components/MetadataTable/index.vue";
import CustomerTab from "./Tabs/CustomerTab.vue";
import TagsTab from "./Tabs/TagsTab.vue";
import EmptyTab from "./Tabs/EmptyTab.vue";

// Store module
const store = useDemographyStore();

// Selected list module
const chosen_place = ref("");
const selected_item = computed( () => store.places.find( its => its.game_id === chosen_place.value ) );
const local_action = (store) => {
    const first = store.places[0] ?? { game_id: "" };
    chosen_place.value = first.game_id;
};

// Tabs module
const { t } = useI18n();
const tabs = [
    { value: 1, text: t("commons.metadata.title"), icon: "is-list-icon" },
    { value: 2, text: t("commons.customer.title"), icon: "is-chart-line-icon" },
    { value: 3, text: t("place.tags.title"), icon: "is-scroll-icon" },
];
const tab_model = ref(1);
const set_tab_model = ({ value = 1 }) => {
    tab_model.value = value;
};
const selected_tab = computed( () => {
    switch (tab_model.value) {
        case 1: return MetadataTab;
        case 2: return CustomerTab;
        case 3: return TagsTab;
        default: return EmptyTab;
    }
});

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

<style scoped>
section {
    margin: 1rem 0;
}
</style>
