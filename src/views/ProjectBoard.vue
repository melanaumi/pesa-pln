<template>
  <main>
    <div className="container-fluid">
      <div
          className="page-header min-height-150"
          style="
          background-color: #246997;
          margin-right: -24px;
          margin-left: -34%;
        "
      >
        <span className="mask opacity-6"></span>
      </div>

      <div className="mt-n7" style="position: relative;">
        <div className="p-3">
          <div className="row gx-4">
            <div className="col-auto">
              <div className="avatar avatar-xxl avatar-size-50 position-relative" style="background-color: #B3E4EA;">
                <p style="font-size: 20pt; font-weight: bolder; margin-top: 15px; color: #246997;">UU</p>
              </div>
            </div>
            <div className="col-auto my-auto">
              <div className="h-100">
                <span className="badge badge-xl bg-gradient-success text-white">TUPOKSI</span>
                <h4 className="mb-3 mt-2 text-white">Sayo Kravits &nbsp; <i className="fas fa-chevron-down"
                                                                            aria-hidden="true"></i></h4>
                <p className="mb-0 mt-3 col-lg-12 col-md-12 my-sm-auto ms-sm-auto me-sm-0 font-weight-bold text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <p className="mb-0 mt-2 font-weight-bold text-sm text-info">Tampilkan Lebih Banyak &nbsp; <i
                    className="fas fa-chevron-down" aria-hidden="true"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-4 container-fluid">
      <div className="card">
        <div className="card-header pb-4">
          <div className="d-flex align-items-center justify-content-end">
            <div style="margin: 10px;">
              <div className="avatar-group">
                <a
                    href="javascript:;"
                    className="border-0 avatar avatar-sm rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="2 New Messages"
                >
                  <img alt="Image placeholder" src="@/assets/img/team-1.jpg"/>
                </a>
                <a
                    href="javascript:;"
                    className="border-0 avatar avatar-sm rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="1 New Message"
                >
                  <img alt="Image placeholder" src="@/assets/img/team-2.jpg"/>
                </a>
                <a
                    href="javascript:;"
                    className="border-0 avatar avatar-sm rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="13 New Messages"
                >
                  <img alt="Image placeholder" src="@/assets/img/team-3.jpg"/>
                </a>
                <a
                    href="javascript:;"
                    className="border-0 avatar avatar-sm rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="7 New Messages"
                >
                  <img alt="Image placeholder" src="@/assets/img/team-4.jpg"/>
                </a>
              </div>
            </div>
            <div style="margin: 10px;">
              <argon-button color="success" size="sm"
              ><img src="../assets/img/icons/user-plus.png"/>&nbsp;&nbsp;Undang
              </argon-button
              >
            </div>
            <div style="margin: 10px;">
              <img src="../assets/img/icons/star3.png"/>
            </div>
            <div
                className="pe-md-3 d-flex align-items-center" style="margin: 10px;"
            >
              <div className="input-group">
                    <span className="input-group-text text-body">
                      <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                <input
                    type="text"
                    className="form-control"
                    :placeholder="
                        this.$store.state.isRTL ? 'أكتب هنا...' : 'Cari Task ...'
                      "
                />
              </div>
            </div>
            <div style="margin: 10px;">
              <img src="../assets/img/icons/Filter.png"/>
            </div>
            <div style="margin: 10px;">
              <img src="../assets/img/icons/Sort.png"/>
            </div>
            <!-- dropdown aktivitas dan delete project -->
            <div style="margin-top: 1px;">
              <button
                  className="border-0 rounded-circle bg-white"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                <img className="w-100" src="../assets/img/icons/Cho.png"/>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" role="menu">
                <div className="p-2 d-flex">
                  <a className="dropdown-item" href="/data">
                    <img
                        style="margin-right: 13px;"
                        src="../assets/img/icons/aktivitas_dropdown.png"
                    />Activitas
                  </a>
                </div>
                <div className="p-2 d-flex">
                  <a className="dropdown-item" href="#">
                    <img style="margin-right: 10px;" src="../assets/img/icons/deleteIcon.png"/>Keluar dari project
                  </a>
                </div>
                <div className="p-2 d-flex">
                  <a className="dropdown-item" href="#">
                    <img style="margin-right: 10px;" src="../assets/img/icons/deleteIcon.png"/>Hapus project
                  </a>
                </div>
              </ul>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-3">
              <billing-card/>
            </div>
            <div className="col-md-3">
              <billing-card/>
            </div>
            <div className="col-md-3">
              <billing-card/>
            </div>
            <div className="col-md-3">
              <DashCard></DashCard>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonButton from "@/components/ArgonButton.vue";
import BillingCard from "./components/BillingCard";
import DashCard from "../examples/Cards/DashCard";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "profile",
  data() {
    return {
      showMenu: false
    };
  },
  components: {DashCard, ArgonButton, BillingCard},

  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    body.classList.add("profile-overview");
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  }
};
</script>
