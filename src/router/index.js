import { createRouter, createWebHistory } from "vue-router";
// import Dashboard from "../views/Dashboard.vue";
import Dashboard1 from "../views/Dashboard1.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import ProjectBoard from "../views/ProjectBoard.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Project from "../views/ProjectList.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  // {
  //   path: "/dashboard-default",
  //   name: "Dashboard",
  //   component: Dashboard,
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard1,
  },
  {
    path: "/project",
    name: "project",
    component: Project,
  },
  {
    path: "/project-board",
    name: "Project Board",
    component: ProjectBoard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
