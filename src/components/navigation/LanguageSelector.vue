<template>
    <Listbox v-model="selectedLanguage">
        <div class="relative mt-1">
            <ListboxButton
                class="relative w-full cursor-default rounded-full bg-black/20 pl-2 pr-2 pt-1 pb-1 shadow-md focus:outline-none focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-3xl"
            >
                <span class="">
                    {{ selectedLanguage.flag }}
                </span>
            </ListboxButton>
            <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions
                    class="absolute mt-1 max-h-60 overflow-auto rounded-lg bg-white shadow-lg focus:outline-none "
                >
                    <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="language in languages"
                        :key="language.id"
                        :value="language"
                        as="template"
                        @click="setLocale(language)"
                    >
                        <li
                        class="p-4"
                            :class="[
                                active
                                    ? 'bg-blue-100'
                                    : 'text-gray-900',
                                'relative cursor-default select-none',
                            ]"
                        >
                            {{ language.flag }}
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { GGIcons } from 'vue-css.gg'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'


const languages = [
  { id: 1, label: 'french', value: 'fr', flag: '🇫🇷' },
  { id: 2, label: 'english', value: 'en', flag: '🇺🇸' },
]
const selectedLanguage = ref(languages[0])
const { locale, availableLocales } = useI18n()
const setLocale = (language) => {
    locale.value = language.value
    selectedLanguage.value = language
}
</script>
