<template>
  <div class="container-fluid">
    <div class="row mt-4 mb-4">
      <div class="col-lg-12 mb-lg">
        <!-- line chart -->
        <div class="z-index-2">
          <div>
            <div class="pb-0 mb-2 d-flex justify-content-between">
              <h5>Riwayat Aktivitas</h5>
            </div>
            <div class="p-4 card-body scroll">
              <p class="fw-bold">Hari ini</p>
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
                    style="font-size: 15px; border: 1px solid gray; border-radius: 10px;"
                    class="text-dark p-2"
                  >
                    {{stateRiwayats.content_aktivitas_start}}&nbsp;
                    <i class="bi bi-arrow-right"></i>&nbsp;
                    <span>{{stateRiwayats.content_aktivitas_end}}</span>
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
</template>
<script>
export default {
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
        }
      ],
    }
  },
}
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