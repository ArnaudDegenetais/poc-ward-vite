<template>
    <Menu as="div" class="relative inline-block text-left">
        <MenuButton
            class="inline-flex w-full justify-center rounded-full bg-black/20 px-3 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
            <GGIcons name="profile" color="white" />
        </MenuButton>
        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <MenuItems
                class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]">
                  {{  }}
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]">
                  <router-link to="/">Profile</router-link>
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]">
                  <router-link to="/">Settings</router-link>
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                @click="signOut"
                >
                  Logout
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-xs',
                ]">
                  <router-link to="/">confidentialité</router-link>
                </button>
              </MenuItem>
            </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { signOut } from '@/auth/authService';
import { GGIcons } from 'vue-css.gg'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

</script>
