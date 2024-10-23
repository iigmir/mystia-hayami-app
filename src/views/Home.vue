<template>
    <div id="router-home">
        <h1>{{ $t("home.title") }}</h1>
        <p>
            <span class="ts-icon is-user-icon"></span>
            {{ $t("home.subtitle", { app_title: $t("app_title") }) }}
        </p>
    </div>
</template>
