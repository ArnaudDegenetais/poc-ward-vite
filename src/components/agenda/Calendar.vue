<template>
    <div class="h-75">
        <div v-if="loadingEvents" class="spinner"></div>
        <VueCal v-else style="color: azure;" :time-from="9 * 60" :events="storeEvents.events" :locale="locale"/>
    </div>
</template>
<script setup>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { useEventsStore } from '@/stores/api/eventsStore';
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const loadingEvents = ref(false)
const storeEvents = useEventsStore()

onMounted(async () => {
    loadingEvents.value = true
    await storeEvents.getEvents()
    loadingEvents.value = false
})

</script>