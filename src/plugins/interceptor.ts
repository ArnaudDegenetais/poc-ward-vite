import { useUserStore } from '@/stores/userStore'

const setup = (
    axios: {
        interceptors: {
            request: { use: (arg0: (config: any) => void) => void }
        }
    },
    emitter: any
) => {
    const userStore = useUserStore()
    axios.interceptors.request.use((config) => {
        const token = userStore.accessToken
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            }
        }
        return config
    })
}
