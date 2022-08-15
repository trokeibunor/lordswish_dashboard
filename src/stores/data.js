import { defineStore } from "pinia";
import { useProjectsStore } from "./projects";

export const useAppData = defineStore("data",{
    state: ()=>({
        pageTracker: "",
        sidebar: true,
        currentView: ""
    }),
    actions: {
        setPage(selected){
            const projectData = useProjectsStore()
            this.pageTracker = selected;
            projectData.currentProjectEdit = null
        },
        changeView(view){
            this.currentView = view;
            if(window.innerWidth <= 1024){
                this.sidebar = false;
            }
        }
    }
})