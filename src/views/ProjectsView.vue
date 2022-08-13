<template>
  <div class="content">
    <side-bar/>
    <div class="wrapper">
      <nav-bar/>
      <main>
        <alt-nav-vue />
        <!-- Quill editor component -->
        <div class="quill-container w-11/12 mx-auto">
          <quill-editor-vue />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import AltNavVue from "../components/AltNav.vue";
import QuillEditorVue from "../components/QuillEditor.vue";
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
</script>

<style scoped></style>
