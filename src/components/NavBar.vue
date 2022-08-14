<script setup>
import { ref } from "vue";
import { useAppData } from "../stores/data";
const appData = useAppData()
// const activePage = ref("Dashboard");
const searchItem = ref("");
const userName = ref("Lordswish King");
</script>
<template>
  <nav>
    <h3 class="active">{{ appData.currentView }}</h3>
    <div class="right-side-big-screen">
      <div class="search">
        <input type="text" v-model="searchItem" placeholder="Search" />
        <img src="./icons/searchIcon.svg" id="search_icon" alt="" srcset="" />
      </div>
      <div class="notification">
        <img src="./icons/bellIcon.svg" />
        <span class="badge"> </span>
      </div>
      <hr class="divider" />
      <div class="user">
        <h4>{{ userName }}</h4>
        <img src="./icons/ugo_Avater.svg" />
      </div>
    </div>
    <div class="right-side-small-screen">
      <img @click="appData.sidebar = !appData.sidebar" src="../assets/menu.svg" alt="" srcset="">
    </div>
  </nav>
</template>
<style scoped>
nav {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 1fr;
  padding: 16px 8px;
}
nav > h3 {
  font-weight: 700;
  font-size: 24px;
}
nav > .right-side-big-screen {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
}
.right-side-small-screen{
  display: none;
}
@media (max-width: 786px){
  nav > .right-side-big-screen{
    display: none
  }
  nav{
    grid-template-columns: 1fr 8%;
  }
  nav > .right-side-small-screen{
    display: flex;
    align-self: center;
  }
}
.right-side-big-screen > .search {
  display: contents;
}
.right-side-big-screen > .search > input {
  background-color: #c4c4c4;
  width: 250px;
  height: fit-content;
  padding: 8px 16px;
  outline: none;
  border-radius: 4px;
}
.right-side-big-screen > .search > img {
  width: 24px;
  cursor: pointer;
  position: relative;
  right: 8%;
  top: 5px;
}
.right-side-big-screen > .notification {
  padding-top: 2px;
  width: auto;
  display: contents;
}
.right-side-big-screen > .notification > span {
  font-size: 5px;
  color: #fff;
  border-radius: 20px;
  width: 10px;
  height: 10px;
  line-height: 10px;
  text-align: center;
  background-color: #3751ff;
  display: block;
  position: relative;
  bottom: 1rem;
  right: 1.25rem;
}
.right-side-big-screen > .notification > img {
  width: 24px;
}
hr {
  width: 30px;
  height: 10px;
  transform: rotate(90deg);
}
.right-side-big-screen > .user {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
.right-side-big-screen > .user > h4 {
  font-weight: 600;
  font-size: 14px;
}
.right-side-big-screen > .user > img {
  width: 24px;
  height: 24px;
  padding: 4px;
  border: 1px solid #c4c4c4;
  border-radius: 50px;
  cursor: pointer;
}
</style>
