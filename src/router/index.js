import { createRouter, createWebHistory } from "vue-router";
import SignInView from "../views/SignInView.vue"
import HomeView from "../views/HomeView.vue";
import ProjectsViewVue from "../views/ProjectsView.vue";
import MessageView from "../views/MessageView.vue";
import SettingsView from "../views/SettingsView.vue";
import LogOutViewVue from "../views/LogOutView.vue";
import PublishedView from "../views/PublishedView.vue";
import DraftView from "../views/DraftView.vue";
import UiProjects from "../views/UiProjects.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: SignInView
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsViewVue,
    },
    {
      path: "/messages",
      name: "messages",
      component: MessageView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
    },
    {
      path: "/logOut",
      name: "logout",
      component: LogOutViewVue
    },
    {
      path: "/published",
      name: "published",
      component: PublishedView
    },
    {
      path: "/drafts",
      name: "drafts",
      component: DraftView
    },
    {
      path: "/uiprojects",
      name: "uiprojects",
      component: UiProjects,
    }
  ],
});

export default router;
