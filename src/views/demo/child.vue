<script lang="ts" setup>
import { reactive, defineProps, defineEmits } from "vue";
const props = defineProps({
  val: String,
});

const emits = defineEmits(["confirm"]);
const state = reactive({
  title: "child页面",
});

const clickBtn = () => {
  emits("confirm", props.val);
};
</script>
<template>
  <div style="border: 1px solid #dcdcdc; padding: 10px">
    <p>
      {{ state.title }}
    </p>
    <p>{{ props.val }}</p>
    <a-button type="primary" @click="clickBtn">child 按钮</a-button>
  </div>
</template>
