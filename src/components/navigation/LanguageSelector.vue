<template>
    <v-menu>
        <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    <span class="rounded-full bg-black/20 pl-2 pr-2 pt-1 pb-1 shadow-md text-3xl">
                        {{ selectedLanguage.flag }}
                    </span>
                </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="language in languages" :key="language.id">
                <v-list-item-title >
                    <v-btn @click="setLocale(language)">
                        <div class="text-3xl">
                            {{ language.flag }}
                        </div>
                    </v-btn>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const languages = [
    { id: 1, label: 'french', value: 'fr', flag: '🇫🇷' },
    { id: 2, label: 'english', value: 'en', flag: '🇺🇸' },
]
const items = [{ title: 'Settings' }, { title: 'Profile' }, { title: 'Logout' }]
const selectedLanguage = ref(languages[0])
const { locale, availableLocales } = useI18n()
const setLocale = (language) => {
    locale.value = language.value
    selectedLanguage.value = language
}
</script>
