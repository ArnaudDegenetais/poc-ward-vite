<template>
        <div v-if="userStore.isAuthenticated" class="grid grid-rows-12 h-full bg-slate-300">
            <div class="row-span-1 col-span-12 z-40">
                <TheTopNavigation />
            </div>
            <div class="row-span-11 col-span-12 grid grid-cols-12 z-0">
                <div class="col-span-2">
                    <TheLeftNavigation class="h-90" />
                </div>
                <div class="col-span-10">
                    <router-view :key="$route.path" />
                </div>
            </div>
        </div>
        <div v-else>
            <HomeLoading />
        </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
import { ref, onMounted } from 'vue'
import { PublicClientApplication } from '@azure/msal-browser';
import DashboardLayout from '@/layout/DashboardLayout.vue';
import TheTopNavigation from '@/components/navigation/TheTopNavigation.vue'
import TheLeftNavigation from '@/components/navigation/TheLeftNavigation.vue'
import HomeLoading from './components/login/HomeLoading.vue';
import { msalConfig, msalInstance } from '@/auth/azureAuth'
import { signIn } from '@/auth/authService'

const userStore = useUserStore();
// const authError = ref(null);

onMounted( async () => {
    await signIn();
});
</script>