<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" :icon="mdiDotsGrid">
                <span
                    class="rounded-full bg-black/20 pl-2 pr-2 pt-2 pb-2 text-xl text-white"
                >
                    <v-icon :icon="mdiDotsGrid" />
                </span>
            </v-btn>
        </template>
        <v-card>
            <v-row>
                <v-col
                    v-for="element in externalElements"
                    :key="element.id"
                    cols="12"
                    sm="4"
                    style="padding: 2em;"
                >
                    <a :href="element.path" target="_blank">
                        <v-btn
                            class="rounded-lg"
                            color="#4f545c"
                            dark
                            block
                            :prepend-icon="element.icon"
                        >
                            {{ element.label }}
                        </v-btn>
                    </a>
                </v-col>
            </v-row>
        </v-card>
    </v-menu>
</template>

<script setup>
import { signOut } from '@/auth/authService'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiSchool, mdiHandshake, mdiHomeCity, mdiDesktopClassic, mdiTextBoxSearch, mdiFolderNetwork, mdiCastEducation, mdiBriefcase, mdiCircleDouble, mdiDotsGrid } from '@mdi/js'
import { GGIcons } from 'vue-css.gg'
import { md } from 'vuetify/iconsets/md';

const externalElements = [
    {
        id: 1,
        label: 'Upward',
        icon: mdiSchool,
        path: 'https://upward.em-normandie.fr/',
    },
    {
        id: 2,
        label: 'Parcours Carrière',
        icon: mdiHandshake,
        path: 'https://upward.em-normandie.fr/local/pages/carriere-fr',
    },
    {
        id: 3,
        label: 'VM',
        icon: mdiDesktopClassic,
        path: 'https://client.wvd.microsoft.com/arm/webclient/index.html',
    },
    { id: 4, label: 'housing', icon: mdiHomeCity, path: '/logout' },
    {
        id: 5,
        label: 'GED',
        icon: mdiTextBoxSearch,
        path: 'https://emnormandie1-my.sharepoint.com/',
    },
    {
        id: 6,
        label: 'Mes documents',
        icon: mdiFolderNetwork,
        path: 'https://emnormandie1-my.sharepoint.com/',
    },
    {
        id: 7,
        label: 'Learning center',
        icon: mdiCastEducation,
        path: 'https://lc.em-normandie.fr/',
    },
    {
        id: 8,
        label: 'Job teaser',
        icon: mdiBriefcase,
        path: 'https://connect.jobteaser.com/?client_id=e500827d-07fc-4766-97b4-4f960a2835e7&entity_cc_name=Espace+Carri%C3%A8res&entity_color=%23df020e&entity_logo=https%3A%2F%2Fd1guu6n8gz71j.cloudfront.net%2Fsystem%2Fasset%2Flogos%2F7180276%2Flogo.png%3F1693823862&entity_name=EM+Normandie&nonce=db0f2e2f7fbd61a615535f708ce4ea8f&organization_domain=em-normandie&redirect_uri=https%3A%2F%2Fem-normandie.jobteaser.com%2Fusers%2Fauth%2Fconnect%2Fcallback&response_type=code&scope=openid+email+profile+groups+urn%3Aconnect%3Ajobteaser%3Acom%3Aorganization+urn%3Aconnect%3Ajobteaser%3Acom%3Aextra_attributes&state=32a39685c5155d08b46c6402a45da4f3&ui_locales=fr',
    },
    {
        id: 9,
        label: 'Alumni',
        icon: mdiCircleDouble,
        path: 'https://alumni.emnormandie.com/fr/',
    },
]
</script>
