<template>
    <main class="top-gap ts-container">
        <the-navigator />
        <header-title />
        <RouterView />
    </main>
</template>

<script setup>
import { useDataStore } from "./store/data";
import HeaderTitle from "./components/HeaderTitle.vue";
import TheNavigator from "./components/TheNavigator.vue";

useDataStore().get_all();
</script>

<style scoped>
.top-gap {
    margin-top: 1rem;
}
</style>
