<template>
    <div>
        <table class="ts-table is-striped">
            <caption>基本資料</caption>
            <tbody>
                <tr>
                    <td>名稱</td>
                    <td>{{ name }}</td>
                </tr>
                <tr>
                    <td>連結</td>
                    <td>
                        <ul>
                            <li v-if="item.links.wikidata"><inter-link type="wikidata" :qid="item.links.wikidata" text="wikidata" /></li>
                            <li v-if="item.links.thwiki"><inter-link type="thwiki" :qid="item.links.thwiki" text="thwiki" /></li>
                            <li v-if="item.links.touhouwiki"><inter-link type="touhouwiki" :qid="item.links.touhouwiki" text="touhouwiki" /></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>DLC</td>
                    <td>{{ item.dlc }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { defineProps, computed, h } from "vue";
import { useI18n } from "vue-i18n";
const exp =  {
    "app_id": 0, "app_label_id": "", "game_id": "",
    "name": { "zh-hans": "", "zh-hant": "", "en": "", "ja": "", "ko": "" },
    "dlc": "CORE", "links": { "wikidata": null, "thwiki": null, "touhouwiki": null }
};
const props = defineProps(["item"]);
const item = computed( () => props?.item ?? exp );

const name = computed( () => item.value.name[useI18n().locale.value] ?? "-" );

const InterLink = {
    props: {
        qid: String,
        text: String,
        type: String,
    },
    setup(props) {
        const href = computed( () => {
            switch (props.type) {
                case "wikidata": return `https://www.wikidata.org/wiki/${props.qid}`;
                case "thwiki": return `https://thwiki.cc/${props.qid}`;
                case "touhouwiki": return `https://en.touhouwiki.net/wiki/${props.qid}`;
                default: return "";
            }
        });
        // return the render function
        return () => props.qid ? h("a", {
            href: href.value,
            textContent: props.text
        }) : "";
    },
};
</script>

