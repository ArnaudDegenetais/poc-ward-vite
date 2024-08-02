<template>
    <div
        class="grid grid-cols-3 p-4 w-4/5 justify-items-center items-center h-full gap-2"
    >
        <div
            class="col-span-1 bg-blue-emn text-white w-full h-80 border border-white-300 rounded-lg flex items-center justify-center"
        >
            <WidgetCaldendar />
        </div>
        <div
            class="col-span-1 bg-blue-emn text-white w-full h-80 border border-white-300 rounded-lg flex items-center justify-center"
        >
            <h1>NOTES</h1>
        </div>
        <div
            class="col-span-1 bg-blue-emn text-white w-full h-80 border border-white-300 rounded-lg flex items-center justify-center"
        >
            <h1>NEWS</h1>
        </div>
    </div>
    <div class="flex space-x-4 w-4/5">
        <div
            class="bg-white border border-gray-300 rounded-lg p-4 shadow-md flex-1"
        >
            <h2 class="text-xl font-bold mb-2">Admissibles</h2>
            <p class="text-gray-700">This is the content of the first card.</p>
        </div>
        <div
            class="bg-white border border-gray-300 rounded-lg p-4 shadow-md flex-1"
        >
            <h2 class="text-xl font-bold mb-2">Parcours Carrière</h2>
            <p class="text-gray-700">This is the content of the second card.</p>
        </div>
    </div>
</template>

<script setup>
import WidgetCaldendar from '@/components/agenda/WidgetCaldendar.vue';
</script>