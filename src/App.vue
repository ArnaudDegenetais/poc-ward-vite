<script setup lang="ts">

</script>

<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <div class="container">
            <router-view />
        </div>
    </div>
</template>
