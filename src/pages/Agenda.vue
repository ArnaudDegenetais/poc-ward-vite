<template>
    <DatePicker />
    <Calendar />
</template>

<script setup>
import DatePicker from '@/components/agenda/DatePicker.vue';
import Calendar from '@/components/agenda/Calendar.vue';
import { useCampusStore } from '@/stores/api/campusStore';
import { onMounted } from 'vue';
const campusStore = useCampusStore();
onMounted( async () => {
    await campusStore.getCampus();
});
</script>