<template>
  <div class="content">
    <SideBar />
    <div class="wrapper">
      <NavBar />
      <AltNav />
      <main>
        <!-- UI Projects list (edit and delete fucntionality also included here) -->
        <template v-if="!addingNewProjects">
            <!-- ui if there is no project -->
            <div 
                v-if="!areProjectsAvailable"
                class="w-11/12 mx-auto my-2 flex flex-col justify-center items-center">
                <p class="text-lg text-center font-bold">
                    You currently do not have any UI projects
                </p>
                <button 
                    @click="addingNewProjects = true"
                    class="my-4 bg-slate-500 text-white px-4 py-2 rounded w-fit">Add New Project</button>
            </div>
            <!-- UI if there are projects -->
            <div 
                v-if="areProjectsAvailable"
                class="w-11/12 mx-auto">
                <!-- add New project button -->
                <button 
                    @click="addingNewProjects = true"
                    class="my-4 bg-slate-600 text-white px-4 py-2 rounded w-fit">Add New Project</button>
                <p class="font-bold">Current Projects</p>
                <!-- article grid -->
                <div class="grid grid-cols-auto lg:grid-cols-3 gap-2">
                    <!-- Article card -->
                    <div class="article-box w-auto h-auto bg-white p-2 rounded hover:shadow-sm">
                        <img src="https://picsum.photos/200" alt="" srcset="">
                        <div class="bt-row flex flex-row justify-between">
                            <div>
                                <p class="title font-semibold">PlaceHolder Title</p>
                                <p class="date font-light text-xs ">PlaceHolder Date</p>
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
                                @click="projectArray.editAritcle($event.target.id)"
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
            </div>
        </template>
        <!-- Add new UI projects(doubles as UI for edit UI projects to) -->
        <div
            v-if="addingNewProjects"
            class="w-11/12 lg:w-6/12 bg-white p-4 mx-auto flex flex-col rounded shadow-md">
            <div class="topper flex flex-row justify-between">
                <p class="font-bold">Add New Projects</p>
                <button @click="addingNewProjects = false"><img src="../components/icons/cancelIcon.svg" alt="" srcset=""></button>
            </div>
            <hr class="mt-1">
            <div class="form-content flex-col my-1">
                <p class="font-semibold text-md my-1">Project title</p>
                <input 
                    type="text" 
                    class="w-full  bg-slate-300 outline-none rounded-sm pl-2 py-1" 
                    v-model="UiProject.title"
                    placeholder="Project Title"
                />
            </div>
            <div class="form-content flex-col my-1">
                <p class="font-semibold text-md my-1">Project link</p>
                <input 
                    type="text" 
                    class="w-full  bg-slate-300 outline-none rounded-sm pl-2 py-1" 
                    v-model="UiProject.link"
                    placeholder="Project Link"
                />
            </div>
            <div class="form-content flex-col my-1">
                <p class="font-semibold text-md my-1">Project Features</p>
                <input 
                    type="text" 
                    class="w-full  bg-slate-300 outline-none rounded-sm pl-2 py-1" 
                    v-model="UiProject.features"
                    placeholder="Project Title"
                />
            </div>
            <div class="form-content flex-col my-1">
                <p class="font-semibold text-md my-1">Project Features</p>
                <input 
                    type="file" 
                    class="w-full  bg-slate-300 outline-none rounded-sm pl-2 py-1" 
                    placeholder="Project Title"
                    @change="handleUpImgUpload"
                    :state = "Boolean(projectImg)"
                />
            </div>
            <button @click="submitForm">Save Project</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
import AltNav from "../components/AltNav.vue";
// UI display variables
import {ref, reactive} from "vue";
const areProjectsAvailable = ref(false);
const addingNewProjects = ref(false);
const projectImg = ref(false);
// Form components
const UiProject = reactive({
    title: "",
    link: "",
    img: "",
    features:""
})
// handleImageUpload
// handle image upload
function handleUpImgUpload(e) {
  // const self = this;
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = function () {
    UiProject.img = reader.result;
  };
}
</script>

<style scoped></style>
