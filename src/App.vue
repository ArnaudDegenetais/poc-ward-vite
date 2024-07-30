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
import {msalConfig, msalInstance} from '@/auth/azureAuth'

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

onMounted( async () => {
  console.log('App.vue mounted');
  console.log(msalConfig);
    console.log('msalInstance ',msalInstance);
    await msalInstance.initialize() // Call the initialize function

    const loginRequest = {}
    try {
      // Check if MSAL is initialized before using it
      if (!msalInstance) {
        throw new Error('MSAL not initialized. Call initializeMsal() before using MSAL API.')
      }
      await msalInstance.loginPopup(loginRequest)
      console.log(msalInstance.getAllAccounts());
    } catch (error) {
      console.error('Login error:', error)
    }
    // if (!isAuthenticated.value) {
    //     console.log('Not authenticated');
    //     // use the signin method from the msalInstance actions to trigger the login process
    //     msalConfig.actions.signIn(msalInstance).catch(err => {
    //         console.log('Error signing in');
    //         authError.value = err;
    //     });


        // msalConfig.actions.signIn(msalInstance).catch(err => {
        //     authError.value = err;
        // });

        
    // signIn(msalInstance).catch(err => {
    //   authError.value = err;
    // });
  
});
</script>