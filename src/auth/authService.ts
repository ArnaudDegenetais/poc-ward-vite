import { InteractionRequiredAuthError } from '@azure/msal-browser'
import { msalInstance } from '@/auth/authConfig'
import { useUserStore } from '@/stores/userStore'

const redirectLogin = async () => {
    await msalInstance.initialize()
    const loginRequest = {
        scopes: [],
    }
    return msalInstance
        .acquireTokenSilent(loginRequest)
        .then(() => {
            const accounts = msalInstance.getAllAccounts()
            msalInstance.setActiveAccount(accounts[0])
            getAccessToken()

            const userStore = useUserStore()
            userStore.setAccount(accounts[0])
            userStore.setUserRoles(accounts[0].idTokenClaims?.roles ?? [])
            userStore.setIsAuthenticated(true)
        })
        .catch((error) => {
            console.error('Redirect login error:', error)
            throw new Error(error)
        })
}

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
    } catch (error: any) {
        console.error('Login error:', error)
        if (error instanceof InteractionRequiredAuthError) {
            redirectLogin()
        } else {
            throw new Error(error)
        }
    }
}

const signOut = async () => {
    await msalInstance.initialize()

    const logoutRequest = {
        account: msalInstance.getActiveAccount(),
    }

    console.log('Signing out...', logoutRequest)

    return msalInstance
        .logoutRedirect(logoutRequest)
        .then(() => {
            const userStore = useUserStore()
            userStore.setIsAuthenticated(false)
            userStore.setUserRoles([])
            userStore.setAccount(null)
            userStore.setAccessToken('')
            localStorage.clear()
        })
        .catch((error) => {
            console.error('Logout error:', error)
            throw new Error(error)
        })
}

const getAccessToken = async () => {
    const tokenRequest = {
        scopes: import.meta.env.VITE_MSAL_SCOPES.split(';'),
    }
    return msalInstance
        .acquireTokenSilent(tokenRequest)
        .then((response) => {
            console.log('Access token acquired', response.accessToken)
            const userStore = useUserStore()
            userStore.setAccessToken(response.accessToken)
        })
        .catch((error: any) => {
            if (error instanceof InteractionRequiredAuthError) {
                redirectLogin()
            } else {
                throw new Error(error)
            }
        })
}

export { redirectLogin, signIn, signOut, getAccessToken }
