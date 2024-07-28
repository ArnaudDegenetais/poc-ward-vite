<template>
    <Listbox v-model="selectedLanguage">
        <div class="relative mt-1">
            <ListboxButton
                class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
                <span class="block truncate">
                    {{ selectedLanguage.flag }}
                </span>
                <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                >
                    <GGIcons name="chevron-down-r" color="blue" />
                </span>
            </ListboxButton>
            <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
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
                            :class="[
                                active
                                    ? 'bg-amber-100 text-amber-900'
                                    : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-10 pr-4',
                            ]"
                        >
                            <GGIcons
                                v-if="selected"
                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                name="check-o"
                                color="blue"
                            />
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
console.log('availableLocales : ', availableLocales)
const setLocale = (language) => {
    locale.value = language.value
    selectedLanguage.value = language
}
</script>
