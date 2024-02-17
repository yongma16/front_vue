<script setup lang="ts">
  import { ref } from "vue";
  import zhCN from "ant-design-vue/es/locale/zh_CN";
  import dayjs from "dayjs";
  import "dayjs/locale/zh-cn";
  dayjs.locale("zh-cn");
  const locale = ref(zhCN);
</script>

<template>
  <!--  国际化配置-->
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<style scoped>
  #app{
    width: 100vw;
    height: 100vh;
  }
</style>
————————————————

yma16

原文链接：https://blog.csdn.net/qq_38870145/article/details/135579800
