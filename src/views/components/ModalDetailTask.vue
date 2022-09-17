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
              <h5 class="text-black">Final Design Halaman Utama</h5>

              <div class="form-group">
                <label :for="DeskripsiPekerjaan">
                  <h6 class="text-black mt-3">Deskripsi Pekerjaan</h6>
                </label>
                <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Tambahkan Deskripsi Pekerjaan"
                    :id="DeskripsiPekerjaan"
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

              <div class="form-group mt-3">
                <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Berikan Komentar ..."
                    id="Komentar"
                >
                </textarea>
              </div>

              <div class="p-3">
                <div class="row gx-4">
                  <div>
                    <div class="col-auto">
                      <div
                          class="avatar avatar avatar-sm rounded-circle position-relative"
                          style="background-color: #B3E4EA;"
                      >
                        <p
                            style="font-size: 10pt; font-weight: bolder; margin-top: 14px; color: #246997;"
                        >UU</p>
                      </div>
                    </div>
                    <div class="col-auto my-auto">
                      <div class="h-100">
                        <h6 class="mb-1 mt-2 text-black">
                          Aldi Bantaran &nbsp;
                          <span style="font-weight: lighter; font-size: 7pt;"> 10 menit lalu</span>
                        </h6>
                        <p
                            class="mb-0 mt-1 col-lg-12 col-md-12 my-sm-auto ms-sm-auto me-sm-0 font-weight-bold text-sm"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-lg-5">
                <h5 class="text-black">Detail</h5>
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
                    <span class="badge badge-xl bg-gradient-danger text-white">PRIORITY</span>
                  </div>
                </div>
              </div>
              <p class="text-black-50 mt-4">Terakhir diperbarui 6 menit lalu <br> Dibuat 22 Agustus 2022 10:00 WIB</p>
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

</style>