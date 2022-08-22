<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import { ref, reactive,} from "vue";
// import project store
import { useProjectsStore } from "../stores/projects";


const store = useProjectsStore();
const quill  = ref(null)
const project = reactive({
  title: "",
  role: "",
  members: "",
  scope: "",
  duration: "",
  tools: "",
  image: "",
  timeToRead: "",
  content: "",
});
const hasBeganEdit = ref(true)
const projectImg = ref(false);
// update reactive prop
function updateEdit() {
  hasBeganEdit.value = false;
  if(store.currentProjectEdit){
    project.title = store.currentProjectEdit.title;
    project.role = store.currentProjectEdit.role;
    project.members = store.currentProjectEdit.members;
    project.scope = store.currentProjectEdit.scope;
    project.duration = store.currentProjectEdit.duration;
    project.tools = store.currentProjectEdit.tools;
    quill.value.setHTML(store.currentProjectEdit.content);
    } else if(store.currentDraftEdit){
      project.title = store.currentDraftEdit.title;
      project.role = store.currentDraftEdit.role;
      project.members = store.currentDraftEdit.members;
      project.scope = store.currentDraftEdit.scope;
      project.duration = store.currentDraftEdit.duration;
      project.tools = store.currentDraftEdit.tools;
      quill.value.setHTML(store.currentDraftEdit.content);
    }
}
// handle image upload
function handleproImgUpload(e) {
  // const self = this;
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = function () {
    project.image = reader.result;
  };
}
</script>
<template>
  <template v-if="store.editing">
    <div v-if="store.currentProjectEdit">
      <h2 
        v-if="hasBeganEdit"
        class="font-bold" 
        >
        You are about Editing {{store.currentProjectEdit.title}}
      </h2>
      <h2 
        v-if="!hasBeganEdit"
        class="font-bold" 
        >
        You are Editing {{store.currentProjectEdit.title}}
      </h2>
      <button 
        v-if="hasBeganEdit"
        class="py-2 px-3 bg-cyan-500 rounded"
        @click="updateEdit()"
       >Start Editing
      </button>
    </div>
    <div v-else-if="store.currentDraftEdit">
      <h2 
        v-if="hasBeganEdit"
        class="font-bold" 
        >
        You are about Editing {{store.currentDraftEdit.title}}
      </h2>
      <h2 
        v-if="!hasBeganEdit"
        class="font-bold" 
        >
        You are Editing {{store.currentDraftEdit.title}}
      </h2>
      <button
        v-if="hasBeganEdit"
        class="py-2 px-3 bg-cyan-500 rounded"
        @click="updateEdit()"
        >Start Editing
      </button>
    </div>
  </template>
  <div class="btn-row flex flex-row justify-end my-2">
    <button
      class="bg-slate-800 rounded px-4 py-2 mt-4 outline-none hover:bg-slate-500 mr-4 text-white"
      @click="store.addArticle({...project})"
    >
      Add Article
    </button>
    <button
      @click="store.addDraft({...project})"
      class="bg-gray-300 rounded px-4 py-2 mt-4 outline-none hover:bg-gray-600 text-white"
    >
      Save as draft
    </button>
  </div>
  <!-- Entry form -->
  <div class="basic_details grid grid-cols-auto lg:grid-cols-4 gap-2 my-4">
    <label class="block">
      <span class="block text-sm font-medium text-slate-700"
        >Project Title</span
      >
      <input
        class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 outline-none px-4 py-2 rounded"
        :disabled="!hasBeganEdit"
        v-model="project.title"
      />
    </label>
    <label class="block">
      <span class="block text-sm font-medium text-slate-700">My Role</span>
      <input
        class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 outline-none px-4 py-2 rounded"
        v-model="project.role"
      />
    </label>
    <label class="block">
      <span class="block text-sm font-medium text-slate-700">Team Members</span>
      <input
        class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 outline-none px-4 py-2 rounded"
        v-model="project.members"
      />
      <p class="text-slate-400 text-xs mt-1">
        Please seperate each member with a comma
      </p>
    </label>
    <label class="block">
      <span class="block text-sm font-medium text-slate-700"
        >Project Scope</span
      >
      <input
        class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 outline-none px-4 py-2 rounded"
        v-model="project.scope"
      />
    </label>
    <label class="block">
      <span class="block text-sm font-medium text-slate-700">Duration</span>
      <input
        class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 outline-none px-4 py-2 rounded"
        v-model="project.duration"
      />
    </label>
    <label class="block">
      <span class="block text-sm font-medium text-slate-700">Tools</span>
      <input
        class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 outline-none px-4 py-2 rounded"
        v-model="project.tools"
      />
      <p class="text-slate-400 text-xs mt-1">
        Please seperate each tool with a comma
      </p>
    </label>
    <label class="block">
      <span class="block text-sm font-medium text-slate-700">Choose Main image</span>
      <input
        type="file"
        class="block pt-1 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-slate-700 hover:file:bg-violet-100"
        @change="handleproImgUpload"
        :state="Boolean(projectImg)"
      />
    </label>
  </div>
  <QuillEditor
    ref="quill"
    theme="snow"
    toolbar="full"
    class="bg-white my-3"
    v-model:content="project.content"
    contentType="html"
  />
</template>
<style  scoped>
input{
  width: 100%;
}
</style>
