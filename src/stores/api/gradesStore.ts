import { defineStore } from 'pinia'
import { ref } from 'vue'
import { httpApim } from '@/plugins/http'
import { useUserStore } from '@/stores/userStore'
import { getAccessToken } from '@/auth/authService'

export const useGradesStore = defineStore('grades', () => {
    const grades = ref(null)

    const getTokenIfNot = async () => {
        const userStore = useUserStore()
        let token = userStore.accessToken
        if (!token) {
            await getAccessToken()
            token = userStore.accessToken
        }
        return token
    }

    async function fetchTranscripts() {
        try {
            const token = await getTokenIfNot()
            if (!token) {
                console.error('Failed to get access token')
                return
            }
            return httpApim.get(
                'https://wardbackend-staging.em-normandie.fr/transcripts',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
        } catch (error) {
            console.error('Error fetching grades', error)
            return null
        }
    }

    const getTranscripts = async () => {
        const response = await fetchTranscripts()
        if (response && response.data) {
            grades.value = response.data
            console.log('grades', grades.value)
            console.log('response TRANSCRIPTS ', response)
            return response.data
        }
    }

    return {
        grades,
        getTranscripts,
    }
})
