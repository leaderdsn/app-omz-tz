<template>
  <ul class="app-columns">
    <li class="app-columns__item" v-for="col in randomItems(10)" :key="col">
      {{ col }}
    </li>
  </ul>
</template>

<script setup>
import useList from "../hooks/useList";

const { randomItems } = useList();
</script>

<style lang="sass" scoped>
.app-columns
  display: grid
  grid-auto-flow: column
  grid-auto-columns: max-content
  justify-content: start
  gap: 5px
  padding: 10px
  box-sizing: border-box
  overflow-y: auto
  width: 100%
  min-width: 92px
  max-width: calc(100% - 760px)
  overflow-x: auto
  padding: 1rem
  &__item
    list-style-type: none
    border: 2px solid black
    border-radius: 15px
    padding: 10px
    box-sizing: border-box
    width: 60px
    height: 60px
    display: flex
    align-items: center
    justify-content: center
    transition: transform 1s
    &:hover
      transform: scale(0.8)
</style>
