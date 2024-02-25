<script lang="ts" setup>
    import { reactive } from "vue";
    import { message } from "ant-design-vue";
    const state = reactive({
        title: "page-a 页面",
    });
</script>
<template>
    <div style="border: 1px solid #dcdcdc; padding: 10px">
        <p>
            {{ state.title }}
        </p>
    </div>
</template>
