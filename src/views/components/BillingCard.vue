<template>
  <div class="card" style="background-color: #EFEFEF;">
    <div class="card-header d-flex justify-content-between pb-0 px-3" style="background-color: #EFEFEF;">

        <p><span class="badge badge-xl bg-gradient-success text-white">TO DO</span> &nbsp;- 10</p>

        <div>
          <button
              className="border-0"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
          >
            <img className="w-50" src="@/assets/img/icons/Cho.png" style="width: 10px;"/>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" role="menu">
            <div className="p-2 d-flex">
              <a
                  className="dropdown-item"
                  href="/data"
                  data-bs-target="#myModal"
                  data-bs-toggle="modal"
              >
                <img
                    style="margin-right: 13px;"
                    src="@/assets/img/icons/aktivitas_dropdown.png"
                />Buat Task Baru
              </a>
            </div>
            <div className="p-2 d-flex">
              <a
                  className="dropdown-item"
                  href="/data"
                  data-bs-target="#myModal"
                  data-bs-toggle="modal"
              >
                <img
                    style="margin-right: 13px;"
                    src="@/assets/img/icons/aktivitas_dropdown.png"
                />Edit Task
              </a>
            </div>
            <div className="p-2 d-flex">
              <a
                  className="dropdown-item"
                  href="/data"
                  data-bs-target="#myModal"
                  data-bs-toggle="modal"
              >
                <img
                    style="margin-right: 13px;"
                    src="@/assets/img/icons/aktivitas_dropdown.png"
                />Edit Status
              </a>
            </div>
          </ul>
          <div class="modal" id="myModal">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <!-- modal header -->
                <div class="modal-header">
                  <h5 class="modal-title">Buat Task</h5>
                  <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                  ></button>
                </div>
                <!-- modal body -->
                <div class="modal-body">
                  <form>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label for="floatingTextarea2">Project <span style="color:#D60808;">*</span></label>
                          <select
                              class="form-select"
                              placeholder="Pilih tipe project"
                              aria-label="Default select example"
                          >
                            <option value="1">UI UX Design</option>
                            <option value="2">Final Design</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Judul Task</label>
                      <input
                          type="text"
                          class="form-control"
                          placeholder="Judul Task ..."
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                      />
                    </div>

                    <div class="mb-3">
                      <label for="floatingTextarea2">Deskripsi Task</label>
                      <textarea
                          class="form-control"
                          placeholder="Tulis Deskripsi Task ..."
                          id="floatingTextarea2"
                          style="height: 100px"
                      ></textarea>
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label for="floatingTextarea2">Status</label>
                          <select
                              class="form-select"
                              placeholder="Pilih tipe project"
                              aria-label="Default select example"
                          >
                            <option value="1"><span className="badge badge-xl bg-gradient-primary text-white">Done</span></option>
                            <option value="2"><span className="badge badge-xl bg-gradient-info text-white">On Working</span></option>
                            <option value="3"><span className="badge badge-xl bg-gradient-success text-white">Done</span></option>
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
                              placeholder="Pilih tipe project"
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
                              placeholder="Pilih tipe project"
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
                        <label for="exampleInputEmail1" class="form-label">Tanggal Mulai</label>
                        <input
                            type="date"
                            class="form-control"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label for="exampleInputEmail1" class="form-label">Tanggal Selesai</label>
                        <input
                            type="date"
                            class="form-control"
                            id="exampleInputEmaill"
                            aria-describedby="emailHelp"
                        />
                      </div>
                    </div>

                    <div class="row mt-3">
                      <div class="col-lg-6">
                        <div class="mb-3" data-upload-id="myFirstImage">
                          <label for="exampleInputEmail1" class="form-label">Lampiran</label>
                          <br>
<!--                          <input type="file" style="border: 1px dashed; border-color: green;" class="custom-file-container__custom-file__custom-file-input" accept="*" multiple>-->
<!--                          <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />-->
<!--                          <span class="custom-file-container__custom-file__custom-file-control"></span>-->
<!--                          <div class="custom-file-container__image-preview"></div>-->
                          <button
                              type="button"
                              class="btn btn-outline-primary"
                              style="border: 1px dashed; border-color: green;"
                          >
                            <a><span style="font-size: x-large;">+</span><br>Lampirkan File <br> Maksimal 10Mb</a>
                          </button>
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
                  <button type="button" class="btn btn-primary">Buat Task</button>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
    <div class="card-body pt-2 p-3">
      <ul class="list-group">
        <li class="list-group-item border-0 d-flex p-4 mb-3 border-radius-lg bg-white">
          <div class="d-flex flex-column">
            <h6 class="text-sm text-black-100">Final Design Halaman Utama</h6>
            <p class="mb-4 text-sm text-danger">25 Jul 22, 10:00</p>
            <ul class="list-group">
              <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
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
                  </div> &nbsp;
                    <span><img src="@/assets/img/icons/arr-task.png" style="width: 7px;" /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src="@/assets/img/icons/lam-task.png" style="width: 10px;" /> &nbsp;
                    2
                    &nbsp;&nbsp;&nbsp;
                    <img src="@/assets/img/icons/mes-task.png" style="width: 10px;" /> &nbsp;
                    10
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="list-group-item border-0 d-flex p-4 mb-3 border-radius-lg bg-white">
          <div class="d-flex flex-column">
            <h6 class="text-sm text-black-100">Final Design Halaman Utama</h6>
            <p class="mb-4 text-sm text-danger">25 Jul 22, 10:00</p>
            <ul class="list-group">
              <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
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
                  </div> &nbsp;
                  <span><img src="@/assets/img/icons/arr-task.png" style="width: 7px;" /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="@/assets/img/icons/lam-task.png" style="width: 10px;" /> &nbsp;
                  2
                  &nbsp;&nbsp;&nbsp;
                  <img src="@/assets/img/icons/mes-task.png" style="width: 10px;" /> &nbsp;
                  10
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "billing-card",
  data() {
    return {
      upload: null,
      moreColor: false,
      colorValue: "",
      selectColor: [
        "#00A2B9",
        "#36B37E",
        "#F3AF00",
        "#DE350B",
        "#7039CB",
        "#DDDDDD"
      ]
    };
  },
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
