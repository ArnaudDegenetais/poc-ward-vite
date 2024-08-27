<template>
    <div class="">
            <TabGroup>
                <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1 shadow-emn-global">
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

                <TabPanels class="mt-3">
                    <TabPanel
                        v-for="(category, idx) in Object.values(categories)"
                        :key="idx"
                        :class="[
                            'rounded-xl bg-blue-emn p-3 h-max-96',
                            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        ]"
                        class="shadow-emn-global"
                    >
                        <component :is="category.component" class="" />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'
import StudentHomeCardAdmissible from './StudentHomeCardAdmissible.vue'
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
