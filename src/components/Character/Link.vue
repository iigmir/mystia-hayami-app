<template>
    <div>
        <router-link v-bind:to="link">
            <pure v-bind:item="item" />
        </router-link>
    </div>
</template>

<script setup lang="js">
import { computed } from "vue";
import Pure from "./Pure.vue";

const props = defineProps(["item"]);
const link = computed( () => `/character/${props.item.app_label_id}` );
</script>
