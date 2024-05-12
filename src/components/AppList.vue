<template>
  <ul class="app-list">
    <li class="app-list__item" v-for="row in randomItems(100)" :key="row">
      <AppColumns />
    </li>
  </ul>
</template>

<script setup>
import useList from "../hooks/useList";
import AppColumns from "./AppColumns.vue";

const { randomItems } = useList();
</script>

<style lang="sass" scoped>
.app-list
  display: grid
  grid-template-columns: 1fr
  padding: 10px
  box-sizing: border-box
  &__item
    list-style-type: none
</style>
