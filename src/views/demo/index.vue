<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  title: "demo",
});
</script>
<template>
  {{ state.title }}
</template>
