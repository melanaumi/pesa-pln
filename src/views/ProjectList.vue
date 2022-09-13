<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <!-- favorit Project -->
          <h1>Favorit</h1>
          <div
            class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3 mb-5"
            v-for="(stateFavorits, index) in stateFavorit"
            :key="index"
          >
            <card
              :value="stateFavorits.title"
              :iconClass="stateFavorits.iconClass"
              :iconBackground="stateFavorits.iconBackground"
              :detail="stateFavorits.detail"
            ></card>
          </div>
          <!-- semua Project -->
          <h1>Semua Project</h1>
          <div
            class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3"
            v-for="(stateSemuaProjects, index) in stateSemuaProject"
            :key="index"
          >
            <card
              :value="stateSemuaProjects.title"
              :iconClass="stateSemuaProjects.iconClass"
              :iconBackground="stateSemuaProjects.iconBackground"
              :detail="stateSemuaProjects.detail"
              directionReverse
            ></card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/views/components/CardBaseProject.vue";

export default {
  name: "project",
  components: {
    Card
  },
  data() {
    return {
        stateFavorit: [
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "Lainnya",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "Tupoksi",
          iconBackground: "bg-gradient-primary",
        },
        ],
        stateSemuaProject: [
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "KPI",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "KPI",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "KPI",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "Lainnya",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "Lainnya",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "Lainnya",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "Tupoksi",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "Tupoksi",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "Tupoksi",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "Lainnya",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "Lainnya",
          iconBackground: "bg-gradient-primary",
        },
        {
          title: "UX UI design",
          iconClass: "ni ni-money-coins",
          detail: "Lainnya",
          iconBackground: "bg-gradient-primary",
        },
        ]
    };
  },
};
</script>
