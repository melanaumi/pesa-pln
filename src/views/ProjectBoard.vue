<template>
  <main>
    <div class="container-fluid mt-6">
      <div
        class="min-height-160"
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
                  title="UI UX Design"
                  style="background-color: #00A2B9; font-weight: bold;"
                >UU</a>
                <a
                  href="javascript:;"
                  class="border-0 avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Final Desain"
                  style="background-color: #bc6060; font-weight: bold;"
                >UX</a>
                <a
                  href="javascript:;"
                  class="border-0 avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Task Design"
                  style="background-color: #7928CA; font-weight: bold;"
                >FG</a>
                <a
                  href="javascript:;"
                  class="border-0 avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="16 More"
                  style="background-color: #6c757d; font-weight: bold;"
                >16 ++</a>
              </div>
            </div>
            <div style="margin: 10px;">
              <argon-button
                color="primary"
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
            <!-- dropdown filter -->
            <div style="margin-top: 1px;">
              <button
                class="border-0 rounded-circle bg-white"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img class="w-100" src="../assets/img/icons/Filter.png" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2" role="menu">
                <div class="p-2 d-flex">
                  <a class="dropdown-item" href="/data">
                    <ArgonRadio style="margin-right: 10px;">Batas Waktu</ArgonRadio>
                  </a>
                </div>
                <div class="p-2 d-flex">
                  <a class="dropdown-item" href="/data">
                    <ArgonRadio style="margin-right: 10px;">Prioritas Tertinggi</ArgonRadio>
                  </a>
                </div>
                <div class="p-2 d-flex">
                  <a class="dropdown-item" href="/data">
                    <ArgonRadio style="margin-right: 10px;">Prioritas Terendah</ArgonRadio>
                  </a>
                </div>
                <div class="p-2 d-flex">
                  <a class="dropdown-item" href="/data">
                    <ArgonRadio style="margin-right: 10px;">Paling Baru</ArgonRadio>
                  </a>
                </div>
                <div class="p-2 d-flex">
                  <a class="dropdown-item" href="/data">
                    <ArgonRadio style="margin-right: 10px;">Paling Lama</ArgonRadio>
                  </a>
                </div>
                <div class="p-2 d-flex">
                  <a class="dropdown-item" href="/data">
                    <ArgonRadio style="margin-right: 10px;">Nama Task (A - Z)</ArgonRadio>
                  </a>
                </div>
              </ul>
            </div>

            <div style="margin: 10px;">
              <img src="../assets/img/icons/Sort.png" />
            </div>

            <!-- dropdown aktivitas dan delete project -->
            <div style="margin-top: 1px;">
              <button
                class="border-0 rounded-circle bg-white"
                type="button"
                id="dropdownAktivitas"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img class="w-100" src="../assets/img/icons/Cho.png" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownAktivitas" role="menu">
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
              <div
                class="card"
                style="background-color: #FFFFFF; border: 1px dashed; border-color: green;"
              >
                <div class="card-body">
                  <div class="mb-0 d-flex justify-content-center text-black">
                    <a
                      class="dropdown-item"
                      href="/data"
                      data-bs-target="#modal-status"
                      data-bs-toggle="modal"
                    >
                      <span style="color: #00A2B9; font-weight: bolder; font-size: x-large;">+</span> &nbsp;&nbsp;Tambah Status
                    </a>
                  </div>
                  <div class="modal" id="modal-status">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div class="modal-content">
                        <!-- modal header -->
                        <div class="modal-header">
                          <h5 class="modal-title">Buat Status</h5>
                          <i
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            class="bi bi-x-lg"
                          ></i>
                        </div>
                        <!-- modal body -->
                        <div class="modal-body">
                          <form>
                            <!-- nama project -->
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Nama Status</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Bisa berupa nama tim, tujuan proyek, atau lainnya"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                            </div>

                            <div class="mb-3">
                              <label>Warna</label>
                              <div class="row w-70">
                                <div
                                  class="col-lg-2"
                                  v-for="(selectColors, index) in selectColor"
                                  :key="index"
                                >
                                  <div
                                    v-if="selectColors !== '#DDDDDD'"
                                    @click="getColorValue(selectColors)"
                                    class="p-4 d-inline-block rounded-circle me-2 roundedCustom position-relative"
                                    :style="{backgroundColor: selectColors}"
                                  >
                                    <img
                                      v-if="colorValue === selectColors"
                                      class="position-absolute centered"
                                      src="@/assets/img/icons/check.png"
                                      alt="icon checklist"
                                    />
                                  </div>
                                  <div
                                    v-else
                                    @click="moreColor = !moreColor"
                                    class="p-4 d-inline-block rounded-circle me-2 roundedCustom position-relative"
                                    :style="{backgroundColor: selectColors, display: moreColor === false ? 'flex' : 'none'}"
                                  >
                                    <img
                                      class="position-absolute centered"
                                      src="@/assets/img/icons/moreIcon.png"
                                      alt="icon more"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-outline-primary"
                            data-bs-dismiss="modal"
                          >Batal</button>
                          <button type="button" class="btn btn-primary">Buat Project</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
import ArgonRadio from "../components/ArgonRadio";
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
  components: {ArgonButton, ArgonRadio, BillingCard, modalLogoutProject, modalDeleteProject, modalUndangMember},
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
    this.$store.state.showNavbar = true;
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