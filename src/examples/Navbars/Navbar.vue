<template>
  <nav class="navbar w-100 navbar-main navbar-expand-lg fixed-top">
    <div class="px-4 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" textBlack="text-black" />

      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'"
        id="navbar"
      >
        <div
          class="pe-md-4 pe-4 d-flex align-items-center"
          :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
          <div class="input-group">
            <span class="input-group-text text-body">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              class="form-control"
              :placeholder="'Cari KPI / project atau kerjaan'"
            />
          </div>
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item dropdown d-flex align-items-center pe-4">
            <a
              href="#"
              class="p-0 nav-link text-black"
              :class="[showMenu ? 'show' : '']"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
            <div class="position-absolute">
              <div class="bg-danger text-white rounded-pill ms-2">
                <p class="mx-1" style="font-size: 10px;">3</p>
              </div>
            </div>
            <i class="cursor-pointer fa fa-bell" style="font-size: x-large;"></i>
            </a>
            <ul
              class="px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4"
              :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownMenuButton"
            >
              <div class="mt-2">
                <span style="font-size: 14px;" class="text-dark fw-bold ms-3">Notifikasi</span>
                <hr />
              </div>
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="">
                        <a
                            href="javascript:;"
                            class="border-0 avatar avatar-sm rounded-circle me-3"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            style="background-color: #a5c3c7; font-weight: bolder;"
                        >
                          UX
                        </a>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">Jhon</span> komentar dalam
                        <span class="font-weight-bold" style="color: #00A2B9;">Nama Task</span>
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        09:29 WIB
                      </p>
                      <div class="card border-radius-sm mt-2" style="background-color: #00A2B9;">
                        <p class="text-white" style="margin-right: 10px; margin-left: 10px; margin-top: 10px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="">
                      <a
                          href="javascript:;"
                          class="border-0 avatar avatar-sm rounded-circle me-3"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          style="background-color: #ce6e69; font-weight: bolder;"
                      >
                        UI
                      </a>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">Pegawai A</span> mengundang anda pada project
                        <span class="font-weight-bold" style="color: #00A2B9;">UI UX Design</span>
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        13 Jul 18:29 WIB
                      </p>
                      <div class="mt-2">
                        <button class="btn btn-outline-primary m-1">
                          Tolak
                        </button>
                        <button class="btn btn-primary m-1">
                          Terima
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="">
                      <img
                        src="../../assets/img/small-logos/logo-spotify.svg"
                        class="border-0 avatar avatar-sm rounded-circle me-3"
                        alt="logo spotify"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">Mike</span> mengubah tanggal selesai pekerjaan
                        <span class="font-weight-bold" style="color: #00A2B9;">Final Design Halaman Utama</span>
                      </h6>
                      <div class="card border-radius-sm" style="border: 0.3px solid grey;">
                        <p class="mb-0 text-sm text-secondary mb-2 mt-2" style="margin-left: 10px; margin-right: 10px;">
                          03 Agustus 2022 10:00 WIB &nbsp; <span class="text-dark" style="font-weight: bolder;"><i class="fas fa-arrow-right" /> &nbsp; 05 Agustus 2022</span>
                        </p>
                      </div>
                      <p class="mb-0 mt-2 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        14 Jul 09:30 WIB
                      </p>
                    </div>
                  </div>
                </a>
              </li>

              <hr />
              <div class="d-flex justify-content-between mt-2">
                <di>
                  <span style="font-size: 10px; color: #00A2B9;" class="fw-bold ms-3">Tandai Semua Telah Dibaca</span>
                </di>
                <di>
                  <span
                      @click="toAllNotif()"
                      style="cursor:pointer; font-size: 10px; color: #00A2B9;"
                      class="fw-bold ms-3"
                  >Lihat Semua</span>
                </di>
              </div>
            </ul>
          </li>
          <li class="dropdown">
            <button
            class="border-0 rounded-circle bg-white"
            type="button"
            id="dropdownLogout"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            :class="[showLogout ? 'show' : '']"
            @click="showLogout = !showLogout"
          >
            <li class="border-0 avatar avatar-sm rounded-circle bg-primary">
              <p style="margin-top: 15px; font-size: 1rem; font-weight: 700;">UU</p>
            </li>
          </button>
          <ul class="dropdown-menu dropdown-menu-end" :class="showLogout ? 'show' : ''" aria-labelledby="dropdownLogout">
            <button class="p-1 d-flex align-items-center dropdown-item" @click="logOut()">
              <div class="mx-3">
                <button type="button" class="dropdown-item text-dark"><i class="fa fa-sign-out"/> &nbsp;Log Out</button>
              </div>
            </button>
          </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from "../Breadcrumbs.vue";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
      showLogout: false
    };
  },
  props: ["minNav", "textBlack"],
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    toggleSidebar() {
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    },
    logOut() {
      this.$router.push({ name: 'Signup' })
    },
    toAllNotif(){
      this.$router.push({name: 'AllNotif'})
    }
  },
  components: {
    Breadcrumbs
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>
<style scoped>
</style>
