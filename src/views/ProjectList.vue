<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <!-- favorit Project -->
          <h5>Favorit</h5>
          <div
            class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3 mb-5"
            v-for="(stateFavorits, index) in stateFavorit"
            :key="index"
          >
            <card
              :value="stateFavorits.title"
              :iconClass="stateFavorits.iconClass"
              :detail="stateFavorits.detail"
              :fav="stateFavorits.fav"
            ></card>
          </div>
          <!-- semua Project -->
          <div class="d-flex justify-content-between">
            <h5>Semua KPI / Project</h5>
            <button
              type="button"
              data-bs-target="#myModal"
              data-bs-toggle="modal"
              class="btn btn-primary"
            >
              <i class="fas fa-plus me-2"></i>Tambah KPI / Project
            </button>
            <div class="modal" id="myModal">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <!-- modal header -->
                  <div class="modal-header">
                    <h5 class="modal-title">Buat KPI / Project</h5>
                    <i
                      style="margin-top: -20px;"
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
                        <label for="exampleInputEmail1" class="form-label">Nama KPI / Project</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Bisa berupa nama tim, tujuan proyek, atau lainnya"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <!-- deskripsi -->
                      <div class="mb-3">
                        <label for="floatingTextarea2">Deskripsi KPI / Project</label>
                        <textarea
                          class="form-control"
                          placeholder="Tulis Deskripsi KPI / Project"
                          id="floatingTextarea2"
                          style="height: 100px"
                        ></textarea>
                      </div>
                      <!-- select tipe project -->
                      <div class="mb-3">
                        <label for="floatingTextarea2">Tipe KPI / project</label>
                        <select
                          class="form-select"
                          placeholder="Pilih tipe project"
                          aria-label="Default select example"
                        >
                          <option value="1">KPI</option>
                          <option value="2">Tupoksi</option>
                          <option value="3">Lainnya</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="floatingTextarea2">Warna</label>
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
                                src="../assets/img/icons/check.png"
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
                                src="../assets/img/icons/moreIcon.png"
                                alt="icon more"
                              />
                            </div>
                          </div>
                        </div>
                        <!-- jika true tampil jika false display none -->
                        <!-- opacity warna  1 -->
                        <div class="row w-70" v-if="moreColor">
                          <div
                            class="col-lg-2"
                            v-for="(selectColorsOpacitys1, index) in selectColorOpacity1"
                            :key="index"
                          >
                            <div
                              @click="getColorValue(selectColorsOpacitys1)"
                              class="p-4 d-inline-block rounded-circle me-2 roundedCustom position-relative"
                              :style="{backgroundColor: selectColorsOpacitys1, display: moreColor === true ? 'flex' : 'none'}"
                            >
                              <img
                                v-if="colorValue === selectColorsOpacitys1"
                                class="position-absolute centered"
                                src="../assets/img/icons/check.png"
                                alt="icon checklist"
                              />
                            </div>
                          </div>
                        </div>
                        <!-- opacity warna 2 -->
                        <div class="row w-70" v-if="moreColor">
                          <div
                            class="col-lg-2"
                            v-for="(selectColorsOpacitys2, index) in selectColorOpacity2"
                            :key="index"
                          >
                            <div
                              @click="getColorValue(selectColorsOpacitys2)"
                              class="p-4 d-inline-block rounded-circle me-2 roundedCustom position-relative"
                              :style="{backgroundColor: selectColorsOpacitys2, cursor: pointer, display: moreColor === true ? 'flex' : 'none'}"
                            >
                              <img
                                v-if="colorValue === selectColorsOpacitys2"
                                class="position-absolute centered"
                                src="../assets/img/icons/check.png"
                                alt="icon checklist"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>Dengan membuat KPI / project, tim dan atasan anda akan automatis terundang ke dalam KPI / project.</p>
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
          <div
            class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3"
            v-for="(stateSemuaProjects, index) in stateSemuaProject"
            :key="index"
          >
            <card
              :value="stateSemuaProjects.title"
              :iconClass="stateSemuaProjects.iconClass"
              :detail="stateSemuaProjects.detail"
              :fav="stateSemuaProjects.fav"
            ></card>
          </div>
        </div>
      </div>
    </div>
    <!-- button load all data project -->
    <div class="d-flex justify-content-center mt-2">
      <button type="button" class="btn btn-outline-primary">Lihat Lebih banyak</button>
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
        moreColor: false,
        colorValue: "",
        selectColor: [
          "#00A2B9",
          "#36B37E",
          "#F3AF00",
          "#DE350B",
          "#7039CB",
          "#DDDDDD"
        ],
        selectColorOpacity1: [
          "#66C7D5",
          "#86D1B2",
          "#F8CF66",
          "#EB866D",
          "#A988E0"
        ],
        selectColorOpacity2: [
          "#B3E4EA",
          "#C3E9D9",
          "#FCE8B3",
          "#F6C3B6",
          "#D5C4F0"
        ],
        stateFavorit: [
        {
          title: "UX UI design",
          iconClass: "star3",
          detail: "Lainnya",
          fav: true
        },
        {
          title: "UX UI design",
          iconClass: "star3",
          detail: "Tupoksi",
          fav: true
        },
        ],
        stateSemuaProject: [
        {
          title: "UX UI design",
          iconClass: "",
          detail: "KPI",
          fav: false
        },
        {
          title: "UX UI design",
          iconClass: "",
          detail: "KPI",
          fav: false
        },
        {
          title: "UX UI design",
          iconClass: "",
          detail: "KPI",
          fav: false
        },
        {
          title: "UX UI design",
          iconClass: "",
          detail: "Lainnya",
          fav: false
        },
        {
          title: "UX UI design",
          iconClass: "",
          detail: "Lainnya",
          fav: false
        },
        {
          title: "UX UI design",
          iconClass: "star3",
          detail: "Lainnya",
          fav: true
        },
        {
          title: "UX UI design",
          iconClass: "star3",
          detail: "Tupoksi",
          fav: true
        },
        {
          title: "UX UI design",
          iconClass: "",
          detail: "Tupoksi",
          fav: false
        },
        {
          title: "UX UI design",
          iconClass: "",
          detail: "Tupoksi",
          fav: false
        },
        {
          title: "UX UI design",
          iconClass: "",
          detail: "Lainnya",
          fav: false
        },
        {
          title: "UX UI design",
          iconClass: "",
          detail: "Lainnya",
          fav: false
        },
        {
          title: "UX UI design",
          iconClass: "",
          detail: "Lainnya",
          fav: false
        },
        ]
    };
  },
  methods: {
    getColorValue(value) {
      this.colorValue = value;
    }
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
.roundedCustom {
  transition: box-shadow 0.3s;
  cursor: pointer;
}
.roundedCustom:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.3);
}
</style>