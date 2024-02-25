<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { message } from "ant-design-vue";
import { useStore } from "vuex";

const store = useStore();
const state = reactive({
  title: "page-a 页面",
});

const printStore = () => {
  console.log(store.state.user);
  message.info("store user:\t" + JSON.stringify(store.state.user));
};
const storeMutation = () => {
  store.commit("user/setUserInfo", {
    test: "mutation",
  });
  message.success(`mutation user/setUserInfo {
    test: "mutation",
  }`);
};
const storeAction = () => {
  store.dispatch("user/setUserInfoAction", {
    test: "action",
  });
  message.success(`dispatch user/setUserInfo {
    test: "mutation",
  }`);
};
onMounted(() => {
  console.log(store);
});
</script>
<template>
  <div style="border: 1px solid #dcdcdc; padding: 10px">
    <p>
      {{ state.title }}
    </p>

    <p>
      <a-button type="primary" @click="printStore"> printStore </a-button>
    </p>
    <p>
      <a-button type="primary" @click="storeMutation"> storeMutation </a-button>
    </p>
    <p>
      <a-button type="primary" @click="storeAction"> storeAction </a-button>
    </p>
  </div>
</template>
