<script setup>
import AltNavVue from "../components/AltNav.vue";
import NewArticleVue from "../components/NewArticle.vue";
import {ref} from 'vue';
const currentTab = ref('NewArticleVue')
const tabs = {
  NewArticleVue
}
</script>

<template>
  <main>
    <alt-nav-vue />
    <component :is="tabs[currentTab]"></component>
  </main>
</template>
<style scoped>

</style>
