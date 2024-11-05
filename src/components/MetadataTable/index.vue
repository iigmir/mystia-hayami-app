<template>
    <div class="metadata">
        <h2>{{ $t("commons.metadata.title") }}</h2>
        <table class="ts-table is-striped">
            <caption>{{ $t("commons.metadata.title") }}</caption>
            <tbody>
                <tr>
                    <td>{{ $t("commons.metadata.name") }}</td>
                    <td>{{ name }}</td>
                </tr>
                <tr v-if="name_links.length > 0">
                    <td>{{ $t("commons.metadata.links") }}</td>
                    <td>
                        <ul>
                            <li v-for="link in name_links" v-bind:key="link.type">
                                <inter-link v-bind="link" />
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("commons.metadata.dlc") }}</td>
                    <td>{{ item.dlc }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import InterLink from "./InterLink.vue";

const exp =  {
    "app_id": 0,
    "app_label_id": "",
    "game_id": "",
    "name": { "zh-hans": "", "zh-hant": "", "en": "", "ja": "", "ko": "" },
    "links": { "wikidata": null, "thwiki": null, "touhouwiki": null },
    "dlc": "CORE"
};
const props = defineProps(["item"]);
const item = computed( () => props?.item ?? exp );

const name = computed( () => item.value.name[useI18n().locale.value] ?? "-" );
const name_links = computed( () => {
    const texts = ["wikidata", "thwiki", "touhouwiki"];
    function get_qid(type) {
        return item.value.links ? item.value.links[type] : "";
    }
    return texts
        .map( type => ({ type, text: type, qid: get_qid(type) }) )
        .filter( ({ qid }) => Boolean(qid) )
    ;
});
</script>

