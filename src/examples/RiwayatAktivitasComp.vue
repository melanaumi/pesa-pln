<template>
  <div class="fixed-plugin">
    <div class="shadow-lg card">
      <hr class="horizontal dark" />
      <div style="margin-top: 70px;">
        <div class="mx-2 d-flex">
          <i
            v-if="toggle !== false"
            v-on:click="onClickButton(showSide)"
            class="position-absolute rounded-circle fas fa-chevron-right btnBack"
          ></i>
          <h6 class="ms-2">Riwayat Aktivitas</h6>
        </div>
        <hr />
        <div class="p-1 card-body scroll">
          <p class="fw-bold">Hari ini</p>
          <div
            class="d-flex p-1 mb-1"
            v-for="(stateRiwayats, index)  in  stateRiwayat"
            :key="index"
          >
            <div class="me-2">
              <li class="border-0 avatar avatar-sm rounded-circle bg-primary">
                <p style="margin-top: 15px; font-size: 1rem; font-weight: 700;">UU</p>
              </li>
            </div>
            <div>
              <p class="p-0 m-0 fw-bold text-dark">
                {{stateRiwayats.name}}
                <span
                  class="fw-normal text-dark"
                  style="font-size: 15px;"
                >&nbsp;{{stateRiwayats.aktifitas}}&nbsp;</span>
                <span class="fw-normal text-primary fw-bold">{{stateRiwayats.name_pekerjaan}}</span>
              </p>
              <p style="font-size: 13px;">{{stateRiwayats.jam}}</p>
              <p
                v-if="stateRiwayats.content_aktivitas_start  !== ''"
                style="color: grey; font-size: 15px; border: 1px solid gray; border-radius: 10px;"
                class="text-dark p-2"
              >
                {{stateRiwayats.content_aktivitas_start}}&nbsp;
                <i
                  class="text-dark bi bi-arrow-right"
                ></i>&nbsp;
                <span class="text-dark">{{stateRiwayats.content_aktivitas_end}}</span>
              </p>
            </div>
          </div>
          <p class="fw-bold">Kemarin</p>
          <div class="d-flex p-1" v-for="(stateRiwayats, index)  in  stateRiwayat" :key="index">
            <div class="me-2">
              <li class="border-0 avatar avatar-sm rounded-circle bg-primary">
                <p style="margin-top: 15px; font-size: 1rem; font-weight: 700;">UU</p>
              </li>
            </div>
            <div>
              <p class="p-0 m-0 fw-bold text-dark">
                {{stateRiwayats.name}}
                <span
                  class="fw-normal text-dark"
                  style="font-size: 15px;"
                >&nbsp;{{stateRiwayats.aktifitas}}&nbsp;</span>
                <span class="fw-normal text-primary fw-bold">{{stateRiwayats.name_pekerjaan}}</span>
              </p>
              <p style="font-size: 13px;">{{stateRiwayats.jam}}</p>
              <p
                v-if="stateRiwayats.content_aktivitas_start  !== ''"
                style="color: grey; font-size: 15px; border: 1px solid gray; border-radius: 10px;"
                class="text-dark p-2"
              >
                {{stateRiwayats.content_aktivitas_start}}&nbsp;
                <i
                  class="text-dark bi bi-arrow-right"
                ></i>&nbsp;
                <span class="text-dark">{{stateRiwayats.content_aktivitas_end}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { activateDarkMode, deactivateDarkMode } from "@/assets/js/dark-mode";
export default {
  name: "RiwayatAktivitasSide",
  props: ["toggle"],
  data() {
    return {
      showSide: false,
       stateRiwayat: [
        {
          name: 'Jhon',
          aktifitas: 'Komentar dalam',
          name_pekerjaan: 'final design halaman utama',
          tanggal: '14 juli',
          jam: '09:30 WIB',
          content_aktivitas_start: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          content_aktivitas_end: ''
        },
        {
          name: 'Jhon',
          aktifitas: 'Komentar dalam',
          name_pekerjaan: 'final design halaman utama',
          tanggal: '14 juli',
          jam: '09:30 WIB',
          content_aktivitas_start: '3 Agustus 2022 10:00 WIB',
          content_aktivitas_end: '5 Agustus 2022'
        },
        {
          name: 'Jhon',
          aktifitas: 'Komentar dalam',
          name_pekerjaan: 'final design halaman utama',
          tanggal: '14 juli',
          jam: '09:30 WIB',
          content_aktivitas_start: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          content_aktivitas_end: ''
        },
        {
          name: 'Jhon',
          aktifitas: 'Komentar dalam',
          name_pekerjaan: 'final design halaman utama',
          tanggal: '14 juli',
          jam: '09:30 WIB',
          content_aktivitas_start: '3 Agustus 2022 10:00 WIB',
          content_aktivitas_end: '5 Agustus 2022'
        },
        {
          name: 'Jhon',
          aktifitas: 'Hapus Pekerjaan',
          name_pekerjaan: 'final design halaman utama',
          tanggal: '14 juli',
          jam: '09:30 WIB',
          content_aktivitas_start: '',
          content_aktivitas_end: ''
        },
        {
          name: 'Jhon',
          aktifitas: 'Komentar dalam',
          name_pekerjaan: 'final design halaman utama',
          tanggal: '14 juli',
          jam: '09:30 WIB',
          content_aktivitas_start: '3 Agustus 2022 10:00 WIB',
          content_aktivitas_end: '5 Agustus 2022'
        },
         {
          name: 'Jhon',
          aktifitas: 'Komentar dalam',
          name_pekerjaan: 'final design halaman utama',
          tanggal: '14 juli',
          jam: '09:30 WIB',
          content_aktivitas_start: '3 Agustus 2022 10:00 WIB',
          content_aktivitas_end: '5 Agustus 2022'
        }
      ],
    }
  },
  methods: {
    ...mapMutations(["navbarMinimize", "sidebarType", "navbarFixed"]),
    onClickButton (event) {
      this.$emit('clicked', event)
    },
    sidebarColor(color = "success") {
      document.querySelector("#sidenav-main").setAttribute("data-color", color);
      this.$store.state.mcolor = `card-background-mask-${color}`;
    },
    sidebarType(type) {
      this.$store.state.sidebarType = type;
    },
    setNavbarFixed() {
      if (
        this.$route.name !== "Profile" ||
        this.$route.name !== "All Projects"
      ) {
        this.$store.state.isNavFixed = !this.$store.state.isNavFixed;
      }
    },
    setDarkMode() {
      if (this.$store.state.darkMode) {
        this.$store.state.darkMode = false;
        this.$store.state.sidebarType = "bg-white";
        deactivateDarkMode();
        return;
      } else {
        this.$store.state.darkMode = true;
        this.$store.state.sidebarType = "bg-default";
        activateDarkMode();
      }
    },
    sidenavTypeOnResize() {
      let white = document.querySelector("#btn-white");
      if (window.innerWidth < 1200) {
        white.classList.add("disabled");
      } else {
        white.classList.remove("disabled");
      }
    }
  },
  computed: {
    sidenavResponsive() {
      return this.sidenavTypeOnResize;
    }
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
    window.addEventListener("resize", this.sidenavTypeOnResize);
    window.addEventListener("load", this.sidenavTypeOnResize);
  }
};
</script>
<style scoped>
.btnBack {
  color: grey;
  cursor: pointer;
  padding: 5px 8px 5px 8px;
  margin-left: -32px;
  border: 1px solid gainsboro;
  background-color: white;
}
</style>
