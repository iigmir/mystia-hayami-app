<template>
    <div>
        <dl>
            <dt>Name</dt>
            <dd>{{ name }}</dd>
            <dt>Links</dt>
            <dd>
                <inter-link type="wikidata" :qid="item.links.wikidata" text="wikidata" />
                <inter-link type="thwiki" :qid="item.links.thwiki" text="thwiki" />
                <inter-link type="touhouwiki" :qid="item.links.touhouwiki" text="touhouwiki" />
                <!-- props: {
        id: String,
        text: String,
        type: String,
    }, -->
                <!-- <a v-if="item.links.wikidata" href="https://www.wikidata.org/wiki/Q31732">{{ item.links.wikidata }}</a> ,
                <a v-if="item.links.thwiki" href="https://thwiki.cc/%E5%AE%98%E6%96%B9%E5%9C%BA%E6%99%AF">{{ item.links.thwiki }}</a> ,
                <a v-if="item.links.touhouwiki" href="https://touhouwiki.org/wiki/%E5%AE%98%E6%96%B9%E5%9C%BA%E6%99%AF">{{ item.links.touhouwiki }}</a> -->
            </dd>
            <dt>DLC</dt>
            <dd>{{ item.dlc }}</dd>
        </dl>
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
                case "wikidata": return "https://www.wikidata.org/wiki/" + props.qid;
                case "thwiki": return "https://thwiki.cc/" + props.qid;
                case "touhouwiki": return "https://en.touhouwiki.net/wiki/" + props.qid;
                default: return "";
            }
        });
        // return the render function
        return () => props.qid ? h("a", {
            href: href.value,
            textContent: props.text + ", "
        }) : "";
    },
    // template: `<a v-if="qid" v-bind:href="get_link">{{ text }}</a> `
};
</script>

