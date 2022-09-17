<template>
  <div class="card" style="background-color: #EFEFEF;">
    <div
      class="card-header d-flex justify-content-between pb-0 px-3"
      style="background-color: #EFEFEF;"
    >
      <!-- Judul Status -->
      <p>
        <span class="badge badge-xl bg-gradient-success text-white">TO DO</span> &nbsp;- 10
      </p>

      <div>
        <!-- Menu Status -->
        <button
          class="border-0"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img class="w-50" src="@/assets/img/icons/Cho.png" style="width: 10px;" />
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" role="menu">
          <div class="p-2 d-flex">
            <a class="dropdown-item" href="/data" data-bs-target="#modal-edit-status" data-bs-toggle="modal">
              <i class="fas fa-pencil-alt text-dark me-2"/>Perbarui Status
            </a>
          </div>
        </ul>

        <!-- Modal Edit Pekerjaan -->
        <div class="modal" id="modal-edit-status">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <!-- modal header -->
              <div class="modal-header">
                <h5 class="modal-title">Perbarui Status</h5>
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
                    <label class="form-label">Nama Status</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Nama Status ..."
                        id="nama-status"
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
                <button type="button" class="btn btn-primary">Perbarui Status</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Buat Pekerjaan -->
        <div class="modal" id="modal-add-task">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <!-- modal header -->
              <div class="modal-header">
                <h5 class="modal-title">Buat Pekerjaan</h5>
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
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label>
                          Project
                          <span style="color:#D60808;">*</span>
                        </label>
                        <select
                          class="form-select"
                          placeholder="Pilih Tipe Project"
                          aria-label="Default select example"
                        >
                          <option value="1">UI UX Design</option>
                          <option value="2">Final Design</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Judul Pekerjaan</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Judul Pekerjaan ..."
                      id="judul-task"
                    />
                  </div>

                  <div class="mb-3">
                    <label>Deskripsi Pekerjaan</label>
                    <textarea
                      class="form-control"
                      placeholder="Tulis Deskripsi Pekerjaan ..."
                      id="deskripsi-task"
                      style="height: 100px"
                    ></textarea>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="floatingTextarea2">Status</label>
                        <select
                          class="form-select"
                          placeholder="Pilih Status Pekerjaan"
                          aria-label="Default select example"
                        >
                          <option value="1">
                            <span class="badge badge-xl bg-gradient-primary text-white">Done</span>
                          </option>
                          <option value="2">
                            <span class="badge badge-xl bg-gradient-info text-white">On Working</span>
                          </option>
                          <option value="3">
                            <span class="badge badge-xl bg-gradient-success text-white">Done</span>
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="floatingTextarea2">Prioritas</label>
                        <select
                          class="form-select"
                          placeholder="Pilih Prioritas Pekerjaan"
                          aria-label="Default select example"
                        >
                          <option value="1">Rendah</option>
                          <option value="2">Sedang</option>
                          <option value="3">Tinggi</option>
                          <option value="3">Urgent</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="floatingTextarea2">Penerima Tugas</label>
                        <select
                          class="form-select"
                          placeholder="Pilih Penerima Tugas"
                          aria-label="Default select example"
                        >
                          <option value="1">Gita Diaz (Saya)</option>
                          <option value="2">Lazarus Tharub</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <label class="form-label">Tanggal Mulai</label>
                      <input
                        type="date"
                        class="form-control"
                        id="start-date"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="col-lg-6">
                      <label class="form-label">Tanggal Selesai</label>
                      <input
                        type="date"
                        class="form-control"
                        id="end-date"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="col-lg-6">
                      <div class="mb-3" data-upload-id="myFirstImage">
                        <label for="exampleInputEmail1" class="form-label">Lampiran</label>
                        <br />
                        <!--                          <input type="file" style="border: 1px dashed; border-color: green;" class="custom-file-container__custom-file__custom-file-input" accept="*" multiple>-->
                        <!--                          <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />-->
                        <!--                          <span class="custom-file-container__custom-file__custom-file-control"></span>-->
                        <!--                          <div class="custom-file-container__image-preview"></div>-->
                        <button
                          type="button"
                          class="btn btn-outline-primary"
                          style="border: 1px dashed; border-color: green;"
                        >
                          <a>
                            <span style="font-size: x-large;">+</span>
                            <br />Lampirkan File
                            <br />Maksimal 10Mb
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary">Buat Pekerjaan</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Edit Pekerjaan -->
        <div class="modal" id="modal-edit-task">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <!-- modal header -->
              <div class="modal-header">
                <h5 class="modal-title">Perbarui Pekerjaan</h5>
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
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label>
                          Project
                          <span style="color:#D60808;">*</span>
                        </label>
                        <select
                            class="form-select"
                            placeholder="Pilih Tipe Project"
                            aria-label="Default select example"
                        >
                          <option value="1">UI UX Design</option>
                          <option value="2">Final Design</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Judul Pekerjaan</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Judul Pekerjaan ..."
                        id="judul-task-edit"
                        aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label>Deskripsi Pekerjaan</label>
                    <textarea
                        class="form-control"
                        placeholder="Tulis Deskripsi Pekerjaan ..."
                        id="deskripsi-task-edit"
                        style="height: 100px"
                    ></textarea>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label>Status</label>
                        <select
                            class="form-select"
                            placeholder="Pilih Status Pekerjaan"
                            aria-label="Default select example"
                        >
                          <option value="1">
                            <span class="badge badge-xl bg-gradient-primary text-white">Done</span>
                          </option>
                          <option value="2">
                            <span class="badge badge-xl bg-gradient-info text-white">On Working</span>
                          </option>
                          <option value="3">
                            <span class="badge badge-xl bg-gradient-success text-white">Done</span>
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label>Prioritas</label>
                        <select
                            class="form-select"
                            placeholder="Pilih Prioritas Pekerjaan"
                            aria-label="Default select example"
                        >
                          <option value="1">Rendah</option>
                          <option value="2">Sedang</option>
                          <option value="3">Tinggi</option>
                          <option value="3">Urgent</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label>Penerima Tugas</label>
                        <select
                            class="form-select"
                            placeholder="Pilih Penerima Tugas"
                            aria-label="Default select example"
                        >
                          <option value="1">Gita Diaz (Saya)</option>
                          <option value="2">Lazarus Tharub</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <label class="form-label">Tanggal Mulai</label>
                      <input
                          type="date"
                          class="form-control"
                          id="start-date-edit"
                      />
                    </div>
                    <div class="col-lg-6">
                      <label class="form-label">Tanggal Selesai</label>
                      <input
                          type="date"
                          class="form-control"
                          id="end-date-edit"
                      />
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="col-lg-6">
                      <div class="mb-3" data-upload-id="myFirstImage">
                        <label class="form-label">Lampiran</label>
                        <br />
                        <!--                          <input type="file" style="border: 1px dashed; border-color: green;" class="custom-file-container__custom-file__custom-file-input" accept="*" multiple>-->
                        <!--                          <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />-->
                        <!--                          <span class="custom-file-container__custom-file__custom-file-control"></span>-->
                        <!--                          <div class="custom-file-container__image-preview"></div>-->
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            style="border: 1px dashed; border-color: green;"
                        >
                          <a>
                            <span style="font-size: x-large;">+</span>
                            <br />Lampirkan File
                            <br />Maksimal 10Mb
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary">Perbarui Pekerjaan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-body pt-2 p-3">
      <!-- Card Pekerjaan -->
      <ul class="list-group">
        <li
            class="list-group-item border-0 d-flex p-4 mb-3 border-radius-lg bg-white"
            href="/data"
            data-bs-target="#modal-edit-task"
            data-bs-toggle="modal"
        >
          <div class="d-flex flex-column">
            <h6 class="text-sm text-black-100">Final Design Halaman Utama</h6>
            <p class="mb-4 text-sm text-danger">25 Jul 22, 10:00</p>
            <ul class="list-group">
              <li
                class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
              >
                <div class="d-flex align-items-center text-sm justify-content-between">
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
                  </div>&nbsp;
                  <span>
                    <img src="@/assets/img/icons/arr-task.png" style="width: 7px;" />
                  </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a>
                    <img
                        src="@/assets/img/icons/lam-task.png"
                        style="width: 10px;"
                    /> 2
                  </a>&nbsp;&nbsp;&nbsp;
                  <a>
                    <img
                        src="@/assets/img/icons/mes-task.png"
                        style="width: 10px;"
                    /> 10
                  </a>&nbsp;&nbsp;&nbsp;
                  <i
                      class="fa fa-eye text-black-50"
                      aria-hidden="true"
                      href="/data"
                      data-bs-target="#modal-detail-task"
                      data-bs-toggle="modal"
                  ></i>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li
            class="list-group-item border-0 d-flex p-4 mb-3 border-radius-lg bg-white"
            href="/data"
            data-bs-target="#modal-add-task"
            data-bs-toggle="modal"
        >
          <div class="d-flex flex-column">
            <h6 class="text-sm text-black-100">Final Design Halaman Utama</h6>
            <p class="mb-4 text-sm text-danger">25 Jul 22, 10:00</p>
            <ul class="list-group">
              <li
                class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
              >
                <div class="d-flex align-items-center text-sm justify-content-between">
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
                  </div>&nbsp;
                  <span>
                    <img src="@/assets/img/icons/arr-task.png" style="width: 7px;" />
                  </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a>
                    <img
                        src="@/assets/img/icons/lam-task.png"
                        style="width: 10px;"
                    /> 2
                  </a>&nbsp;&nbsp;&nbsp;
                  <a>
                    <img
                        src="@/assets/img/icons/mes-task.png"
                        style="width: 10px;"
                    /> 10
                  </a>&nbsp;&nbsp;&nbsp;
                  <i class="fa fa-eye text-black-50" aria-hidden="true"></i>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <!-- Tambah Pekerjaan -->
      <a
          class="text-black"
          href="/data"
          data-bs-target="#modal-add-task"
          data-bs-toggle="modal"
      >
        <span style="color: #00A2B9; font-weight: bolder; font-size: x-large;">+</span> &nbsp;&nbsp;Tambah Pekerjaan
      </a>
    </div>

    <!-- modal detail task -->
    <modal-detail-task />

  </div>
</template>

<script>
import ModalDetailTask from "./ModalDetailTask";

export default {
  name: "status-card",
  data() {
    return {
      upload: null,
      moreColor: false,
      colorValue: "",
      selectColor: [
        "#DDDDDD",
        "#00A2B9",
        "#36B37E",
        "#F3AF00",
        "#DE350B",
        "#7039CB",
      ]
    };
  },
  components: { ModalDetailTask },
  methods: {
    check () {
      console.log(this.upload.cachedFileArray)
    },

    getColorValue(value) {
      this.colorValue = value;
    }
  },
  mounted () {
    // this.upload = new FileUploadWithPreview('myFirstImage')
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
