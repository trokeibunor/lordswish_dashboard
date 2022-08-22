<template>
  <div class="top-card-row">
    <div
      class="top-card-box"
      id="new_active"
      @click="chooseSelected('new','/projects'), altNavData.changeView('Dashboard')"
      :class="{active: altNavData.pageTracker == 'new'}"
    >
      <h2>New</h2>
    </div>
    <div
      class="top-card-box"
      id="view_active"
      :class="{active: altNavData.pageTracker == 'views'}"
      @click="chooseSelected('views'), altNavData.changeView('Dashboard')"
    >
      <h4 class="muted">Views</h4>
      <h3>{{ siteViews }}</h3>
    </div>
    <div
      class="top-card-box"
      id="published_active"
      :class="{ active: altNavData.pageTracker == 'published'}"
      @click="chooseSelected('published', '/published'), altNavData.changeView('Dashboard')"
    >
      <h4 class="muted">Published</h4>
      <h3>{{ publishedWorks }}</h3>
    </div>
    <div
      class="top-card-box"
      id="drafts_active"
      @click="chooseSelected('drafts', '/drafts'),altNavData.changeView('Dashboard')"
      :class="{active: altNavData.pageTracker == 'drafts'}"
    >
      <h4 class="muted">Drafts/Archieves</h4>
      <h3>{{ drafts }}</h3>
    </div>
  </div>
</template>

<script setup>
import router from "../router";
import { ref, onMounted} from "vue";
import { useAppData } from "../stores/data";
import { useProjectsStore } from "../stores/projects";


const altNavData = useAppData();
const projectData = useProjectsStore();
const siteViews = ref(0);
const publishedWorks = ref(0);
const drafts = ref(0);
function chooseSelected(selectedView, page){
 
    projectData.edited = false
  altNavData.setPage(selectedView);
  router.push(page)
}
// onMounted
onMounted(() => {
  projectData.getArticles()
  projectData.getDrafts()
  publishedWorks.value = projectData.projectInfo.length;
  drafts.value = projectData.drafts.length
})

</script>

<style scoped>
.top-card-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  width: 95%;
  margin: 1rem auto;
}
@media (max-width: 768px){
  .top-card-row{
    grid-template-columns: 1fr 1fr;
  }
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
  
  cursor:not-allowed;
}
.top-card-box:hover {
  border: 2px solid #888;
}
.active {
  border: 2px solid #444;
  background-color: #888;
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
