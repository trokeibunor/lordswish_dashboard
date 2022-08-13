<template>
  <main>
    <div class="content">
      <side-bar/>
      <div class="wrapper">
        <nav-bar/>
        <alt-nav-vue />
        <div class="settings-box">
            <settings-box/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import AltNavVue from "../components/AltNav.vue";
import SettingsBox from "../components/SettingsBox.vue";
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
</script>

<style lang="scss" scoped></style>
