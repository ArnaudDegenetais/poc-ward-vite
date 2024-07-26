<template>
    <div class="grid grid-rows-12 h-screen bg-slate-900">
        <div class="row-span-1 col-span-12">
            <TheTopNavigation />
        </div>
        <!-- Main Content -->
        <div class="row-span-11 col-span-12 grid grid-cols-12">
            <div class="col-span-2">
                <TheLeftNavigation class="h-full" />
            </div>
            <!-- Main View -->
            <div class="col-span-10">
                <router-view :key="$route.path" />
            </div>
        </div>
    </div>
</template>

<script setup>
import TheTopNavigation from '@/components/navigation/TheTopNavigation.vue'
import TheLeftNavigation from '@/components/navigation/TheLeftNavigation.vue'
</script>