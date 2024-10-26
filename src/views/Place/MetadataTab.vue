<template>
    <div class="metadata">
        <h2>{{ $t("place.metadata.title") }}</h2>
        <table class="ts-table is-striped">
            <caption>{{ $t("place.metadata.name") }}</caption>
            <tbody>
                <tr>
                    <td>{{ $t("place.metadata.name") }}</td>
                    <td>{{ name }}</td>
                </tr>
                <tr>
                    <td>{{ $t("place.metadata.links") }}</td>
                    <td>
                        <ul>
                            <li v-if="item.links.wikidata"><inter-link type="wikidata" :qid="item.links.wikidata" text="wikidata" /></li>
                            <li v-if="item.links.thwiki"><inter-link type="thwiki" :qid="item.links.thwiki" text="thwiki" /></li>
                            <li v-if="item.links.touhouwiki"><inter-link type="touhouwiki" :qid="item.links.touhouwiki" text="touhouwiki" /></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("place.metadata.dlc") }}</td>
                    <td>{{ item.dlc }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { computed, h } from "vue";
import { useI18n } from "vue-i18n";
import InterLink from "./components/InterLink.vue";

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
</script>

