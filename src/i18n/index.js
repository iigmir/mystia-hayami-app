import { createI18n } from "vue-i18n";
import zhHans from "./zh-hans.json";
import zhHant from "./zh-hant.json";
import en from "./en.json";
import ja from "./ja.json";
import ko from "./ko.json";

const i18n = createI18n({
    locale: "zh-hans",
    fallbackLocale: "zh-hant",
    messages: {
        "zh-hans": zhHans,
        "zh-hant": zhHant,
        "en": en,
        "ja": ja,
        "ko": ko,
    }
});

export default i18n;
