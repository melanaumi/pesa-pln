<template>
  <div class="modal" id="modal-detail-task">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <!-- modal header -->
        <div class="modal-header-delete d-flex justify-content-between">
          <di>
            <nav aria-label="breadcrumb">
              <ol class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb">
                <li class="text-sm breadcrumb-item">Project</li>
                <li class="text-sm breadcrumb-item">UI UX Design</li>
                <li
                    class="text-sm breadcrumb-item active"
                    :class="'text-black-50'"
                    aria-current="page"
                >Final Design Assignment</li>
              </ol>
            </nav>
          </di>
          <div>
              <button
                  class="border-0 bg-transparent"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                <img class="w-70" src="@/assets/img/icons/Cho.png" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2" role="menu">
                <a class="dropdown-item" href="/data" data-bs-target="#modal-edit-status" data-bs-toggle="modal">
                  <img class="w-15" src="@/assets/img/icons/deleteIcon.png" /> &nbsp;Hapus Pekerjaan
                </a>
              </ul>

            <i
                style="margin-top: -20px;"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                class="bi bi-x-lg text-black"
            ></i>
          </div>
        </div>

        <!-- modal body -->
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-7">
              <div class="card-body scroll">
                <h5 class="text-black">Final Design Halaman Utama</h5>

                <div class="form-group">
                  <label :for="hideborderTextArea">
                    <h6 class="text-black mt-3">Deskripsi Pekerjaan</h6>
                  </label>
                  <textarea
                      class="form-control"
                      placeholder="Tambahkan Deskripsi Pekerjaan ..."
                      rows="4"
                      v-model="deskripsiValue"
                      id="hideborderTextArea"
                  ></textarea>
                </div>

                <h6 class="text-black mt-3">Aktivitas</h6>
                <div class="d-flex">
                  <button class="btn btn-outline-primary text-black m-1">
                    Semua
                  </button>
                  <button class="btn btn-outline-primary text-black m-1">
                    Lampiran
                  </button>
                  <button class="btn btn-outline-primary text-black m-1">
                    Komentar
                  </button>
                  <button class="btn btn-outline-primary text-black m-1">
                    Riwayat
                  </button>
                </div>

                <div class="row form-group mt-3 d-flex justify-content-between">
                  <div class="col-lg-9">
                    <textarea
                        class="form-control"
                        rows="1"
                        placeholder="Berikan Komentar ..."
                        v-model="deskripsiValue"
                        id="komentar"
                    >
                    </textarea>
                  </div>
                  <div class="col-lg-3">
                    <img class="w-11" src="@/assets/img/icons/lampiran.png" />
                    <img class="w-11 mx-2" src="@/assets/img/icons/send.png" />
                  </div>
                </div>

                <div>
                  <div class="d-flex">
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
                        <span class="font-weight-bold">Aldi Bantaran</span>
                        <span class="mb-0 text-xs text-secondary mx-2" style="color: #00A2B9;"><i class="fa fa-clock me-1"></i>10 menit lalu</span>
                      </h6>
                      <div>
                        <p class="text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="">
                      <a
                          href="javascript:;"
                          class="border-0 avatar avatar-sm rounded-circle me-3"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          style="background-color: #8d3531; font-weight: bolder;"
                      >
                        DF
                      </a>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">Jhon</span> menambahkan lampiran
                        <span class="mb-0 text-xs text-secondary mx-2" style="color: #00A2B9;"><i class="fa fa-clock me-1"></i>6 menit lalu</span>
                      </h6>
                      <div class="mt-1">
                        <span>
                          <img src="@/assets/img/icons/lamp1.png" />
                          <img src="@/assets/img/icons/lamp2.png" class="mx-2" />
                        </span><br>
                        <span>
                          <img class="mt-2 w-70" src="@/assets/img/icons/lamp3.png" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                    <div class="">
                      <a
                          href="javascript:;"
                          class="border-0 avatar avatar-sm rounded-circle me-3"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          style="background-color: #2e8d3b; font-weight: bolder;"
                      >
                        GT
                      </a>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">Ciko</span> mengubah prioritas
                        <span class="mb-0 text-xs text-secondary mx-2" style="color: #00A2B9;"><i class="fa fa-clock me-1"></i>2 menit lalu</span>
                      </h6>
                      <div>
                        <p class="text-black">Rendah &nbsp;<span style="font-weight: bolder;"><i class="fas fa-arrow-right" /> &nbsp;Urgent</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="">
                      <a
                          href="javascript:;"
                          class="border-0 avatar avatar-sm rounded-circle me-3"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          style="background-color: #75513b; font-weight: bolder;"
                      >
                        JJ
                      </a>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">Sonya</span> membuat pekerjaan ini
                        <span class="mb-0 text-xs text-secondary mx-2" style="color: #00A2B9;"><i class="fa fa-clock me-1"></i>12 Agustus 2022</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div
                  class="card border-radius-sm mt-2 mb-2 mx-2 me-2"
                  style="border: 0.3px solid #9d9898;"
              >
                <div class="mt-2 mb-2 mx-2 me-2">
                  <h5 class="text-black">Detail</h5><hr />
                  <div class="row">
                    <div class="col-lg-5">
                      <div>
                        <h6 class="text-black-50"> Status</h6>
                      </div>
                      <div class="mt-3">
                        <h6 class="text-black-50"> <img class="w-10" src="@/assets/img/icons/org.png" /> &nbsp; Penerima Tugas</h6>
                      </div>
                      <div class="mt-3">
                        <h6 class="text-black-50"> <img class="w-10" src="@/assets/img/icons/tanggal.png" /> &nbsp;Tanggal Mulai</h6>
                      </div>
                      <div class="mt-3">
                        <h6 class="text-black-50"> <img class="w-10" src="@/assets/img/icons/tanggal.png" /> &nbsp;Tanggal Selesai</h6>
                      </div>
                      <div class="mt-3">
                        <h6 class="text-black-50"> <img class="w-10" src="@/assets/img/icons/prioritas.png" /> &nbsp;Prioritas</h6>
                      </div>
                    </div>
                    <div class="col-lg-7">
                      <div>
                        <span class="badge badge-xl bg-gradient-success text-white">ON WORKING</span>
                      </div>
                      <div class="mt-3">
                        <div class="avatar-group">
                          <a
                              href="javascript:;"
                              class="border-0 avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                          >
                            <img alt="Image placeholder" src="@/assets/img/team-1.jpg" />
                          </a>
                          <a
                              href="javascript:;"
                              class="border-0 avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                          >
                            <img alt="Image placeholder" src="@/assets/img/team-2.jpg" />
                          </a>
                          <a
                              href="javascript:;"
                              class="border-0 avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                          >
                            <img alt="Image placeholder" src="@/assets/img/icons/add.png" />
                          </a>
                        </div>
                      </div>
                      <div class="mt-3">
                        <h6 class="text-black"> 16 Juli 2022   09:00 WIB</h6>
                      </div>
                      <div class="mt-3">
                        <h6 class="text-black"> 16 Juli 2022   09:00 WIB</h6>
                      </div>
                      <div class="3">
                        <span class="badge badge-xl bg-gradient-danger text-white"><img class="w-15 me-2" src="@/assets/img/icons/arr-task.png">PRIORITY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p class="text-black-50 mt-4 mx-2">Terakhir diperbarui 6 menit lalu <br> Dibuat 22 Agustus 2022 10:00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "modal-detail-task",
  components: {},
  data() {
    return {
      stateMember: [
        {
          avatar: '',
          name: 'Aldin Batara',
          divisi: "Divisi Health, SAFETY & ENVIRONMENT"
        },
        {
          avatar: '',
          name: 'Aldin Batara',
          divisi: "Divisi Health, SAFETY & ENVIRONMENT"
        },
        {
          avatar: '',
          name: 'Aldin Batara',
          divisi: "Divisi Health, SAFETY & ENVIRONMENT"
        },
        {
          avatar: '',
          name: 'Aldin Batara',
          divisi: "Divisi Health, SAFETY & ENVIRONMENT"
        },
        {
          avatar: '',
          name: 'Aldin Batara',
          divisi: "Divisi Health, SAFETY & ENVIRONMENT"
        },
        {
          avatar: '',
          name: 'Aldin Batara',
          divisi: "Divisi Health, SAFETY & ENVIRONMENT"
        }
      ]
    }
  },
  methods:{
    hitApiDelete() {
      alert("hit api delete project")
    }
  }
}
</script>

<style scoped>
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
#hideborderTextArea, #komentar {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  background-color: transparent;
  resize: none !important;
}
#hideborderTextArea:focus, #komentar:focus {
  border: 1px solid rgb(170, 170, 170);
  resize: none !important;
}
.scroll {
  max-height: 700px;
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