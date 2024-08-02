import { defineStore } from 'pinia'
import { ref } from 'vue'
import { httpApim } from '@/plugins/http'

export const useCampusStore = defineStore('campus', () => {
    const campusEndpoint = ref('mscampus/api/campus')
    const campus = ref([])

    async function getCampus() {
        return httpApim
            .post(`${campusEndpoint.value}/filter`, {})
            .then((response) => {
                console.log('Campus fetched:', response.data)
                campus.value = response.data
            })
            .catch((error) => {
                console.error('Error fetching campus:', error)
            })
    }

    return {
        campusEndpoint,
        campus,
        getCampus,
    }
})
