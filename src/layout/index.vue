<script setup lang="ts">
    import {
        UserOutlined,
        FundOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        PoweroffOutlined,
    } from "@ant-design/icons-vue";
    // @ts-ignore
    import { reactive, computed,h,onMounted} from "vue";
    import { useRouter } from "vue-router";

    //router
    const router = useRouter();
    interface stateType {
        selectedKeys: Array<String>;
        openKeys:Array<String>;
        collapsed: Boolean;
        title: string;
        menuList:any;
    }
    const state: stateType = reactive({
        title: "vue3平台",
        openKeys:[],
        selectedKeys: [],
        collapsed: false,
        menuList:[ ]
    });
    interface contentType {
        url: string;
        title: string;
        kind:string;
    }

    const collapeAction=()=>{
        state.collapsed = !state.collapsed
    }

    const clickMenu=(item:any)=>{
        console.log('item',item)
        router.push({
            name:item.name
        })
    }
    //{ item, key, selectedKeys }
    const selectMenu = (e: any) => {
        console.log(e)
    };

    const renderIcon=(icon)=>{
        // return h(icon)
        return ''
    }
    onMounted(() => {
        console.log('router.current.value',router)

        const {routes}=router.options
        state.menuList=routes.map(item=>{
            console.log('item')
            return {
                title:item.meta.title,
                path:item.path,
                key:item.name,
                name:item.name,
                icon:item.meta.icon,
                children:item.children.map(children=>{
                    return {
                        title:children.meta.title,
                        path:children.path,
                        key:children.name,
                        name:children.name,
                    }
                })
            }
        })
    });
</script>

<template>
    <a-layout class="layout-container">
        <a-layout-sider
                v-model:collapsed="state.collapsed"
                :trigger="null"
                collapsible
        >
            <div class="logo" />
            <a-menu
                    v-model:openKeys="state.openKeys"
                    v-model:selectedKeys="state.selectedKeys"
                    theme="dark"
                    mode="inline"

                    @select="selectMenu"
            >
                <a-sub-menu v-for="menu in state.menuList"  :key="menu.key" >
                    <template #icon> {{renderIcon(menu.icon)}}</template>
                    <template #title> <span>{{menu.title}}</span></template>
                    <a-menu-item v-for="menuChild in menu.children" :key="menuChild.id" @click="clickMenu(menuChild)">
                        {{ menuChild.title  }}
                    </a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #ffffff; padding-left: 20px">
                <div style="display: flex">
                    <div style="width: 50%">
                        <menu-unfold-outlined
                                v-if="state.collapsed"
                                class="trigger"
                                @click="collapeAction"
                        />
                        <menu-fold-outlined
                                v-else
                                class="trigger"
                                @click="collapeAction"
                        />
                        {{ state.title }}
                    </div>
                </div>
            </a-layout-header>
            <a-layout-content
                    :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
            >
                <!--                    渲染子路由-->
                <router-view/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<style lang="less">
    .layout-container {
        width: 100%;
        height: 100%;
    }
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.3);
        margin: 16px;
    }

    .site-layout .site-layout-background {
        background: #fff;
    }
    .main-container {
        width: 100%;
        height: 100%;
    }
</style>

