<template>
    <v-layout v-if="userStore.isAuthenticated">
        <v-app-bar  height="90" style="z-index: 20;">
            <TheTopNavigation />
        </v-app-bar>

        <v-navigation-drawer :width="150">
            <TheLeftNavigation />
        </v-navigation-drawer>

        <v-main
            class="d-flex align-center justify-center"
            style="min-height: 300px;"
            
        >
            <router-view :key="$route.path" />
        </v-main>
    </v-layout>
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
