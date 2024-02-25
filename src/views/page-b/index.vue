<script lang="ts" setup>
import { reactive } from "vue";
import { message } from "ant-design-vue";
import { useStore } from "vuex";

const store = useStore();
const state = reactive({
  title: "page-b 页面",
});
const printCount = () => {
  message.info(store.getters["user/getCount"]);
};
const addCount = () => {
  store.commit("user/addCount");
  message.info("commit count+1");
};
const addCountAction = () => {
  store.dispatch("user/setUserInfoAction");
  message.info("action count+1");
};
</script>
<template>
  <div style="border: 1px solid #dcdcdc; padding: 10px">
    <p>
      {{ state.title }}
    </p>
    <p>
      <a-button type="primary" @click="printCount"> printCount </a-button>
    </p>
    <p>
      <a-button type="primary" @click="addCount"> addCount </a-button>
    </p>
    <p>
      <a-button type="primary" @click="addCountAction"> addCountAction </a-button>
    </p>
  </div>
</template>
