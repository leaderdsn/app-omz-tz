<template>
  <main class="app-main">
    <AppList />
  </main>
</template>

<script setup>
import AppList from "./components/AppList.vue";
</script>

<style lang="sass" scoped>
.app-main
  display: grid
  grid-template-columns: max-content
  color: #fff
  overflow-x: hidden
  overflow-y: auto
  height: 100%
  border: 2px solid purple
</style>
