<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-150"
        style="
          background-color: #246997;
          margin-right: -24px;
          margin-left: -34%;
        "
      >
        <span class="mask opacity-6"></span>
      </div>

      <div class="mt-n7" style="position: relative;">
        <div class="p-3">
          <div class="row gx-4">
            <div class="col-auto">
              <div
                class="avatar avatar-xxl avatar-size-50 position-relative"
                style="background-color: #B3E4EA;"
              >
                <p
                  style="font-size: 20pt; font-weight: bolder; margin-top: 15px; color: #246997;"
                >UU</p>
              </div>
            </div>
            <div class="col-auto my-auto">
              <div class="h-100">
                <span class="badge badge-xl bg-gradient-success text-white">TUPOKSI</span>
                <h4 class="mb-3 mt-2 text-white">
                  Sayo Kravits &nbsp;
                  <i class="fas fa-chevron-down" aria-hidden="true"></i>
                </h4>
                <p
                  class="mb-0 mt-3 col-lg-12 col-md-12 my-sm-auto ms-sm-auto me-sm-0 font-weight-bold text-sm"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <p class="mb-0 mt-2 font-weight-bold text-sm text-info">
                  Tampilkan Lebih Banyak &nbsp;
                  <i class="fas fa-chevron-down" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-4 container-fluid">
      <div class="card">
        <div class="card-header pb-4">
          <div class="d-flex align-items-center justify-content-end">
            <div style="margin: 10px;">
              <div class="avatar-group">
                <a
                  href="javascript:;"
                  class="border-0 avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="2 New Messages"
                >
                  <img alt="Image placeholder" src="@/assets/img/team-1.jpg" />
                </a>
                <a
                  href="javascript:;"
                  class="border-0 avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="1 New Message"
                >
                  <img alt="Image placeholder" src="@/assets/img/team-2.jpg" />
                </a>
                <a
                  href="javascript:;"
                  class="border-0 avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="13 New Messages"
                >
                  <img alt="Image placeholder" src="@/assets/img/team-3.jpg" />
                </a>
                <a
                  href="javascript:;"
                  class="border-0 avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="7 New Messages"
                >
                  <img alt="Image placeholder" src="@/assets/img/team-4.jpg" />
                </a>
              </div>
            </div>
            <div style="margin: 10px;">
              <argon-button
                color="success"
                size="sm"
                data-bs-target="#myModalUndangMember"
                data-bs-toggle="modal"
              >
                <img src="../assets/img/icons/user-plus.png" />&nbsp;&nbsp;Undang
              </argon-button>
            </div>
            <div style="margin: 10px;">
              <img src="../assets/img/icons/star3.png" />
            </div>
            <div class="pe-md-3 d-flex align-items-center" style="margin: 10px;">
              <div class="input-group">
                <span class="input-group-text text-body">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
                <input type="text" class="form-control" :placeholder="'Cari Task ...'" />
              </div>
            </div>
            <div style="margin: 10px;">
              <img src="../assets/img/icons/Filter.png" />
            </div>
            <div style="margin: 10px;">
              <img src="../assets/img/icons/Sort.png" />
            </div>
            <!-- dropdown aktivitas dan delete project -->
            <div style="margin-top: 1px;">
              <button
                class="border-0 rounded-circle bg-white"
                type="button"
                id="dropdownAktifitas"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img class="w-100" src="../assets/img/icons/Cho.png" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownAktifitas" role="menu">
                <button
                  class="p-1 d-flex align-items-center dropdown-item"
                  @click="openSideBarRiwayatAktifitas()"
                >
                  <div class="position-absolute mx-1">
                    <img style src="../assets/img/icons/aktivitas_dropdown.png" />
                  </div>
                  <div class="mx-3">
                    <button type="button" class="dropdown-item">Aktivitas</button>
                  </div>
                </button>
                <button
                  class="p-1 d-flex align-items-center dropdown-item"
                  data-bs-target="#myModalLogoutProject"
                  data-bs-toggle="modal"
                >
                  <div class="position-absolute">
                    <img style src="../assets/img/icons/bx_log-in.png" />
                  </div>
                  <div class="mx-3">
                    <button
                      type="button"
                      data-bs-target="#myModalLogoutProject"
                      data-bs-toggle="modal"
                      class="dropdown-item"
                    >Keluar dari project</button>
                  </div>
                </button>
                <button
                  class="p-1 d-flex align-items-center dropdown-item"
                  data-bs-target="#myModalDeleteProject"
                  data-bs-toggle="modal"
                >
                  <div class="position-absolute" style="margin-left: 2px;">
                    <img style src="../assets/img/icons/deleteIcon.png" />
                  </div>
                  <div class="mx-3">
                    <button
                      type="button"
                      data-bs-target="#myModalDeleteProject"
                      data-bs-toggle="modal"
                      class="dropdown-item"
                    >Hapus project</button>
                  </div>
                </button>
              </ul>
            </div>
          </div>
          <!-- modal logout project -->
          <modalLogoutProject />
          <!-- modal delete project -->
          <modalDeleteProject />
          <!-- modal undang member -->
          <modalUndangMember />
          <div class="row mt-3">
            <div class="col-md-3">
              <billing-card />
            </div>
            <div class="col-md-3">
              <billing-card />
            </div>
            <div class="col-md-3">
              <billing-card />
            </div>
            <div class="col-md-3">
              <DashCard></DashCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonButton from "@/components/ArgonButton.vue";
import BillingCard from "./components/BillingCard";
import DashCard from "../examples/Cards/DashCard";
import modalLogoutProject from "@/views/components/modalLogoutProject.vue";
import modalDeleteProject from "@/views/components/modalDeleteProject.vue";
import modalUndangMember from "@/views/components/modalUndangMember.vue";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "profile",
  data() {
    return {
      showMenu: false
    };
  },
  components: {DashCard, ArgonButton, BillingCard, modalLogoutProject, modalDeleteProject, modalUndangMember},
  methods: {
    openSideBarRiwayatAktifitas()  {
      alert('open to sidebar riwayat aktivitas');
    }
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    body.classList.add("profile-overview");
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  }
};
</script>
