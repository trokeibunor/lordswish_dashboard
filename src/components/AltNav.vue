<template>
  <div class="top-card-row">
    <router-link
      class="top-card-box"
      id="new_active"
      to="/projects"
      @click="
        toggler.new_active = false;
        toggler.published_active = false;
        toggler.drafts_active = false;
      "
      :class="{ active: toggler.new_active }"
    >
      <h2>New</h2>
    </router-link>
    <div
      class="top-card-box bg-slate-800"
      id="view_active"
    >
      <h4 class="muted">Views</h4>
      <h3>{{ siteViews }}</h3>
    </div>
    <router-link to="/published"
      class="top-card-box"
      id="published_active"
      :class="{ active: toggler.published_active }"
      @click="notEditing"
    >
      <h4 class="muted">Published</h4>
      <h3>{{ publishedWorks }}</h3>
    </router-link>
    <div
      class="top-card-box"
      id="drafts_active"
      :class="{ active: toggler.drafts_active }"
    >
      <h4 class="muted">Drafts/Archieves</h4>
      <h3>{{ drafts }}</h3>
    </div>
  </div>
</template>

<script setup>
import { defineEmits,ref } from "vue";
const siteViews = ref(16);
const publishedWorks = ref(58);
const drafts = ref(68);
// toggler
const toggler = ref({
  new_active: false,
  view_active: false,
  published_active: false,
  drafts_active: false,
});
function notEditing(){
  this.$emit('editing', 'false')
}
</script>

<style scoped>
.top-card-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  width: 95%;
  margin: 1rem auto;
}
.top-card-box {
  background-color: #fff;
  width: auto;
  height: 130px;
  text-align: center;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
.top-card-box:nth-child(2){
  background-color: #888;
  cursor:not-allowed;
}
.top-card-box:hover {
  border: 2px solid #888;
}
.active {
  border: 2px solid #444;
}
.top-card-box > h2 {
  font-size: 32px;
  font-weight: 700;
}
.top-card-box > h3 {
  font-size: 28px;
  font-weight: 700;
}
.top-card-box > .muted {
  color: #ccc;
  font-size: 16px;
  font-weight: 600;
}
</style>
