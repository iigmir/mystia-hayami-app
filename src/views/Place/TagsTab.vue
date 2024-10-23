<template>
    <div class="tags">
        <h2>標籤</h2>
        <p>什麼樣的標籤最受歡迎？</p>
        <table class="ts-table is-striped">
            <thead>
                <tr>
                    <th>標籤</th>
                    <th>數量</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="({ name, amount }) in guest_likes">
                    <td>{{ name[$i18n.locale] }}</td>
                    <td>{{ amount }}</td>
                </tr>
            </tbody>
        </table>
        <p>那喝的呢？</p>
        <table class="ts-table is-striped">
            <thead>
                <tr>
                    <th>標籤</th>
                    <th>數量</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="({ name, amount }) in guest_drinks">
                    <td>{{ name[$i18n.locale] }}</td>
                    <td>{{ amount }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useFoodStore } from "../../store/food";
import { useDemographyStore } from "../../store/demography";

// Store & Props module
const props = defineProps(["item"]);
const food_store = useFoodStore();
const demography_store = useDemographyStore();

// List module
/**
 * Increment the count for the number,
 * Then return the accumulator for the next iteration
 */
const get_each_number = (acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
};

const get_tags_table = (obj = { "-1": 1 }, tags = [{ game_id: -1, name: { en: "" } }]) => {
    return Object.entries( obj ).map( ([tagid, amount]) => {
        const { name } = tags.find( i => i.game_id === tagid );
        return { name, amount };
    }).toSorted( (x, y) => y.amount - x.amount );
};

const all_avaiable_guests = computed(() =>
    demography_store.normal_guests
        .concat( demography_store.rare_guests )
        .filter( ({ data }) => data.visits.includes( props.item.game_id ) )
);

// Dish tag module
const guest_likes = computed( () => {
    const action = ({ data }) => data.likes;
    const numbers = all_avaiable_guests.value.map( action ).flat().reduce( get_each_number, {} );
    return get_tags_table(numbers, food_store.dish_tags);
});

// beverage tag module
const guest_drinks = computed( () => {
    const action = ({ data }) => data.drinks;
    const numbers = all_avaiable_guests.value.map( action ).flat().reduce( get_each_number, {} );
    return get_tags_table(numbers, food_store.beverage_tags);
});
</script>
