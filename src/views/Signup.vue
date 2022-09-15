<template>
  <main class="main-content mt-0">
    <div
      class="page-header min-vh-100"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/login-bg.png') + ')' }"
    >
      <div class="container">
        <div class="row justify-content-center">
          <img
              src="../assets/img/Logo.png"
              style="width: 100px;"
          />
        </div>

        <div class="justify-content-center mt-5">
          <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div class="card">
              <div class="card-header text-center pt-4">
                <img
                    src="../assets/img/login-icon.png"
                    style="width: 280px;"
                />
                <h4 class="mt-6">Selamat Datang di <br> PLN Employee Super App</h4>
                <p
                    class="text-lead text-black"
                >Login untuk masuk ke dalam aplikasi</p>

                <form role="form">
                  <div class="text-center">
                    <argon-button fullWidth color="info" variant="gradient" class="my-4 mb-2"> <i class="fas fa-key"></i> &nbsp;&nbsp; Login dengan PLN SSO</argon-button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
