<template>
    <div class="">
        <v-card style="box-shadow: 4px 4px 3px 3px rgb(0 0 0 / 0.4);">
            <v-tabs v-model="tab" align-tabs="center">
                <v-tab value="one">{{ t('navigation.agenda') }}</v-tab>
                <v-tab value="two">{{ t('navigation.grades') }}</v-tab>
                <v-tab value="three">{{ t('navigation.news') }}</v-tab>
            </v-tabs>
            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <WidgetCaldendar />
                    </v-tabs-window-item>
                    <v-tabs-window-item value="two">
                        <WidgetNotes />
                    </v-tabs-window-item>
                    <v-tabs-window-item value="three">
                        <WidgetNews />
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>
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
const tab = ref(null)

const categories = computed(() => {
    return {
        [t('navigation.agenda')]: { component: WidgetCaldendar },
        [t('navigation.grades')]: { component: WidgetNotes },
        [t('navigation.news')]: { component: WidgetNews },
    }
})
</script>
