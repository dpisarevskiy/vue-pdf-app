import About from "@/components/about.vue";
import PdfViewer from "@/views/pdf-app.vue";
import Router from "vue-router";
import Sandbox from "@/views/sandbox.vue";
import ThemeToggling from "@/views/theme-toggling.vue";
import Vue from "vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: PdfViewer
    },
    {
      path: "/theme-toggling",
      name: "theme-togglingh",
      component: ThemeToggling
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
