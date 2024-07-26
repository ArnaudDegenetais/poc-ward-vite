<template>
    <nav class="bg-blue-900 p-4 flex items-center justify-between w-full">
        <div class="">
            <router-link class="text-white text-lg font-bold" to="/">EM Normandie </router-link>
        </div>
        <div class="flex justify-center items-center space-x-8">
            <router-link class="" to="/tuto">
                <GGIcons name="menu-grid-o" color="white" />
            </router-link>
            <router-link class="" to="/tuto">
              <GGIcons name="chevron-down-r" color="white" />
            </router-link>
            <router-link class="" to="/tuto">
              <GGIcons name="comment" color="white" />
            </router-link>
            <ProfilDropDown />
        </div>
    </nav>
</template>

<script setup>
import { GGIcons } from 'vue-css.gg'
import ProfilDropDown from './ProfilDropDown.vue'
</script>
