import { defineStore } from "pinia";
import {db} from "@/db";
import {
  setDoc,
  getDoc,
  collection
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import vue toastification
import { useToast } from "vue-toastification";
export const useUgoStore = defineStore({
  id: "ugo",
  state: () => ({
    ugoAbout: "",
    ugoResume: "",
    ugoImage: ""
  }),
  actions: {
    increment() {
      this.counter++;
    },
  },
});
