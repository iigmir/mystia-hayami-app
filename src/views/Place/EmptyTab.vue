<template>
    <div>
        <p>Empty link</p>
        {{ item }}
    </div>
</template>

<script setup>
const props = defineProps(["item"]);
</script>
