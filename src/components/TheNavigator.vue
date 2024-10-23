<template>
    <!-- You can test Vue Router here. -->
    <nav class="ts-app-navbar is-fluid">
        <RouterLink to="/" class="item">
            <span class="ts-icon is-house-icon"></span>
            <div class="label">首頁</div>
        </RouterLink>
        <RouterLink to="/about" class="item">
            <span class="ts-icon is-user-icon"></span>
            <div class="label">關於</div>
        </RouterLink>
        <RouterLink to="/place" class="item">
            <span class="ts-icon is-map-icon"></span>
            <div class="label">地點</div>
        </RouterLink>
    </nav>
</template>