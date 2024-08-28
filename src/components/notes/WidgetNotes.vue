<template>
    <div class="grid justify-center">
        <div class="w-full max-w-md px-2">
            <div v-if="loadingNotes" class="spinner"></div>
            <!-- <div v-if="!loadingNotes && !storeGrades.grades">  </div> -->
            <div v-else>
                <v-card>
                    <v-tabs
                        v-model="tab"
                        align-tabs="center"
                        v-for="grade in storeGrades.grades"
                        :key="grade.id"
                    >
                        <v-tab :value="grade.period">{{ grade.period }}</v-tab>
                    </v-tabs>
                    <v-card-text>
                        <v-tabs-window
                            v-model="tab"
                            v-for="grade in storeGrades.grades"
                            :key="grade.id"
                        >
                            <v-tabs-window-item :value="grade.period">
                                <v-expansion-panels
                                    v-for="subject in grade.subjects"
                                    :key="subject.id"
                                >
                                    <v-expansion-panel :title="subject.label">
                                        <v-card-text
                                            v-for="score in subject.scores"
                                            :key="score.id"
                                        >
                                            {{ score.label }} :
                                            {{ score.value }}
                                        </v-card-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-card-text>
                </v-card>
                <n-tabs type="segment" animated>
                    <n-tab-pane
                        v-for="grade in storeGrades.grades"
                        :key="grade.id"
                        :name="grade.period"
                        :tab="grade.period"
                    >
                        <Disclosure
                            v-for="subject in grade.subjects"
                            :key="subject.id"
                        >
                            <DisclosureButton v-slot="{ open }">
                                {{ subject.label }}
                            </DisclosureButton>
                            <DisclosurePanel
                                v-for="score in subject.scores"
                                :key="score.id"
                                class="text-white"
                            >
                                {{ score.label }} : {{ score.value }}
                            </DisclosurePanel>
                        </Disclosure>
                    </n-tab-pane>
                </n-tabs>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { NTabs, NTabPane } from 'naive-ui'
import { NCollapse, NCollapseItem, NCollapseTransition } from 'naive-ui'
import { useGradesStore } from '@/stores/api/gradesStore'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const loadingNotes = ref(false)
const storeGrades = useGradesStore()
const tab = ref(null)

const fetchGrades = async () => {
    await storeGrades.getTranscripts()
    console.log('store.grades', storeGrades.grades)
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
    background:
        radial-gradient(farthest-side, #81829d 94%, #0000) top/9px 9px no-repeat,
        conic-gradient(#0000 30%, #81829d);
    -webkit-mask: radial-gradient(
        farthest-side,
        #0000 calc(100% - 9px),
        #000 0
    );
    animation: spinner-c7wet2 1s infinite linear;
}

@keyframes spinner-c7wet2 {
    100% {
        transform: rotate(1turn);
    }
}
</style>
