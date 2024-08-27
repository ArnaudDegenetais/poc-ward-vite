<template>
    <n-card
        class="bg-blue-emn border rounded-lg p-4 shadow-element flex-1"
    >
    <n-image width="100" src="/images/banners/Ward-banner-admissibles.png" />
        <h2 class="text-white text-xl font-bold mb-2">Admissibles</h2>
        <n-divider class="text-white" ></n-divider>
        <p class="text-gray-700">This is the content of the first card.</p>
    </n-card>
</template>

<script setup>
import { NDivider, NCard, NImage } from 'naive-ui';
</script>

<style>
.n-divider {
    height: 1px; /* For horizontal divider */
    width: 100%; /* For horizontal divider */
    background-color: white; /* Adjust color as needed */
    margin: 8px 0; /* Adjust spacing as needed */
}

.n-divider.vertical {
    height: 100%; /* For vertical divider */
    width: 1px; /* For vertical divider */
    background-color: white; /* Adjust color as needed */
    margin: 0 8px; /* Adjust spacing as needed */
}
</style>
