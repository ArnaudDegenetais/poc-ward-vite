import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
    },
    // {
    //     path: '/tuto',
    //     name: 'Tuto',
    //     component: () => import('@/pages/Tuto.vue'),
    // },
    {
        path: '/agenda',
        name: 'Agenda',
        component: () => import('@/pages/Agenda.vue'),
    },
    {
        path: '/notes',
        name: 'Notes',
        component: () => import('@/pages/Notes.vue'),
    },
    {
        path: '/absences',
        name: 'Absences',
        component: () => import('@/pages/Absences.vue'),
    },
    // {
    //     path: '/destination/:id/:slug',
    //     name: 'destination.show',
    //     component: () => import('@/pages/DestinationShow.vue'),
    //     props: (route: { params: { id: string; slug: any } }) => ({
    //         ...route.params,
    //         id: parseInt(route.params.id),
    //     }),
    //     children: [
    //         {
    //             path: ':experienceSlug',
    //             name: 'experience.show',
    //             component: () => import('@/pages/ExperienceShow.vue'),
    //             props: (route: {
    //                 params: { id: string; slug: any; experienceSlug: any }
    //             }) => ({
    //                 ...route.params,
    //                 id: parseInt(route.params.id),
    //             }),
    //         },
    //     ],
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
