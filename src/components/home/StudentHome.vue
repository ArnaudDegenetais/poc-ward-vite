<template>
    <div class="grid justify-center">
        <div class="px-2 py-8 sm:px-0 ">
            <StudentDashboard />
        </div>
        <n-grid x-gap="12" :cols="2">
            <n-gi>
                <StudentHomeCardAdmissible />
            </n-gi>
            <n-gi>
                <div
                    class="bg-white border border-gray-300 rounded-lg p-4 shadow-emn-global flex-1"
                >
                    <h2 class="text-xl font-bold mb-2">Parcours Carrière</h2>
                    <p class="text-gray-700">
                        This is the content of the second card.
                    </p>
                </div>
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { NGrid, NGi } from 'naive-ui'
import StudentDashboard from './StudentDashboard.vue'
import StudentHomeCardAdmissible from './StudentHomeCardAdmissible.vue'

const { t } = useI18n()

</script>
