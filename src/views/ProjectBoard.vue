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
              <!-- not hover -->
              <div
                id="palletWarna"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
                class="avatar avatar-xxl avatar-size-50 position-relative roundedCustom"
                style="background-color: #B3E4EA; cursor: pointer;"
              >
                <div
                  class="avatar avatar-xxl avatar-size-50 position-absolute hoverEdit"
                  style="background-color: rgba(255, 255, 255, .6); cursor: pointer;"
                >
                  <img
                    class="hoverImage"
                    style="width: 35px;"
                    src="../assets/img/icons/edit-avatar.png"
                    alt="icon edit"
                  />
                </div>
                <p
                  class="hoverText"
                  style="font-size: 20pt; font-weight: bolder; margin-top: 15px; color: #246997;"
                >UU</p>
              </div>
              <palletColor />
            </div>
            <div class="col-8 my-auto">
              <div class="h-100">
                <!-- dropdown edit tipe project -->
                <span
                  id="dropdownEditTipeProject"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  class="badge badge-xl bg-gradient-success text-white mx-2"
                  style="cursor: pointer; text-transform: none;"
                >{{tipeProjectValue}}</span>
                <ul class="dropdown-menu" aria-labelledby="dropdownEditTipeProject" role="menu">
                  <div
                    class="p-2 d-flex"
                    v-for="(setTipeProject, index) in  tipeProject"
                    :key="index"
                  >
                    <a
                      class="dropdown-item fw-bold"
                      style="cursor: pointer;"
                      @click="getTipeProjectValue(setTipeProject)"
                    >{{setTipeProject}}</a>
                  </div>
                </ul>
                <!-- end dropdown -->
                <div class="mt-1 mb-4 d-flex text-white justify-content-start align-items-center">
                  <div class="w-40">
                    <input
                      id="hideborder"
                      class="form-control text-white"
                      type="text"
                      value="UX / UI Design"
                    />
                  </div>&nbsp;
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    style="cursor: pointer;"
                    @click="showDes = !showDes"
                  >
                    <i
                      :class="showDes === true ? 'fas fa-chevron-down' : 'fas fa-chevron-up'"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div
                  :class="showDes === true ? 'colapse d-inline' : 'd-inline colapse d-none'"
                  id="collapseExample"
                >
                  <textarea
                    class="form-control"
                    rows="4"
                    v-model="deskripsiValue"
                    id="hideborderTextArea"
                  ></textarea>
                </div>
                <p
                  class="mb-0 mt-3 col-lg-12 col-md-12 my-sm-auto ms-sm-auto me-sm-0 font-weight-bold text-sm"
                ></p>

                <p
                  v-if="showDes"
                  @click="showDesMore = !showDesMore"
                  style="cursor: pointer;"
                  class="mb-0 mt-2 mx-2 font-weight-bold text-sm text-info"
                >
                  Tampilkan Lebih Banyak &nbsp;
                  <i
                    :class="showDesMore === true ? 'fas fa-chevron-down' : 'fas fa-chevron-up'"
                    aria-hidden="true"
                  ></i>
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
              <div class="search rounded-pill">
            <i class="fa fa-search"></i>
            <input type="text" class="form-control" placeholder="Cari Pekerjaan" />
          </div>
            </div>
            <!-- dropdown filter -->
            <div style="margin: 1px;">
              <button
                class="border-0 rounded-circle bg-white"
                type="button"
                id="dropdownFilter"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/img/icons/Filter.png" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownFilter" role="menu">
                <div class="mt-2">
                  <span style="font-size: 18px;" class="text-dark fw-bold ms-3">Filter</span>
                  <hr />
                </div>
                <div class="p-2 d-flex">
                  <a class="dropdown-item" href="/data">
                    <ArgonRadio style="margin-right: 10px;">Ditugaskan kepada saya</ArgonRadio>
                  </a>
                </div>
                <div class="p-2 d-flex">
                  <a class="dropdown-item" href="/data">
                    <ArgonRadio style="margin-right: 10px;">
                      <img class="me-2" src="../assets/img/icons/semi-deadline.png" />Mendekati deadline
                    </ArgonRadio>
                  </a>
                </div>
                <div class="p-2 d-flex">
                  <a class="dropdown-item" href="/data">
                    <ArgonRadio style="margin-right: 10px;">
                      <img class="me-2" src="../assets/img/icons/deadline.png" />Terlambat
                    </ArgonRadio>
                  </a>
                </div>
              </ul>
            </div>
            <!-- dropdown sort -->
            <div style="margin-top: 1px;">
              <button
                class="border-0 rounded-circle bg-white"
                type="button"
                id="dropdownSort"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img class="w-100" src="../assets/img/icons/Sort.png" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownSort" role="menu">
                <div class="mt-2">
                  <span style="font-size: 18px;" class="text-dark fw-bold ms-3">Urutkan</span>
                  <hr />
                </div>
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
                    <ArgonRadio style="margin-right: 10px;">Nama Pekerjaan (A - Z)</ArgonRadio>
                  </a>
                </div>
              </ul>
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
                  @click="showRiwayat = !showRiwayat"
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
                    >Keluar dari KPI / project</button>
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
                    >Hapus KPI / project</button>
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
          <!-- side riwayat aktivitas-->
          <RiwayatAktivitasSide
            :toggle="showRiwayat"
            :class="[showRiwayat ? 'show' : '']"
            @clicked="onClickChild"
          />
          <div class="row mt-3">
            <div class="col-md-3">
              <status-card />
            </div>
            <div class="col-md-3">
              <status-card />
            </div>
            <div class="col-md-3">
              <status-card />
            </div>
            <div class="col-md-3">
              <div
                class="card"
                style="background-color: #FFFFFF; border: 1px dashed; border-color: green;"
              >
                <div class="card-body p-1">
                  <div class="mb-0 d-flex justify-content-center text-black rounded-3">
                    <a
                      class="dropdown-item rounded-3"
                      href="#"
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
                          <button type="button" class="btn btn-primary">Buat KPI / Project</button>
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
import StatusCard from "./components/StatusCard";
import ArgonRadio from "../components/ArgonRadio";
import modalLogoutProject from "@/views/components/modalLogoutProject.vue";
import modalDeleteProject from "@/views/components/modalDeleteProject.vue";
import modalUndangMember from "@/views/components/modalUndangMember.vue";
import palletColor from "./components/palletColor.vue";
import { mapMutations } from "vuex";
import RiwayatAktivitasSide from "../examples/RiwayatAktivitasComp.vue"

