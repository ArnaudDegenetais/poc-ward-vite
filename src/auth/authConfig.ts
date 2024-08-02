import { PublicClientApplication } from '@azure/msal-browser'

export const msalConfig = {
    auth: {
        clientId: import.meta.env.VITE_MSAL_CLIENT_ID,
        authority: import.meta.env.VITE_MSAL_AUTHORITY,
        redirectUri: import.meta.env.VITE_MSAL_REDIRECT_URI,
        postLogoutRedirectUri: import.meta.env.VITE_MSAL_REDIRECT_URI,
        navigateToLoginRequestUrl: true,
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: false,
    },
}

export const msalInstance = new PublicClientApplication(msalConfig)
