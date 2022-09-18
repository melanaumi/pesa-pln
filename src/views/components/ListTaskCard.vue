<template>
  <div class="card">
    <div class="p-3 pb-0 card-header">
      <h6 class="mb-0">{{ cardTitle }}</h6>
    </div>
    <div class="card-body p-3 mb-2 scroll">
      <div>
        <h4 class="mb-1 text-sm text-dark">
          <button
              class="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right"
          >
            <i class="ni ni-bold-right" aria-hidden="true"></i>
          </button>
          {{ title }} <span> ({{ total }}) </span>
        </h4>
      </div>
      <div class="mt-2">
        <h4 class="mb-1 text-sm text-dark">
          <button
              class="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right"
          >
            <i class="ni ni-bold-right" aria-hidden="true"></i>
          </button>
          {{ title2 }} <span> ({{ total1 }}) </span>
        </h4>
        <div>
          <div class="d-flex justify-content-between mt-2 mx-3">
            <div  data-bs-target="#modal-del-kpi"
                  data-bs-toggle="modal">
              <p style="font-size: 10px;" class="fw-bold ms-3 text-dark">Final Design Halaman Utama</p>
            </div>
            <div>
              <span style="font-size: 10px; color: #00A2B9;" class="fw-bold ms-3">15 Jul</span>
            </div>
          </div>
          <div class="d-flex justify-content-between mx-3">
            <p style="font-size: 10px;" class="ms-3 text-dark">UI UX Design</p>
          </div>
        </div>

        <div class="mt-2">
          <div class="d-flex justify-content-between mt-2 mx-3">
            <div>
              <p style="font-size: 10px;" class="fw-bold ms-3 text-dark">Design Notifikasi dan Tampilan Push Notifikasi</p>
            </div>
            <div>
              <span style="font-size: 10px; color: #00A2B9;" class="fw-bold ms-3">15 Jul</span>
            </div>
          </div>
          <div class="d-flex justify-content-between mx-3">
            <p style="font-size: 10px;" class="ms-3 text-dark">UI UX Design</p>
          </div>
        </div>

      </div>
      <div class="mt-2">
        <h4 class="mb-1 text-sm text-dark">
          <button
              class="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right"
          >
            <i class="ni ni-bold-right" aria-hidden="true"></i>
          </button>
          {{ title3 }} <span> ({{ total2 }}) </span>
        </h4>
      </div>
    </div>
  </div>

  <!-- modal -->
  <div class="modal" id="modal-del-kpi">
    <div class="modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content">
        <!-- modal header -->
        <div class="modal-header-delete justify-content-end mt-4">
          <i
              style="margin-top: -20px;"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              class="bi bi-x-lg"
          ></i>
        </div>
        <!-- modal body -->
        <div class="modal-body text-center">
          <img src="@/assets/img/icons/delpro.png">
          <h3 class="mt-3"> Oops, KPI / Project Ini Telah Dihapus.</h3>
          <p>Kamu tidak dapat melihat detail KPI / Project yang telah dihapus.</p>
        </div>
        <div class="modal-footer-delete justify-content-center">
          <button type="button" class="btn btn-primary w-35" data-bs-dismiss="modal">Oke</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "list-task-card",
  props: {
    cardTitle: {
      type: String,
      default: "Pekerjaan Saya",
    },
    title: {
      type: String,
      default: "Terlambat",
    },
    title2: {
      type: String,
      default: "Mendekati Deadline",
    },
    title3: {
      type: String,
      default: "Semua Pekerjaan",
    },
    titleDesc: {
      type: String,
      default: "250 in stock",
    },
    titleDesc2: {
      type: String,
      default: "346+ sold",
    },
    title2Desc: {
      type: String,
      default: "123 closed",
    },
    title4Desc: {
      type: String,
      default: "+ 430",
    },
    title2Desc2: {
      type: String,
      default: "15 open",
    },
    title3Desc: {
      type: String,
      default: "1 is active",
    },
    title3Desc2: {
      type: String,
      default: "40 closed",
    },
    total: {
      type: Number,
      default: 0,
    },
    total1: {
      type: Number,
      default: 12,
    },
    total2: {
      type: Number,
      default: 7,
    }
  },
};
</script>