const body = document.getElementsByTagName("body")[0];

export default {
  name: "profile",
  data() {
    return {
      showRiwayat: false,
      showMenu: false,
      showDes: true,
      showDesMore: false,
      moreColor: false,
      colorValue: "",
      tipeProjectValue: "TUPOKSI",
      selectColor: [
        "#DDDDDD",
        "#00A2B9",
        "#36B37E",
        "#F3AF00",
        "#DE350B",
        "#7039CB",
      ],
      tipeProject: ["KPI","TUPOKSI","Lainnya"],
      deskripsiValue: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    };
  },
  components: {RiwayatAktivitasSide, ArgonButton, ArgonRadio, StatusCard, modalLogoutProject, modalDeleteProject, modalUndangMember, palletColor},
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
    onClickChild (value) {
      this.showRiwayat = value;
    },
    openSideBarRiwayatAktifitas()  {
      alert('open to sidebar riwayat aktivitas');
    },
    getColorValue(value) {
      this.colorValue = value;
    },
    getTipeProjectValue(value) {
      this.tipeProjectValue = value;
    },
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
<style scoped>
.centered {
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
}
.hoverEdit {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
.roundedCustom {
  transition: box-shadow 0.3s;
  cursor: pointer;
}
.roundedCustom:hover > .hoverEdit {
  box-shadow: 0 0 5px rgba(33, 33, 33, 0.3);
  visibility: visible;
  opacity: 1;
}
#hideborder {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  background-color: transparent;
  color: white;
  font-size: 28px;
}
#hideborder:focus {
  background-color: rgb(255, 255, 255, 0.1);
}
#hideborderTextArea {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  background-color: transparent;
  resize: none !important;
}
#hideborderTextArea:focus {
  border: 1px solid rgb(170, 170, 170);
  resize: none !important;
}
.search {
  position: relative;
  width: 250px;
}

.search input {
  text-indent: 25px;
  border: 1px solid #d6d4d4;
  border-radius: 20px !important;
  background-color: rgb(248, 248, 248);
}

.search input:focus {
  box-shadow: none;
  border: 1px solid #00a2b9;
}

.search .fa-search {
  position: absolute;
  top: 13px;
  left: 15px;
}
</style>