<template>
    <div class="min-h-screen overflow-hidden bg-blue-emn border-r">
        <div
            v-if="userStore.userRoles.includes('BackOffice.Administrator')"
            v-for="item in employeeNavigationContent"
            :key="item.title"
            class="text-center p-8"
        >
            <div class="flex items-center justify-center space-x-2">
                <GGIcons
                    class="block sm:hidden"
                    :name="item.icon"
                    color="white"
                />
                <router-link
                    class="hidden sm:block text-white"
                    :to="item.path"
                    >{{ item.title }}</router-link
                >
            </div>
        </div>
        <div
            v-else
            v-for="item in studentNavigationContent"
            :key="item.title + item.path"
            class="text-center p-8"
        >
            <div class="flex items-center justify-center">
                <GGIcons
                    class="block sm:hidden"
                    :name="item.icon"
                    color="white"
                />
                <router-link
                    class="hidden sm:block text-white"
                    :to="item.path"
                    >{{ item.title }}</router-link
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { ref, computed } from 'vue'
import { GGIcons } from 'vue-css.gg'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const userStore = useUserStore()

const studentNavigationContent = computed(() => [
    { title: t('navigation.agenda'), path: '/agenda', icon: 'calendar-dates' },
    { title: t('navigation.grades'), path: '/notes', icon: 'notes' },
    { title: t('navigation.absences'), path: '/absences', icon: 'timer' },
    { title: t('navigation.news'), path: '/news', icon: 'board' },
])
const employeeNavigationContent = computed(() => [
    {
        title: t('features.rooms-schedule'),
        path: '/agenda',
        icon: 'calendar-dates',
    },
    { title: t('features.news-editor'), path: '/news', icon: 'board' },
])
</script>
