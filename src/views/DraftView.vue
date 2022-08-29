<template>
  <div class="content">
    <side-bar />
    <div class="wrapper">
      <nav-bar />
      <alt-nav-vue />
      <main v-if="!projectArray.edited">
        <div
          class="draft-grid grid grid-cols-auto lg:grid-cols-3 gap-2 w-11/12 mx-auto"
        >
          <div
            class="article-box w-auto h-auto bg-white p-2 rounded hover:shadow-sm"
            :id="item?.title"
            v-for="item in projectData.drafts"
            :key="item?.title"
          >
            <img :src="item?.link" class="rounded" />
            <div class="bt-row flex flex-row justify-between">
              <div>
                <p class="title font-semibold">{{ item?.title }}</p>
                <p class="date font-light text-xs">
                  {{ (item?.created).toDate() }}
                </p>
              </div>
              <button class="w-6" :id="item?.title" @click="conBox($event)">
                <img
                  :id="item?.title"
                  src="../components/icons/dots_veritcal.svg"
                  alt=""
                />
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
                @click="projectArray.editDraft($event.target.id)"
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
        <quill-editor v-if="projectArray.edited" />
      </div>
    </div>
  </div>

  <main>
    <!-- Drafts page -->
  </main>
</template>
<script setup>
import AltNavVue from "../components/AltNav.vue";
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
import QuillEditor from "../components/QuillEditor.vue";
import { ref, onMounted } from "vue";
// import store
import { useProjectsStore } from "../stores/projects";
// functions
const selectedBox = ref("");
// const editing = ref(false);
var clickCounter = 0;
const projectArray = useProjectsStore();
function conBox(event) {
  // step = (clickCounter++ % 2 === 0 ? 3 : 0);
  var step = clickCounter++;

  var target = event.target.id;
  selectedBox.value = target;
  if (step % 2 === 0) {
    selectedBox.value = "";
  }
}
// function editArt(event){
//   var title = event.target.id;
//   this.editing= true;
//   projectArray.editDraft(title);
// }
function deleteArt(event) {
  let title = event.target.id;
  if (confirm("Are you sure you want to do this")) {
    projectData.deleteDraft(title);
  }
}
const projectData = useProjectsStore();
onMounted(() => {
  projectData.getDrafts();
});
</script>
<style scoped></style>
