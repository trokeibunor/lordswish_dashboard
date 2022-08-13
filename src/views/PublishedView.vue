<template>
  <alt-nav-vue @notEditing="notEdit($event)" />
  <main v-if="!editing" >

    <!-- List of published works -->
    <div
      class="article-grid grid grid-cols-3 gap-2 w-11/12 mx-auto"
      
    >
      <div class="article-box w-auto bg-white p-2 rounded hover:shadow-sm" 
        :id="item?.title"
        v-for="item in projectArray.projectInfo"
        :key="item?.title"
      >
        <img :src="item?.link" class="rounded" />
        <div class="bt-row flex flex-row justify-between">
          <div>
            <p class="title font-semibold">{{ item?.title }}</p>
            <p class="date font-light text-xs ">{{ (item?.created).toDate() }}</p>
          </div>
          <button class="w-6" :id="item?.title" @click="conBox($event)">
            <img :id="item?.title" src="../components/icons/dots_veritcal.svg" alt="" />
          </button>
        </div>
        <!-- relative hidden box for edit and delete -->
        <div
          class="EandDbox relative bottom-3/4 left-1/3 w-fit h-fit p-4 flex flex-col bg-slate-100 rounded shadow-sm"
          v-if="Boolean(selectedBox == item?.title)"
        >
          <a
            href="#"
            :id="item?.title"
            @click="editArt($event)"
            class="w-11/12 h-fit px-2 py-1 bg-slate-300 rounded text-center m-1 hover:bg-slate-500"
            >Edit</a
          >
          <a
            href="#"
            class="w-11/12 h-fit px-4 py-1 bg-red-600 text-white rounded m-1 hover:bg-red-800"
            :id="item?.title"
            @click="deleteArt($event)"
            >Delete</a
          >
        </div>
      </div>
    </div>
  </main>
  <div class="edit w-11/12 mx-auto">
    <quill-editor
    :props-role="projectArray.currentProjectEdit.role" 
    :props-members="projectArray.currentProjectEdit.members"
    :props-scope="projectArray.currentProjectEdit.scope"
    :props-tools="projectArray.currentProjectEdit.tools"
    :props-content="projectArray.currentProjectEdit.content"
    :props-duration="projectArray.currentProjectEdit.duration"
    :props-title="projectArray.currentProjectEdit?.title"
    v-if="editing"/>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import AltNavVue from "../components/AltNav.vue";
import QuillEditor from "../components/QuillEditor.vue"
// import store
import { useProjectsStore } from "../stores/projects";
const projectArray = useProjectsStore();
const selectedBox = ref('');
const editing = ref(false);
// functions
var clickCounter = 0;
function conBox(event){
  // step = (clickCounter++ % 2 === 0 ? 3 : 0);
  var step = clickCounter ++;

  var target = event.target.id;
  selectedBox.value = target
  if(step % 2 === 0){
    selectedBox.value = ''
  }
}
function notEdit(value){
  this.editing = value
}
function editArt(event){
  let title = event.target.id;
  this.editing = true;
  projectArray.editAritcle(title)
}
function deleteArt(event){
  let title = event.target.id
  if(confirm("Are you sure you want to do this")){
    projectArray.deleteResource(title)
  }
}
// on mounted
onMounted(() => {
  projectArray.getArticles()
});
</script>

<style>
.article-box {
  cursor: pointer;
  height: 18rem;
}
.article-box > img {
  object-fit: cover;
  width: 100%;
  height: 13rem;
}
</style>
