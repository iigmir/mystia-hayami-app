<template>
    <div class="column is-2-wide">
        <div v-if="!hideAvatar" class="ts-image is-circular is-centered">
            <img v-bind:src="imgsrc" width="90" />
        </div>
        <div class="ts-text is-center-aligned">
            <p>{{ item.name[$i18n.locale] }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
    item: Object,
    hideAvatar: Boolean
});

const imgsrc = computed( () => {
    const { avatar } = props.item.data;
    if( props.hideAvatar || !avatar[0] ) {
        return `${import.meta.env["BASE_URL"]}/tamplate-avatar.svg`;
    }
    const domain = import.meta.env.VITE_IMAGE_domain;
    return `${domain}/${avatar[0]}`;
});
</script>
