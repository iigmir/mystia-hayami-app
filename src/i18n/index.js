import { createI18n } from "vue-i18n";

const i18n = createI18n({
    locale: "zh-hans",
    fallbackLocale: "zh-hant",
    messages: {
        "zh-hans": {
            app_title: "早见夜雀"
        },
        "zh-hant": {
            app_title: "早見夜雀"
        },
        "en": {
            app_title: "Mystia Hayami"
        },
        "ja": {
            app_title: "ミスティア・ハヤミ"
        },
        "ko": {
            app_title: "미스티아 하야미"
        },
    }
});

export default i18n;
