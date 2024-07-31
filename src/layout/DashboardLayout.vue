<template>
  <v-app class="">
    <TheLeftNavigation />
    <TheTopNavigation />
    <v-main>
      <div class="">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import TheTopNavigation from '@/components/navigation/TheTopNavigation.vue'
import TheLeftNavigation from '@/components/navigation/TheLeftNavigation.vue'
</script>

