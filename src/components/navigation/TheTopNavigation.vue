<template>
    <nav class="bg-gradient-to-r from-blue-emn via-blue-emn to-red-emn-mate  p-4 flex items-center justify-between w-full !shadow-emn-global">
        <div class="bg-gradient-to-r from-red-emn-mate to-blue-emn-light p-4 rounded-lg">
                <router-link class="flex text-white text-lg " to="/">
                    <img src="/images/logo/emn-logo-transparent.svg" alt="EMN Logo" class="h-8 mr-2" />
                    <div class="pe-3 text-lg">|</div>
                    <div class="font-bold">WARD</div>
                </router-link>
        </div>
        <div class="flex justify-center items-center space-x-8">
            <ExternalAppDropDown />
            <LanguageSelector />
            <router-link class="" to="/">
              <GGIcons name="comment" color="white" />
            </router-link>
            <ProfilDropDown />
        </div>
    </nav>
</template>

<script setup>
import { GGIcons } from 'vue-css.gg'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'
import LanguageSelector from './LanguageSelector.vue'
import ProfilDropDown from './ProfilDropDown.vue'
import ExternalAppDropDown from './ExternalAppPopOver.vue'
const { t } = useI18n() 
</script>
