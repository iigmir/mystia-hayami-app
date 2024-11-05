<template>
    <div class="column is-2-wide">
        <pure v-bind:item="item" />
    </div>
</template>

<script setup lang="js">
import Pure from "./Pure.vue";
const props = defineProps(["item"]);
</script>
