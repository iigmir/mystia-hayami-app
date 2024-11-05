<template>
    <div>
        <p>Empty link</p>
        {{ item }}
    </div>
</template>

<script setup lang="js">
const props = defineProps(["item"]);
</script>
