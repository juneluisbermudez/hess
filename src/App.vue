<template>
<v-app>
<v-main class="bg-surface-1 pa-6">
<router-view />
</v-main>
</v-app>
</template>


<script setup>
// root app uses <router-view />; no export default per request
</script>


<style>
html, body, #app { height: 100%; }
</style>