<template>
    <nav class="bg-blue-900 p-4 flex items-center justify-between w-full">
        <div class="">
            <router-link class="text-white text-lg font-bold" to="/">EM Normandie {{ $t('titre.world') }} </router-link>
        </div>
        <div class="flex justify-center items-center space-x-8">
            <router-link class="" to="/">
                <GGIcons name="menu-grid-o" color="white" />
            </router-link>
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
import { useI18n } from 'vue-i18n'
import LanguageSelector from './LanguageSelector.vue'
import ProfilDropDown from './ProfilDropDown.vue'
const { t } = useI18n() 
</script>
