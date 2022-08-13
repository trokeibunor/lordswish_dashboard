<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import { ref, reactive, onMounted,computed, onBeforeMount } from "vue";
// import project store
import { useProjectsStore } from "../stores/projects";
const props = defineProps({
  propsTitle: String,
  propsRole: String,
  propsMembers:String,
  propsScope: String,
  propsTools: String,
  propsContent: String,
  propsDuration: String,
})
// reassigned values of the props when editing
  const editTitle = ref(props.propsTitle);
  const editRole = ref(props.propsRole);
  const editMembers = ref(props.propsMembers);
  const editScope = ref(props.propsScope);
  const editTools = ref(props.propsTools);
  const editDuration = ref(props.propsDuration);
// const editContent = ref(props.propsContent)
const store = useProjectsStore();

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
const projectImg = ref(false)
// on Mounted
onBeforeMount(()=>{
  project.title = computed(()=>{
    return editTitle.value
  })
  project.role = computed(()=>{
    return editRole.value
  })
  project.members = computed(()=>{
    return editMembers.value
  })
  project.scope = computed(()=>{
    return editScope.value
  })
  project.tools = computed(()=>{
    return editTools.value
  });
  project.duration = computed(()=>{
    return editDuration.value
  });
})
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
// Submit Form
var select = project.content;
// Calculate words per minute
const text = select;
const wpm = 225;
const words = text.trim().split(/\s+/).length;
const time = Math.ceil(words / wpm);
// add to data
project.timeToRead = time;
project.content = text;
// call method from store
// click article button

</script>
<template>
  {{project.title}}
  <div class="btn-row flex flex-row justify-end my-2">
    <button
      class="bg-slate-800 rounded px-4 py-2 mt-4 outline-none hover:bg-slate-500 mr-4 text-white"
      @click="store.addArticle({...project})"
    >
      Add Article
    </button>
    <button
      @click="store.getToast()"
      class="bg-gray-300 rounded px-4 py-2 mt-4 outline-none hover:bg-gray-600 text-white"
    >
      Save as draft
    </button>
  </div>
  <!-- Entry form -->
  <div class="basic_details grid grid-cols-4 gap-2 my-4">
    <label class="block">
      <span class="block text-sm font-medium text-slate-700"
        >Project Title</span
      >
      <input
        class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 outline-none px-4 py-2 rounded"
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
      <span class="sr-only">Choose Main image</span>
      <input
        type="file"
        class="block pt-5 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-slate-700 hover:file:bg-violet-100"
        @change="handleproImgUpload"
        :state="Boolean(projectImg)"
      />
    </label>
  </div>
  <QuillEditor
    theme="snow"
    toolbar="full"
    class="bg-white"
    v-model:content="project.content"
    contentType="html"
  />
</template>
<style lang="scss" scoped></style>
