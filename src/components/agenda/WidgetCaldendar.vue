<template>
    <div class="h-full">
        <div v-if="loadingEvents" class="flex justify-center">
            <div class="spinner"></div>
        </div>
        <VueCal v-else hide-view-selector active-view="day" style="color: azure;" xsmall :time-from="8 * 60" :time-to="19 * 60" :locale="locale" :events="storeEvents.events"/>
    </div>
</template>

<script setup>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { useI18n } from 'vue-i18n'
import { useEventsStore } from '@/stores/api/eventsStore';
import { ref, onMounted } from 'vue';

const { t, locale } = useI18n()
const loadingEvents = ref(false)
const storeEvents = useEventsStore()

onMounted(async () => {
    loadingEvents.value = true
    await storeEvents.getEvents()
    loadingEvents.value = false
})
</script>