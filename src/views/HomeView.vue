<script setup>
import AltNavVue from "../components/AltNav.vue";
import NewArticleVue from "../components/NewArticle.vue";
import {ref} from 'vue';
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
const currentTab = ref('NewArticleVue')
const tabs = {
  NewArticleVue
}
</script>

<template>
  <div class="content">
    <side-bar/>
    <div class="wrapper">
      <nav-bar/>
      <main>
        <alt-nav-vue />
        <component :is="tabs[currentTab]"></component>
      </main>
    </div>
  </div>
</template>
<style scoped>

</style>
