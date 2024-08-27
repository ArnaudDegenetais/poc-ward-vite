import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import { httpApim } from '@/plugins/http'
import { useUserStore } from '@/stores/userStore'
import { getAccessToken } from '@/auth/authService'
// import { ApiRequests, Endpoints } from '@ward/library'

export const useEventsStore = defineStore('events', () => {
    const events = ref([{ start: '', end: '', title: '' }])

    const getTokenIfNot = async () => {
        const userStore = useUserStore()
        let token = userStore.accessToken
        if (!token) {
            await getAccessToken()
            token = userStore.accessToken
        }
        return token
    }

    const transformEvents = (data: any[]) => {
        console.log('data received', data)
        return data.map((event) => ({
            start: event.start.replace('T', ' ').slice(0, 16),
            end: event.end.replace('T', ' ').slice(0, 16),
            title: event.label.trim(),
        }))
    }

    // async function getWardEvents(
    //     interval: { start: any; end: any } = {
    //         start: '2024-01-01T21%253A59%253A59.999Z',
    //         end: '2024-08-31T21%253A59%253A59.999Z',
    //     }
    // ) {
    //     console.log('endpont', Endpoints.events.getEvents)
    //     console.log('ApiRequests', ApiRequests)
    //     return ApiRequests.fromEndpoint(Endpoints.events.getEvents, {
    //         pathParams: null,
    //         queryParams: { from: interval.start, to: interval.end },
    //         data: null,
    //         files: null,
    //     })
    // }

    async function fetchEvents() {
        try {
            // await getWardEvents()
            const token = await getTokenIfNot()
            if (!token) {
                console.error('Failed to get access token')
                return null
            }
            const response = await httpApim.get(
                'https://wardbackend-staging.em-normandie.fr/events?from=2024-07-01T10:00:00Z&to=2024-09-30T10:00:00Z',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            return response
        } catch (error) {
            console.error('Error fetching events:', error)
            return null
        }
    }

    const getEvents = async () => {
        const response = await fetchEvents()
        if (response && response.data) {
            events.value = transformEvents(response.data)
            console.log('events', events.value)
            return response.data
        }
    }

    return {
        events,
        getEvents,
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useEventsStore, import.meta.hot))
}
