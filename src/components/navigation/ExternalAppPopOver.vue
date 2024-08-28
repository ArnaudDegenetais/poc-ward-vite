<template>
    <Popover v-slot="{ open }" class="relative">
        <PopoverButton
            :class="open ? 'text-white' : 'text-white/90'"
            class="group inline-flex items-center rounded-full bg-black/20 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
            <GGIcons name="menu-grid-o" color="white" />
        </PopoverButton>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
        >
            <PopoverPanel
                class="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
            >
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    <div v-for="element in externalElements" :key="element.id" class="flex items-center p-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
                        <GGIcons :name="element.icon" color="black" />
                        <div class="ml-4 text-base font-medium text-gray-900">
                            {{ element.label }}
                        </div>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script setup>
import { signOut } from '@/auth/authService'
import { GGIcons } from 'vue-css.gg'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const externalElements = [
    { id: 1, label: 'Upward', icon: 'comment', path: 'https://upward.em-normandie.fr/' },
    { id: 2, label: 'Parcours Carrière', icon: 'profile', path: '/profile' },
    { id: 3, label: 'VM', icon: 'settings', path: '/settings' },
    { id: 4, label: 'housing', icon: 'logout', path: '/logout' },
    { id: 5, label: 'GED', icon: 'logout', path: '/confidentialité' },
    { id: 6, label: 'Mes documents', icon: 'logout', path: '/confidentialité' },
    {
        id: 7,
        label: 'Learning center',
        icon: 'logout',
        path: '/confidentialité',
    },
    { id: 8, label: 'Job teaser', icon: 'logout', path: '/confidentialité' },
    { id: 9, label: 'Alumni', icon: 'logout', path: '/confidentialité' },
]
</script>
