<template>
    <div class="grid justify-center">
        <div class="w-full max-w-md px-2 py-16 sm:px-0">
            <TabGroup>
                <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    <Tab
                        v-for="year in Object.keys(groupedNotes)"
                        :key="year"
                        v-slot="{ selected }"
                    >
                        <button
                            :class="[
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white text-blue-700 shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                            ]"
                        >
                            {{ year }}
                        </button>
                    </Tab>
                </TabList>
                <TabPanels class="mt-2">
                    <TabPanel
                        v-for="year in Object.keys(groupedNotes)"
                        :key="year"
                        :class="[
                            'rounded-xl bg-white p-3',
                            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        ]"
                    >
                        <div v-for="note in groupedNotes[year]" :key="note.id">
                            <!-- Display your note details here -->
                            <!-- <p>{{ note.subject }}: {{ note.grades }}</p> -->
                            <Disclosure v-slot="{ open }">
                                <DisclosureButton
                                    class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                                >
                                    {{ note.subject }}
                                </DisclosureButton>
                                <transition
                                    enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-out"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0"
                                >
                                    <DisclosurePanel
                                        class="px-4 pb-2 pt-4 text-sm text-gray-500"
                                    >
                                        <div
                                            v-for="grade in note.grades"
                                            :key="grade.semester"
                                        >
                                            <div
                                                v-if="
                                                    grade.semester === 'Semester 2'
                                                "
                                            >
                                                <p>
                                                    Continuous Assessment:
                                                    {{
                                                        grade.continuous_assessment
                                                    }}
                                                </p>
                                                <p v-if="grade.exam">
                                                    Exam: {{ grade.exam }}
                                                </p>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                </transition>
                            </Disclosure>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import studentNotes from '@/plugins/studentNotes'

const notes = ref(studentNotes.student.total_grades)

const groupeNotesByYear = (notes) => {
    return notes.reduce((acc, note) => {
        const year = note.year
        if (!acc[year]) {
            acc[year] = []
        }
        acc[year].push(note)
        return acc
    }, {})
}

const groupedNotes = ref(groupeNotesByYear(notes.value))
</script>
