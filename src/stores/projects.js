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
    currentProjectEdit: ""
  }),
  actions: {
    // check toasts
    getToast(){
      const toast = useToast()
      toast.info("test")
    },
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
    // add article
    async addArticle({title, role, members, scope , duration, tools,image, content}) {
      var storage = getStorage();
      const storageRef = ref(storage, title);
      const uploadArticle = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(uploadArticle.ref);
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
          content: content,
          created: serverTimestamp(),
        });
        const toast = useToast();
        toast.info('File has been added to database')
      } catch (error) {
        if(error){
          const toast = useToast();
          toast.error(`error: ${error}`)
        }
      }
    },
    // edit article
    async editAritcle(title){
      // get article
      const docRef = doc(db, "projects", title);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const editableData = docSnap.data()
        this.currentProjectEdit = {...editableData}
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    // Delete article
    async deleteResource(title) {
      await deleteDoc(doc(db, "projects", title));
      const toast = useToast();
      toast.error(`The Resource -- ${title} has been deleted`);
    },
  }
})