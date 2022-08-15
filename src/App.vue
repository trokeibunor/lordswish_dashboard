<script setup>
import { RouterView } from "vue-router";
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
  min-width: 100vw;
}
.content{
    width: 100%;
    display: grid;
    grid-template-columns: 20% 1fr;
  }
@media (max-width: 768px){
  .content{
    display: block;
  }
}

</style>
