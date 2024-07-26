<template>
    <div class="bg-rose-950 w-full pt-6">
        <div
            v-for="item in localContent"
            :key="item.title"
            class="text-center pb-8"
        >
            <div class="flex items-center justify-center space-x-2">
                <GGIcons class="block sm:hidden" :name="item.icon" color="white" />
                <router-link class="hidden sm:block" :to="item.path">{{ item.title }}</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { GGIcons } from 'vue-css.gg'
const localContent = [
    { title: 'Agenda', path: '/agenda', icon: 'calendar-dates' },
    { title: 'Notes', path: '/notes', icon: 'notes' },
    { title: 'Absences', path: '/absences', icon: 'timer' },
]
</script>

<style scoped>
a {
    color: white;
}
</style>
