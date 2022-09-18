<template>
  <div class="py-2 container-fluid">
    <div class="row">
      <h3 class="mb-4">Dashboard</h3>
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-12">
            <categories-card />
          </div>
        </div>

        <div class="row mt-4 mb-4">
          <div class="col-lg-12 mb-lg">
            <!-- line chart -->
            <div class="card z-index-2">
              <div class="card">
                <div class="pb-0 card-header mb-0 d-flex justify-content-between">
                  <h5>Riwayat Aktivitas</h5>
                  <span
                    @click="toDetailRiwayatActivity()"
                    style="cursor:pointer;"
                    class="text-primary"
                  >Lihat Semua</span>
                </div>
                <div class="p-4 card-body scroll">
                  <div
                    class="d-flex p-1"
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
                        <span
                          class="fw-normal text-primary fw-bold"
                        >{{stateRiwayats.name_pekerjaan}}</span>
                      </p>
                      <p style="font-size: 13px;">{{stateRiwayats.jam}}</p>
                      <p
                        v-if="stateRiwayats.content_aktivitas_start  !== ''"
                        style="font-size: 15px; border: 1px solid gray; border-radius: 10px;"
                        class="text-dark p-2"
                      >
                        {{stateRiwayats.content_aktivitas_start}}&nbsp;
                        <i class="bi bi-arrow-right"></i>&nbsp;
                        <span>{{stateRiwayats.content_aktivitas_end}}</span>
                      </p>
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
</template>
<script>
// import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import CategoriesCard from "./components/CategoriesCard.vue";
import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";

export default {
  name: "dashboard-default",
  data() {
    return {
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
      stats: {
        money: {
          title: "Today's Money",
          value: "$53,000",
          percentage: "+55%",
          iconClass: "ni ni-money-coins",
          detail: "since yesterday",
          iconBackground: "bg-gradient-primary",
        },
        users: {
          title: "Today's Users",
          value: "2,300",
          percentage: "+3%",
          iconClass: "ni ni-world",
          iconBackground: "bg-gradient-danger",
          detail: "since last week",
        },
        clients: {
          title: "New Clients",
          value: "+3,462",
          percentage: "-2%",
          iconClass: "ni ni-paper-diploma",
          percentageColor: "text-danger",
          iconBackground: "bg-gradient-success",
          detail: "since last quarter",
        },
        sales: {
          title: "Sales",
          value: "$103,430",
          percentage: "+5%",
          iconClass: "ni ni-cart",
          iconBackground: "bg-gradient-warning",
          detail: "than last month",
        },
      },
      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
    };
  },
  components: {
    // GradientLineChart,
    CategoriesCard,
  },
  methods:{
    toDetailRiwayatActivity(){
      this.$router.push({name: 'RiwayatAktifitas'})
    }
  }
};
</script>
<style scoped>
.scroll {
  max-height: 500px;
  overflow-y: auto;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #bdbdbd;
}
</style>
