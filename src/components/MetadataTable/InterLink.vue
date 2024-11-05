<template>
    <a :href="href">{{ props.text }}</a>
</template>

<script setup lang="js">
import { computed } from "vue";

const props = defineProps({
    qid: String,
    text: String,
    type: String,
});

const href = computed( () => {
    switch (props.type) {
        case "wikidata": return `https://www.wikidata.org/wiki/${props.qid}`;
        case "thwiki": return `https://thwiki.cc/${props.qid}`;
        case "touhouwiki": return `https://en.touhouwiki.net/wiki/${props.qid}`;
        default: return "";
    }
});
</script>
