import { createRouter, createWebHistory } from "vue-router";
import Signup from "../views/Signup.vue";
import Dashboard1 from "../views/Dashboard1.vue";
import Project from "../views/ProjectList.vue";
import ProjectBoard from "../views/ProjectBoard.vue";
import RiwayatAktifitas from "../views/RiwayatAktifitas.vue";
import AllNotif from "../views/AllNotif.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/signup",
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard1,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/project/project-board",
    name: "Project Board",
    component: ProjectBoard,
  },
  {
    path: "/detail-riwayat-aktifitas",
    name: "RiwayatAktifitas",
    component: RiwayatAktifitas,
  },
  {
    path: "/all-notif",
    name: "AllNotif",
    component: AllNotif,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
