<template>
    <div class="grid justify-center">
        <div class="w-full max-w-md px-2 py-16 sm:px-0">
          <h1 class="text-center text-white p-6">2023-2024</h1>
            <div v-for="year in notes" :key="year.year">
                <div v-if="year.year === '2023-2024'">
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton
                            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                        >
                            {{ year.subject }}
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
                                    v-for="grade in year.grades"
                                    :key="grade.semester"
                                >
                                    <div v-if="grade.semester === 'Semester 2'">
                                        <p>
                                            Continuous Assessment:
                                            {{ grade.continuous_assessment }}
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
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import studentNotes from '@/plugins/studentNotes'

const notes = ref(studentNotes.student.total_grades)
</script>
