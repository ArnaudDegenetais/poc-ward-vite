<template>
        <n-layout position="aboslute" v-if="userStore.isAuthenticated" class="bg-blue-emn">
            <n-layout-header style="box-shadow: inset 3px 3px 4px 4px rgb(0 0 0 / 0.4); border-radius: 5%;">
                <TheTopNavigation />
            </n-layout-header>
            <n-layout has-sider bordered>
                <n-layout-sider :width="200" >
                    <TheLeftNavigation />
                </n-layout-sider>
                <n-layout-content >
                    <router-view :key="$route.path" />
                </n-layout-content>
            </n-layout>
        </n-layout>
        <div v-else>
            <HomeLoading />
        </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
import { ref, onMounted } from 'vue'
import DashboardLayout from '@/layout/DashboardLayout.vue';
import TheTopNavigation from '@/components/navigation/TheTopNavigation.vue'
import TheLeftNavigation from '@/components/navigation/TheLeftNavigation.vue'
import HomeLoading from './components/login/HomeLoading.vue';
import { signIn } from '@/auth/authService'
import { NLayout, NLayoutContent, NLayoutHeader, NLayoutSider } from 'naive-ui';

const userStore = useUserStore();
// const authError = ref(null);

onMounted( async () => {
    await signIn();
});
</script>

<style>
.n-layout{
    background-color: #06166b;
}
</style>