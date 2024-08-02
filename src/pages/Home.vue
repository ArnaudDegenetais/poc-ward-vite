<template>
    <div class="">
    <EmployeeHome v-if="userStore.userRoles.includes('BackOffice.Administrator')" />
    <StudentHome v-else />
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
import { ref, onMounted } from 'vue';
import EmployeeHome from '@/components/home/EmployeeHome.vue';
import StudentHome from '@/components/home/StudentHome.vue';

const userStore = useUserStore();
// onMounted(() => {
//     console.log('userStore.roles: ', userStore.userRoles);
// });
</script>
