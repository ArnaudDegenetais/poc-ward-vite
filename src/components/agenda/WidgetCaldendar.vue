<template>
    <div class="h-full">
        <VueCal hide-view-selector active-view="day" style="color: azure;" xsmall :time-from="8 * 60" :time-to="19 * 60" :locale="locale"/>
    </div>
</template>

<script setup>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>