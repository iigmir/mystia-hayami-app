<template>
    <div class="customers">
        <h3>來客</h3>
        <section class="normal">
            <h4>普通</h4>
            <div class="ts-grid">
                <div class="column is-4-wide" v-for="its in fitted_normal_guests">
                    {{ its.name[$i18n.locale] }}
                </div>
            </div>
        </section>
        <div class="ts-divider is-section has-top-spaced-large"></div>
        <section class="rare">
            <h4>稀有、特殊</h4>
            <div class="ts-grid">
                <div class="column is-4-wide" v-for="its in fitted_rare_guests">
                    <p>{{ its.data.avatar ? its.data.avatar[0] : "" }}</p>
                    <p>{{ its.name[$i18n.locale] }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useFoodStore } from "../../store/food";
import { useDemographyStore } from "../../store/demography";

// Store & Props module
const props = defineProps(["item"]);
const food_store = useFoodStore();
const demography_store = useDemographyStore();

const fitted_normal_guests = computed( () => {
    return demography_store.normal_guests.filter( ({ data }) => {
        return data.visits.includes(props.item.game_id);
    });
});
const fitted_rare_guests = computed( () => {
    return demography_store.rare_guests.filter( ({ data }) => {
        return data.visits.includes(props.item.game_id);
    });
});

onMounted( () => {
    if( !food_store.food_done ) {
        food_store.get_all();
    }
});
</script>
