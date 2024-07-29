<template>
    <div class="grid grid-rows-12 h-screen bg-slate-900">
        <div class="row-span-1 col-span-12">
            <TheTopNavigation />
        </div>
        <!-- Main Content -->
        <div class="row-span-11 col-span-12 grid grid-cols-12">
            <div class="col-span-2">
                <TheLeftNavigation class="h-full" />
            </div>
            <!-- Main View -->
            <div class="col-span-10">
                <router-view :key="$route.path" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { PublicClientApplication } from '@azure/msal-browser';
import TheTopNavigation from '@/components/navigation/TheTopNavigation.vue'
import TheLeftNavigation from '@/components/navigation/TheLeftNavigation.vue'
import msalConfig from '@/auth/azureAuth'

const isAuthenticated = ref(false);
const authError = ref(null);

// const signIn = async (msalInstance) => {
//   try {
//     const loginResponse = await msalInstance.loginPopup();
//     isAuthenticated.value = !!loginResponse.account;
//   } catch (err) {
//     authError.value = err;
//   }
// };

onMounted(() => {
  console.log('App.vue mounted');
  console.log(msalConfig);
    const msalInstance = new PublicClientApplication(msalConfig);
    // console.log('msalInstance ',msalInstance);

    if (!isAuthenticated.value) {
        console.log('Not authenticated');
        // use the signin method from the msalInstance actions to trigger the login process
        msalConfig.actions.signIn(msalInstance).catch(err => {
            console.log('Error signing in');
            authError.value = err;
        });


        // msalConfig.actions.signIn(msalInstance).catch(err => {
        //     authError.value = err;
        // });

        
    // signIn(msalInstance).catch(err => {
    //   authError.value = err;
    // });
  }
});
</script>