<template>
    <div class="customers">
        <h2>{{ $t("commons.customer.title") }}</h2>
        <section class="normal">
            <h4>{{ $t("commons.customer.regular") }}</h4>
            <div class="ts-grid">
                <div class="column is-2-wide" v-for="item in fitted_normal_guests" v-bind:key="item.game_id" >
                    <customer-info v-bind:item="item" />
                </div>
            </div>
        </section>
        <div class="ts-divider is-section has-top-spaced-large"></div>
        <section class="rare">
            <h4>{{ $t("commons.customer.rare") }}</h4>
            <div class="ts-grid">
                <div class="column is-2-wide" v-for="item in fitted_rare_guests" v-bind:key="item.game_id">
                    <customer-info v-bind:item="item" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="js">
import CustomerInfo from "@/components/Character/Link.vue";
import { computed } from "vue";
import { useDemographyStore } from "@/store/demography";

// Store & Props module
const props = defineProps(["item"]);
const demography_store = useDemographyStore();

// List module
const get_game_id = ({ data }) => data.visits.includes(props.item.game_id);
const fitted_normal_guests = computed( () => demography_store.normal_guests.filter( get_game_id ) );
const fitted_rare_guests = computed( () => demography_store.rare_guests.filter( get_game_id ) );
</script>
