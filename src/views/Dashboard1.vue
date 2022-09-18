<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-7">
            <list-task-card />
          </div>
          <div class="col-lg-5">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <h6 class="mb-0 text-black-50">Kalender</h6>
                <h6 class="mb-0">Selasa, 1 Maret 2022
                  <button
                      class="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right"
                  >
                    <i class="ni ni-bold-down" aria-hidden="true"></i>
                  </button>
                </h6>
              </div>
              <div class="card-body row">
                <div class="col-lg-3">
                  <h6 style="color: #00A2B9;" class="text-center">Hari Ini</h6>
                  <h6 class="text-center" style="font-size: 25px; color: #00A2B9;">1</h6>
                </div>
                <div
                    class="col-lg-9"
                    data-bs-target="#modal-del-task"
                    data-bs-toggle="modal"
                >
                  <div class="card border-radius-sm" style="background-color: #add6dc; border-left-width: thick; border-left-color: #00A2B9;">
                    <div class="mt-3 mb-1 mx-1">
                      <div class="d-flex justify-content-between mt-2 mx-3">
                        <div>
                          <h6> Final Design Halaman Utama</h6>
                          <p>UI UX Design</p>
                        </div>
                        <div class="mt-2">
                          <a
                              href="javascript:;"
                              class="border-0 avatar avatar-sm rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="UI UX Design"
                              style="background-color: #00A2B9; font-weight: bold;"
                          >UU</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card border-radius-sm mt-2" style="background-color: #add6dc; border-left-width: thick; border-left-color: #f5b40d;">
                    <div class="mt-3 mb-1 mx-1">
                      <div class="d-flex justify-content-between mt-2 mx-3">
                        <div>
                          <h6> Final Design Halaman Utama</h6>
                          <p>UI UX Design</p>
                        </div>
                        <div class="mt-2">
                          <a
                              href="javascript:;"
                              class="border-0 avatar avatar-sm rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="UI UX Design"
                              style="background-color: #00A2B9; font-weight: bold;"
                          >UU</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body row">
                <div class="col-lg-3">
                  <h6 style="color: #80858a;" class="text-center">Besok</h6>
                  <h6 class="text-center" style="font-size: 25px; color: #676b6e;">2</h6>
                </div>
                <div class="col-lg-9">
                  <div class="card border-radius-sm" style="background-color: #babdbe; border-left-width: thick; border-left-color: #4d5154;">
                    <div class="mt-3 mb-1 mx-1">
                      <div class="d-flex justify-content-between mt-2 mb-2 mx-3">
                        <div>
                          <h6> Tidak Ada Pekerjaan</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body row">
                <div class="col-lg-3">
                  <h6 style="color: #80858a;" class="text-center">Kamis</h6>
                  <h6 class="text-center" style="font-size: 25px; color: #676b6e;">3</h6>
                </div>
                <div class="col-lg-9">
                  <div class="card border-radius-sm" style="background-color: #add6dc; border-left-width: thick; border-left-color: #00A2B9;">
                    <div class="mt-3 mb-1 mx-1">
                      <div class="d-flex justify-content-between mt-2 mx-3">
                        <div>
                          <h6> Final Design Halaman Utama</h6>
                          <p>UI UX Design</p>
                        </div>
                        <div class="mt-2">
                          <a
                              href="javascript:;"
                              class="border-0 avatar avatar-sm rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="UI UX Design"
                              style="background-color: #00A2B9; font-weight: bold;"
                          >UU</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card border-radius-sm mt-2" style="background-color: #add6dc; border-left-width: thick; border-left-color: #f5b40d;">
                    <div class="mt-3 mb-1 mx-1">
                      <div class="d-flex justify-content-between mt-2 mx-3">
                        <div>
                          <h6> Final Design Halaman Utama</h6>
                          <p>UI UX Design</p>
                        </div>
                        <div class="mt-2">
                          <a
                              href="javascript:;"
                              class="border-0 avatar avatar-sm rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="UI UX Design"
                              style="background-color: #00A2B9; font-weight: bold;"
                          >UU</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body row">
                <div class="col-lg-3">
                  <h6 style="color: #80858a;" class="text-center">Jum'at</h6>
                  <h6 class="text-center" style="font-size: 25px; color: #676b6e;">4</h6>
                </div>
                <div class="col-lg-9">
                  <div class="card border-radius-sm" style="background-color: #add6dc; border-left-width: thick; border-left-color: #00A2B9;">
                    <div class="mt-3 mb-1 mx-1">
                      <div class="d-flex justify-content-between mt-2 mx-3">
                        <div>
                          <h6> Final Design Halaman Utama</h6>
                          <p>UI UX Design</p>
                        </div>
                        <div class="mt-2">
                          <a
                              href="javascript:;"
                              class="border-0 avatar avatar-sm rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="UI UX Design"
                              style="background-color: #00A2B9; font-weight: bold;"
                          >UU</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card border-radius-sm mt-2" style="background-color: #add6dc; border-left-width: thick; border-left-color: #f5b40d;">
                    <div class="mt-3 mb-1 mx-1">
                      <div class="d-flex justify-content-between mt-2 mx-3">
                        <div>
                          <h6> Final Design Halaman Utama</h6>
                          <p>UI UX Design</p>
                        </div>
                        <div class="mt-2">
                          <a
                              href="javascript:;"
                              class="border-0 avatar avatar-sm rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="UI UX Design"
                              style="background-color: #00A2B9; font-weight: bold;"
                          >UU</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- modal -->
        <div class="modal" id="modal-del-task">
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
                <img src="../assets/img/icons/delpro.png">
                <h3 class="mt-3"> Oops, Pekerjaan Ini Telah Dihapus.</h3>
                <p>Kamu tidak dapat melihat detail pekerjaan yang telah dihapus.</p>
              </div>
              <div class="modal-footer-delete justify-content-center">
                <button type="button" class="btn btn-primary w-35" data-bs-dismiss="modal">Oke</button>
              </div>
            </div>
          </div>
        </div>
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
                <img src="../assets/img/icons/delpro.png">
                <h3 class="mt-3"> Oops, KPI / Project Ini Telah Dihapus.</h3>
                <p>Kamu tidak dapat melihat detail KPI / Project yang telah dihapus.</p>
              </div>
              <div class="modal-footer-delete justify-content-center">
                <button type="button" class="btn btn-primary w-35" data-bs-dismiss="modal">Oke</button>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-lg-7 mb-lg">
            <!-- line chart -->
            <div class="card z-index-2">
             <div class="card">
               <div class="p-3 pb-0 card-header">
                 <h6 class="mb-0">Riwayat Aktivitas</h6>
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
import ListTaskCard from "./components/ListTaskCard.vue";

import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";

export default {
  name: "dashboard-default",
  data() {
    return {
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
    ListTaskCard,
  },
};
</script>
