<template>
    <!-- You can test Vue i18n here. -->
    <header class="header-box">
        <div class="title">
            <h1>{{ $t("app_title") }}</h1>
        </div>
        <div class="languages">
            <div class="ts-select">
                <select v-model="$i18n.locale">
                    <option value="zh-hans">简体中文</option>
                    <option value="zh-hant">繁體中文</option>
                    <option value="en">English</option>
                    <option value="ja">日本語</option>
                    <option value="ko">한국어</option>
                </select>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    margin: 1rem auto;
}

.header-box {
    display: flex;
    justify-content: space-between;
}
</style>
