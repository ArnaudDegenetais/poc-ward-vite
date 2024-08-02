import { InteractionRequiredAuthError } from '@azure/msal-browser'
import { msalInstance } from '@/auth/azureAuth'
import { useUserStore } from '@/stores/userStore'

const signIn = async () => {
    await msalInstance.initialize() // Call the initialize function

    const loginRequest = {
        scopes: [],
    }
    try {
        // Check if MSAL is initialized before using it
        if (!msalInstance) {
            throw new Error(
                'MSAL not initialized. Call initializeMsal() before using MSAL API.'
            )
        }
        await msalInstance.loginPopup(loginRequest)
        // console.log(msalInstance.getAllAccounts())
        const accounts = msalInstance.getAllAccounts()
        msalInstance.setActiveAccount(accounts[0])
        getAccessToken()
        const userStore = useUserStore()
        userStore.setIsAuthenticated(true)
        userStore.setUserRoles(accounts[0].idTokenClaims?.roles ?? [])
        userStore.setAccount(accounts[0])
    } catch (error) {
        console.error('Login error:', error)
    }
}

const getAccessToken = () => {
    const tokenRequest = {
        scopes: import.meta.env.VITE_MSAL_SCOPES.split(';'),
    }
    return msalInstance
        .acquireTokenSilent(tokenRequest)
        .then((response) => {
            // console.log('Access token acquired', response.accessToken)
            const userStore = useUserStore()
            userStore.setAccessToken(response.accessToken)
        })
        .catch((error) => {
            if (error instanceof InteractionRequiredAuthError) {
                // dispatch('redirectLogin', msalInstance)
            } else {
                throw new Error(error)
            }
        })
}

export { signIn, getAccessToken }
