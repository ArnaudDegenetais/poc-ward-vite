import {
    InteractionRequiredAuthError,
    PublicClientApplication,
    AccountInfo,
    AuthenticationResult,
} from '@azure/msal-browser'

interface State {
    msalConfig: {
        auth: {
            clientId: string
            authority: string
            redirectUri: string
            postLogoutRedirectUri: string
            navigateToLoginRequestUrl: boolean
        }
        cache: {
            cacheLocation: string
        }
    }
    account: AccountInfo | null
    roles: string[]
    isAuthenticated: boolean
    accessToken: string
    lastAction: string
    lastActionPayload: string
}

export default {
    namespaced: true,

    state(): State {
        return {
            msalConfig: {
                auth: {
                    // clientId: import.meta.env.VITE_MSAL_CLIENT_ID || '',
                    clientId: '428a5edc-6c13-4e2f-8177-f35c5a6e5302',
                    // authority: import.meta.env.VITE_MSAL_AUTHORITY || '',
                    authority:
                        'https://login.microsoftonline.com/dffef3d7-143e-41ed-815d-9c383c48eb95',
                    // redirectUri: import.meta.env.BASE_URL || '',
                    redirectUri: 'http://localhost:5173/redirect',
                    // postLogoutRedirectUri: import.meta.env.BASE_URL || '',
                    postLogoutRedirectUri: 'http://localhost:5173/redirect',
                    navigateToLoginRequestUrl: true,
                },
                cache: {
                    cacheLocation: 'localStorage',
                },
            },
            account: null,
            roles: [],
            isAuthenticated: false,
            accessToken: '',
            lastAction: '',
            lastActionPayload: '',
        }
    },

    getters: {
        msalConfig: (state: State) => state.msalConfig,
        account: (state: State) => {
            return localStorage.userAccount
                ? JSON.parse(localStorage.getItem('userAccount') as string)
                : state.account
        },
        roles: (state: State) => {
            return localStorage.userRoles
                ? JSON.parse(localStorage.getItem('userRoles') as string)
                : state.roles
        },
        isAuthenticated: (state: State) => {
            return localStorage.userIsAuthenticated
                ? JSON.parse(
                      localStorage.getItem('userIsAuthenticated') as string
                  )
                : state.isAuthenticated
        },
        accessToken: (state: State) => {
            return localStorage.userToken
                ? JSON.parse(localStorage.getItem('userToken') as string)
                : state.accessToken
        },
        lastAction: (state: State) => state.lastAction,
        lastActionPayload: (state: State) => state.lastActionPayload,
    },

    actions: {
        async redirectLogin(
            { commit, dispatch }: any,
            msalInstance: PublicClientApplication
        ) {
            const loginRequest = {}

            try {
                await msalInstance.acquireTokenPopup({
                    ...loginRequest,
                    scopes: [],
                })
                const accounts = msalInstance.getAllAccounts()
                msalInstance.setActiveAccount(accounts[0])
                await dispatch('getAccessToken', msalInstance)

                commit('setAccount', accounts[0])
                commit('setRoles', accounts[0].idTokenClaims?.roles || [])
                commit('setIsAuthenticated', true)
            } catch (error) {
                throw new Error(error as string)
            }
        },

        async signIn(
            { commit, dispatch }: any,
            msalInstance: PublicClientApplication
        ) {
            const loginRequest = {}

            try {
                await msalInstance.ssoSilent(loginRequest)
                console.log('Silent login successful')
                const accounts = msalInstance.getAllAccounts()
                msalInstance.setActiveAccount(accounts[0])
                await dispatch('getAccessToken', msalInstance)

                commit('setAccount', accounts[0])
                commit('setRoles', accounts[0].idTokenClaims?.roles || [])
                commit('setIsAuthenticated', true)
            } catch (error) {
                console.log('Silent login failed with error', error)
                if (error instanceof InteractionRequiredAuthError) {
                    await dispatch('redirectLogin', msalInstance)
                } else {
                    throw new Error(error as string)
                }
            }
        },

        async signOut({ commit, state }: any) {
            const msalInstance = new PublicClientApplication(state.msalConfig)

            const logoutRequest = {
                account: msalInstance.getAccountByHomeId(
                    state.account?.homeAccountId || ''
                ),
            }

            try {
                await msalInstance.logoutRedirect(logoutRequest)
                commit('setAccount', null)
                commit('setRoles', [])
                commit('setIsAuthenticated', false)
                localStorage.clear()
            } catch (error) {
                throw new Error(error as string)
            }
        },

        async getAccessToken(
            { commit, dispatch }: any,
            msalInstance: PublicClientApplication
        ) {
            const tokenRequest = {
                scopes: (process.env.VUE_APP_MSAL_SCOPES || '').split(';'),
            }

            try {
                const response: AuthenticationResult =
                    await msalInstance.acquireTokenSilent(tokenRequest)
                commit('setAccessToken', response.accessToken)
            } catch (error) {
                if (error instanceof InteractionRequiredAuthError) {
                    await dispatch('redirectLogin', msalInstance)
                } else {
                    throw new Error(error as string)
                }
            }
        },
    },

    mutations: {
        setAccount(state: State, account: AccountInfo) {
            localStorage.setItem('userAccount', JSON.stringify(account))
            state.account = account
        },

        setRoles(state: State, roles: string[]) {
            localStorage.setItem('userRoles', JSON.stringify(roles))
            state.roles = roles
        },

        setIsAuthenticated(state: State, isAuthenticated: boolean) {
            localStorage.setItem(
                'userIsAuthenticated',
                JSON.stringify(isAuthenticated)
            )
            state.isAuthenticated = isAuthenticated
        },

        setAccessToken(state: State, token: string) {
            localStorage.setItem('userToken', JSON.stringify(token))
            state.accessToken = token
        },
    },
}
