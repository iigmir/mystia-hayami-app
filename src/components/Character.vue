<template>
    <div class="column is-2-wide">
        <RouterLink v-bind:to="`/character/${item.app_label_id}`">
            <div class="ts-image is-circular is-centered">
                <img v-bind:src="imgsrc" width="90" />
            </div>
            <div class="ts-text is-center-aligned">
                <p>{{ item.name[$i18n.locale] }}</p>
            </div>
        </RouterLink>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["item"]);

const imgsrc = computed( () => {
    const { avatar } = props.item.data;
    if( !avatar[0] ) {
        return `tamplate-avatar.svg`;
    }
    const domain = import.meta.env.VITE_IMAGE_domain;
    return `${domain}/${avatar[0]}`;
});
</script>
