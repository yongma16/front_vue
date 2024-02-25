<script lang="ts" setup>
import { reactive } from "vue";
import child from "./child.vue";
import { message } from "ant-design-vue";
const state = reactive({
  title: "demo页面",
});
</script>
<template>
  <div style="border: 1px solid #dcdcdc; padding: 10px">
    <p>
      {{ state.title }}
    </p>
    <child
      val="demo页面 val"
      @confirm="
        (val) => {
          message.info(val);
        }
      "
    />
  </div>
</template>
