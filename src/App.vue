<script setup>
import { RouterView } from "vue-router";
import NavBarVue from './components/NavBar.vue';
import SideBarVue from './components/SideBar.vue';
</script>

<template>
  <RouterView />
</template>

<style>

#app {
  margin: 0;
  font-weight: normal;
}
.wrapper{
  max-height: 100vh;
  overflow-y: scroll;
}
body{
  font-family: 'Mulish', sans-serif;
  background-color: #F7F8FC;
}
.content{
  width: 100%;
  display: grid;
  grid-template-columns: 20% 1fr;
}
</style>
