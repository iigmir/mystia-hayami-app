<template>
    <main class="top-gap ts-container">
        <the-navigator />
        <header-title />
        <RouterView />
    </main>
</template>

<script setup lang="js">
import { useFoodStore } from "./store/food";
import { useDemographyStore } from "./store/demography";
import HeaderTitle from "./components/HeaderTitle.vue";
import TheNavigator from "./components/TheNavigator.vue";

useFoodStore().get_all();
useDemographyStore().get_all();
</script>

<style scoped>
.top-gap {
    margin-top: 1rem;
}
</style>
