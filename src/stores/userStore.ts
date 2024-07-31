import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const userName = ref('')
    const userRoles = ref<string[]>([])
    const isAuthenticated = ref(false)
    const accessToken = ref('')
    const lastAction = ref('')
    const lastActionPayload = ref('')
    const account = ref(null)

    function setUserNAme(name: string) {
        userName.value = name
    }

    function setUserRoles(roles: string[]) {
        userRoles.value = roles
    }

    function setIsAuthenticated(isAuth: boolean) {
        isAuthenticated.value = isAuth
    }

    function setAccessToken(token: string) {
        accessToken.value = token
    }

    function setLastAction(action: string) {
        lastAction.value = action
    }

    function setLastActionPayload(payload: string) {
        lastActionPayload.value = payload
    }

    function setAccount(account: any) {
        account.value = account
    }

    return {
        userName,
        userRoles,
        isAuthenticated,
        accessToken,
        lastAction,
        lastActionPayload,
        account,
        setUserNAme,
        setUserRoles,
        setIsAuthenticated,
        setAccessToken,
        setLastAction,
        setLastActionPayload,
        setAccount,
    }
})
