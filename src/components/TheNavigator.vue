<template>
    <!-- You can test Vue Router here. -->
    <nav class="ts-app-navbar is-fluid">
        <RouterLink to="/" class="item">
            <span class="ts-icon is-house-icon"></span>
            <div class="label">{{ $t("home.title") }}</div>
        </RouterLink>
        <RouterLink to="/about" class="item">
            <span class="ts-icon is-user-icon"></span>
            <div class="label">{{ $t("about.title") }}</div>
        </RouterLink>
        <RouterLink to="/place" class="item">
            <span class="ts-icon is-map-icon"></span>
            <div class="label">{{ $t("place.title") }}</div>
        </RouterLink>
    </nav>
</template>