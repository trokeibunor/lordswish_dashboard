import { defineStore } from "pinia";
import {db} from "@/db";
import {
  setDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import vue toastification
import { useToast } from "vue-toastification";
export const useUgoStore = defineStore('ugo',{
  id: "ugo",
  state: () => ({
    ugoAbout: "",
    ugoResume: "",
    ugoImage: ""
  }),
  actions: {
    async updateAbout(about){
      try {
        await setDoc(doc(db,"ugo","person"),{
          About: about
        })
        const toast = useToast()
        toast.success("Your About has been updated")
      } catch (error) {
        const toast = useToast();
        toast.error(error);
      }
    },
    // upload resume
    async uploadResume(){
      var storage = getStorage();
      const storageRef = ref(storage, title);
      const uploadArticle = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(uploadArticle.ref);
      try {
        await setDoc(doc(db,"ugo","person"),{
          Resume: downloadUrl
        })
      } catch (error) {
        const toast = useToast()
        toast.error("Resume could not be uploaded :" + error )
      }
    },
    // upload profile picture
    async uploadProfilePic(){
      var storage = getStorage();
      const storageRef = ref(storage, title);
      const uploadArticle = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(uploadArticle.ref);
      try {
        await setDoc(doc,(db,"ugo","person"),{
          ProfilePic: downloadUrl
        })
        const toast = useToast()
        toast.success("Profile has been uploaded")
      } catch (error) {
        const toast = useToast()
        toast.error("Profile could not be uploaded :" + error )
      }
    }
  },
});
