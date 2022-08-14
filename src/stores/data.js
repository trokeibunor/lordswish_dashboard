import { defineStore } from "pinia";

export const useAppData = defineStore("data",{
    state: ()=>({
        pageTracker: "",
        sidebar: false,
        currentView: "Dashboard"
    }),
    actions: {
        setPage(selected){
            this.pageTracker = selected;
        },
        changeView(view){
            this.currentView = view
            this.sidebar = false
        }
    }
})