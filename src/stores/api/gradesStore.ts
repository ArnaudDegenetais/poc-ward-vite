import { defineStore } from 'pinia'
import { ref } from 'vue'
import { httpApim } from '@/plugins/http'
import studentNotes from '@/plugins/studentNotes'

export const useGradesStore = defineStore('grades', () => {
    const grades = ref(studentNotes)

    async function getGrades() {
        // get the grades from studentNotes
        // and merge them into a single array
    }

    return {
        grades,
        getGrades,
    }
})
