<template>
  <main>
    <alt-nav-vue />
    <!-- Quill editor component -->
    <div class="quill-container w-11/12 mx-auto">
      <quill-editor-vue />
    </div>
  </main>
</template>

<script setup>
import AltNavVue from "../components/AltNav.vue";
import QuillEditorVue from "../components/QuillEditor.vue";
</script>

<style scoped></style>
