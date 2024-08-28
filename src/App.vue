<template>
    <v-layout v-if="userStore.isAuthenticated" color="blue">
        <v-app-bar :elevation="10" height="90" style="z-index: 20;">
            <TheTopNavigation />
        </v-app-bar>

        <v-navigation-drawer>
            <TheLeftNavigation />
        </v-navigation-drawer>

        <v-main
            class="d-flex align-center justify-center"
            style="min-height: 300px; background-color: #06166b;"
            
        >
            <router-view :key="$route.path" />
        </v-main>
    </v-layout>
    <!-- <n-config-provider v-if="userStore.isAuthenticated" :theme-overrides="themeOverrides">
        <n-layout position="aboslute" class="bg-blue-emn">
            <n-layout-header
                style="
                    box-shadow: inset 3px 3px 4px 4px rgb(0 0 0 / 0.4);
                    border-radius: 5%;
                "
            >
                <TheTopNavigation />
            </n-layout-header>
            <n-layout has-sider bordered>
                <n-layout-sider :width="200">
                    <TheLeftNavigation />
                </n-layout-sider>
                <n-layout-content>
                    <router-view :key="$route.path" />
                </n-layout-content>
            </n-layout>
        </n-layout>
    </n-config-provider> -->
    <div v-else>
        <HomeLoading />
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { ref, onMounted } from 'vue'
import { NConfigProvider } from 'naive-ui'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import TheTopNavigation from '@/components/navigation/TheTopNavigation.vue'
import TheLeftNavigation from '@/components/navigation/TheLeftNavigation.vue'
import HomeLoading from './components/login/HomeLoading.vue'
import { signIn } from '@/auth/authService'
import { NLayout, NLayoutContent, NLayoutHeader, NLayoutSider } from 'naive-ui'

const themeOverrides = {
    common: {
        primaryColor: '#f7f7f7',
        color: '#f7f7f7',
    },
    Button: {
        textColor: '#FF0000',
    },
}

const userStore = useUserStore()
// const authError = ref(null);

onMounted(async () => {
    await signIn()
})
</script>

<style>
.n-layout {
    background-color: #06166b;
}
</style>
