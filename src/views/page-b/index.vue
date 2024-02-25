<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  title: "page-b 页面",
});
</script>
<template>
  <div style="border: 1px solid #dcdcdc; padding: 10px">
    <p>
      {{ state.title }}
    </p>
  </div>
</template>
