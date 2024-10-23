<template>
    <div>
        <p>Empty link</p>
        {{ item }}
    </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["item"]);
</script>
