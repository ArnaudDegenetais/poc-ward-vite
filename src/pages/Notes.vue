<template>
    <div class="grid justify-center">
        <div class="w-full max-w-md px-2 py-16 sm:px-0">
            <div v-if="loadingNotes" class="spinner"></div>
            <div v-else>
                <n-tabs type="segment" animated >
                    <n-tab-pane
                        v-for="grade in storeGrades.grades"
                        :key="grade.id"
                        :name="grade.period"
                        :tab="grade.period"
                    >
                        <n-collapse v-for="subject in grade.subjects" :key="subject.id">
                            <n-collapse-item color="#8a2be2" :title="subject.label">
                                <n-collapse color="#8a2be2" v-for="score in subject.scores" :key="score.id">
                                    <n-collapse-item color="#8a2be2" :title="score.label">
                                        {{ score.value }}
                                    </n-collapse-item>
                                </n-collapse>
                            </n-collapse-item>
                        </n-collapse>
                    </n-tab-pane>
                </n-tabs>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { NTabs, NTabPane } from 'naive-ui'
import { NCollapse, NCollapseItem, NCollapseTransition } from 'naive-ui';
import { useGradesStore } from '@/stores/api/gradesStore'

const loadingNotes = ref(false)
const events = ref(null)
const storeGrades = useGradesStore()

const fetchGrades = async () => {
    await storeGrades.getTranscripts()
    console.log('store.grades', storeGrades.grades)
    events.value = storeGrades.grades
}

onMounted(async () => {
        try {
        loadingNotes.value = true
        await fetchGrades()
        loadingNotes.value = false
    } catch (error) {
        console.error('Error on Mounted in fetching datas', error)
    }
})
</script>

<style>
.spinner {
   width: 56px;
   height: 56px;
   border-radius: 50%;
   background: radial-gradient(farthest-side,#81829d 94%,#0000) top/9px 9px no-repeat,
          conic-gradient(#0000 30%,#81829d);
   -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
   animation: spinner-c7wet2 1s infinite linear;
}

@keyframes spinner-c7wet2 {
   100% {
      transform: rotate(1turn);
   }
}

.n-collapse, .n-collapse-item {
    color: white;
}
</style>