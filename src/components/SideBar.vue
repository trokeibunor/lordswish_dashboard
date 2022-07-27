<script setup>
import { RouterLink } from "vue-router";
// icons
// import {ref} from 'vue';

</script>
<template>
  <aside>
    <div class="top">
      <router-link to="/"
        ><img src="./icons/chartIcon.svg" /> Dashboard</router-link
      >
      <router-link to="/projects"
        ><img src="./icons/penIcon.svg" />Projects</router-link
      >
      <router-link to="/messages"
        ><img src="./icons/mailIcon.svg" />Messages</router-link
      >
    </div>
    <div class="bottom">
      <router-link to="/settings"
        ><img src="./icons/settingsIcon.svg" />Settings</router-link
      >
      <router-link to="logOut"
        ><img src="./icons/logOutIcon.svg" />Logout</router-link
      >
    </div>
  </aside>
</template>

<style scoped>
aside {
  background-color: #363740;
  color: #a4a6b3;
  font-size: 16px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
}
aside > .top,
aside > .bottom {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
aside > .top > a,
aside > .bottom > a {
  display: flex;
  flex-direction: row;
  gap: 4px;
}
.top > a > img,
.bottom > a > img {
  width: 24px;
  color: #a4a6b3;
}
</style>
