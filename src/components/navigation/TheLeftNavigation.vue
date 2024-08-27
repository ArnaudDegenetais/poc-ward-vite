<template>
    <div
        v-if="userStore.userRoles.includes('BackOffice.Administrator')"
        class="mx-auto flex min-h-screen max-w-screen-sm"
    >
        <div
            class="h-full w-full rounded-lg bg-gradient-to-b from-green-700 via-green-500 to-white-500 p-2"
        >
            <div class="h-full w-full bg-blue-emn rounded-lg">
                <div
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
            </div>
        </div>
    </div>
    <div v-else class="mx-auto flex min-h-screen max-w-screen-sm">
        <div
            class="h-full w-full rounded-lg bg-gradient-to-b from-red-emn-logo via-red-emn-mate to-white-500 p-2 shadow-emn-global"
        >
            <div class="h-full w-full bg-blue-emn rounded-lg">
                <div
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
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { ref, computed } from 'vue';
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
const employeeNavigationContent = computed( () => [
    {
        title: t('features.rooms-schedule'),
        path: '/agenda',
        icon: 'calendar-dates',
    },
    { title: t('features.news-editor'), path: '/news', icon: 'board' },
])
</script>
