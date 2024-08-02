<template>
    <div class="grid justify-center">
        <div class="w-full max-w-md px-2 py-16 sm:px-0">
            <TabGroup>
                <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    <Tab as="template" v-slot="{ selected }">
                        <button
                            :class="[
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-blue-emn text-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                            ]"
                        >
                            {{ t('navigation.agenda') }}
                        </button>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <button
                            :class="[
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-blue-emn text-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                            ]"
                        >
                            {{ t('navigation.grades') }}
                        </button>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <button
                            :class="[
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-blue-emn text-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                            ]"
                        >
                            {{ t('navigation.news') }}
                        </button>
                    </Tab>
                </TabList>

                <TabPanels class="mt-2">
                    <TabPanel
                        v-for="(category, idx) in Object.values(categories)"
                        :key="idx"
                        :class="[
                            'rounded-xl bg-blue-emn p-3 h-max-96',
                            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        ]"
                    >
                        <component :is="category.component" class="" />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
        <div class="flex space-x-4 w-4/5">
            <div
                class="bg-white border border-gray-300 rounded-lg p-4 shadow-md flex-1"
            >
                <h2 class="text-xl font-bold mb-2">Admissibles</h2>
                <p class="text-gray-700">
                    This is the content of the first card.
                </p>
            </div>
            <div
                class="bg-white border border-gray-300 rounded-lg p-4 shadow-md flex-1"
            >
                <h2 class="text-xl font-bold mb-2">Parcours Carrière</h2>
                <p class="text-gray-700">
                    This is the content of the second card.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'
import WidgetCaldendar from '@/components/agenda/WidgetCaldendar.vue'
import WidgetNotes from '../notes/WidgetNotes.vue'
import WidgetNews from '../news/WidgetNews.vue'

const { t } = useI18n()

const categories = computed(() => {
    return {
        [t('navigation.agenda')]: { component: WidgetCaldendar },
        [t('navigation.grades')]: { component: WidgetNotes },
        [t('navigation.news')]: { component: WidgetNews },
    }
})
</script>
