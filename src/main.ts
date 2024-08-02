import { createApp } from 'vue'
import router from '@/router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import EN from './i18n/en.json'
import FR from './i18n/fr.json'
import App from '@/App.vue'
import '@/index.css'

const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    globalInjection: true,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
        en: EN,
        fr: FR,
    },
})

const pinia = createPinia()

createApp(App).use(i18n).use(pinia).use(router).mount('#app')