import { msalConfig, msalInstance } from '@/auth/azureAuth'

const signIn = async () => {
    console.log('singIn')
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
        console.log(msalInstance.getAllAccounts())
        return true
    } catch (error) {
        console.error('Login error:', error)
    }
}

export { signIn }
