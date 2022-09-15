<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-150"
        style="
          background-color: #246997;
          margin-right: -24px;
          margin-left: -34%;
        "
      >
        <span class="mask opacity-6"></span>
      </div>

      <div class="mt-n7" style="position: relative;">
        <div class="p-3">
          <div class="row gx-4">
            <div class="col-auto">
              <div class="avatar avatar-xxl avatar-size-50 position-relative" style="background-color: #B3E4EA;">
                <p style="font-size: 20pt; font-weight: bolder; margin-top: 15px; color: #246997;">UU</p>
              </div>
            </div>
            <div class="col-auto my-auto">
              <div class="h-100">
                <span class="badge badge-xl bg-gradient-success text-white">TUPOKSI</span>
                <h4 class="mb-3 mt-2 text-white">Sayo Kravits &nbsp; <i class="fas fa-chevron-down" aria-hidden="true"></i></h4>
                <p class="mb-0 mt-3 col-lg-12 col-md-12 my-sm-auto ms-sm-auto me-sm-0 font-weight-bold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <p class="mb-0 mt-2 font-weight-bold text-sm text-info">Tampilkan Lebih Banyak  &nbsp; <i class="fas fa-chevron-down" aria-hidden="true"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-4 container-fluid">
          <div class="card">
            <div class="card-header pb-4">
              <div class="d-flex align-items-center justify-content-end">
                <div style="margin: 10px;">
                  <div class="avatar-group">
                    <a
                        href="javascript:;"
                        class="border-0 avatar avatar-sm rounded-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="2 New Messages"
                    >
                      <img alt="Image placeholder" src="@/assets/img/team-1.jpg" />
                    </a>
                    <a
                        href="javascript:;"
                        class="border-0 avatar avatar-sm rounded-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="1 New Message"
                    >
                      <img alt="Image placeholder" src="@/assets/img/team-2.jpg" />
                    </a>
                    <a
                        href="javascript:;"
                        class="border-0 avatar avatar-sm rounded-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="13 New Messages"
                    >
                      <img alt="Image placeholder" src="@/assets/img/team-3.jpg" />
                    </a>
                    <a
                        href="javascript:;"
                        class="border-0 avatar avatar-sm rounded-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="7 New Messages"
                    >
                      <img alt="Image placeholder" src="@/assets/img/team-4.jpg" />
                    </a>
                  </div>
                </div>
                <div style="margin: 10px;">
                  <argon-button color="success" size="sm"
                  ><img src="../assets/img/icons/user-plus.png" />&nbsp;&nbsp;Undang</argon-button
                  >
                </div>
                <div style="margin: 10px;">
                  <img src="../assets/img/icons/star3.png" />
                </div>
                <div
                    class="pe-md-3 d-flex align-items-center" style="margin: 10px;"
                >
                  <div class="input-group">
                    <span class="input-group-text text-body">
                      <i class="fas fa-search" aria-hidden="true"></i>
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        :placeholder="
                        this.$store.state.isRTL ? 'أكتب هنا...' : 'Type here...'
                      "
                    />
                  </div>
                </div>
                <div style="margin: 10px;">
                  <img src="../assets/img/icons/Filter.png" />
                </div>
                <div style="margin: 10px;">
                  <img src="../assets/img/icons/Sort.png" />
                </div>
                <div style="margin: 10px;">
                  <img src="../assets/img/icons/Cho.png" />
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-md-3">
                  <billing-card />
                </div>
                <div class="col-md-3">
                  <billing-card />
                </div>
                <div class="col-md-3">
                  <billing-card />
                </div>
                <div class="col-md-3">
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
  components: {DashCard, ArgonButton, BillingCard },

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
