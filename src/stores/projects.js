import { defineStore } from 'pinia';
import { db } from "@/db"
import {
    setDoc,
    doc,
    getDocs,
    getDoc,
    collection,
    deleteDoc,
    serverTimestamp,
  } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import vue toastification
import { useToast } from "vue-toastification";

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projectInfo : [],
    currentProjectEdit: "",
    currentDraftEdit: "",
    drafts: [],
    messages: [],
    edited: false,
  }),
  actions: {
    // Get articles
    async getArticles() {
      const querySnapshot = await getDocs(collection(db, "projects"));
      this.projectInfo = [];
      querySnapshot.forEach((doc) => {
        const dataObject = doc.data();
        // Actions can mutate state in pinia
        // mutate projects
        this.projectInfo.push({ ...dataObject });
      });
    },
    // Get drafts 
    async getDrafts() {
      const querySnapshot = await getDocs(collection(db, "drafts"));
      this.drafts = [];
      querySnapshot.forEach((doc) => {
        const dataObject = doc.data();
        // Actions can mutate state in pinia
        // mutate projects
        this.drafts.push({ ...dataObject });
      });
    },
    async getMessages(){
      const querySnapshot = await getDocs(collection(db, "messages"));
      this.messages = [];
      querySnapshot.forEach((doc) => {
        const dataObject = doc.data()
        this.messages({...dataObject})
      })
    },
    // add article
    async addArticle({title, role, members, scope , duration, tools,image, content}) {
      var storage = getStorage();
      const storageRef = ref(storage, title);
      const uploadArticle = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(uploadArticle.ref);
      // Submit Form
      var select = content;
      // Calculate words per minute using standard words per hour
      const text = select;
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      try {
        // push to firebase
        await setDoc(doc(db, "projects", title), {
          title: title,
          link: downloadUrl,
          role: role,
          members: members,
          scope: scope,
          duration: duration,
          tools: tools,
          timeToRead: time,
          content: content,
          created: serverTimestamp(),
        });
        const toast = useToast();
        toast.success('File has been added to database')
      } catch (error) {
        if(error){
          const toast = useToast();
          toast.error(`error: ${error}`)
        }
      }
    },
    // Add to draft
    async addDraft({title, role, members, scope, duration, tools, image, content}){
      var storage = getStorage();
      const storageRef = ref(storage, title);
      const uploadArticle = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(uploadArticle.ref);
      try {
        // push to firebase
        await setDoc(doc(db, "drafts", title), {
          title: title,
          link: downloadUrl,
          role: role,
          members: members,
          scope: scope,
          duration: duration,
          tools: tools,
          content: content,
          created: serverTimestamp(),
        });
        const toast = useToast();
        toast.info('Saved to Drafts')
      } catch (error) {
        if(error){
          const toast = useToast();
          toast.error(`error: ${error}`)
        }
      }
    },
    // edit article
    async editAritcle(title){
      this.edited = true;
      // get article
      const docRef = doc(db, "projects", title);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const editableData = docSnap.data()
        this.currentProjectEdit = {...editableData}
      } else {
        const toast = useToast()
        toast.error("No such document Exists");
      }
    },
    // Edit Draft
    async editDraft(title){
      this.edited = true;
      // get Draft
      const docRef = doc(db,"drafts", title);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const editableData = docSnap.data()
        this.currentDraftEdit = {...editableData}
      } else {
        const toast = useToast()
        toast.error("No such document Exists");
      }
    },
    // empty current Edit
    empEdit(){
      this.currentProjectEdit = "";
      this.currentDraftEdit = "";
    },
    // Delete article
    async deleteResource(title) {
      await deleteDoc(doc(db, "projects", title));
      const toast = useToast();
      toast.error(`The Resource -- ${title} has been deleted`);
    },
    async deleteDraft(title){
      await deleteDoc(doc(db, "drafts", title));
      const toast = useToast();
      toast.error(`The Resource -- ${title} has been deleted`);
    }
  }
})