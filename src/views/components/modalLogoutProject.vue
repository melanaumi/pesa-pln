<template>
  <div class="modal" id="myModalLogoutProject">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <!-- modal header -->
        <div class="modal-header-delete">
          <h5 style="color:black;" class="modal-title mt-2" id="exampleModalToggleLabel">
            Anda yakin ingin keluar dari project
            <!-- color state -->
            <span class="text-primary">UX/UI Design</span>
            ?
          </h5>
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
          <p
            style="font-size: 15px;"
          >Anda tidak akan bisa melihat task project ini lagi sampai anda di invite kembali oleh kreator</p>
        </div>
        <div class="modal-footer-delete">
          <button
            type="button"
            class="btn btn-outline-primary w-35"
            data-bs-dismiss="modal"
            @click="hitApiDelete()"
          >Ya, keluar</button>
          <button type="button" class="btn btn-primary w-35" data-bs-dismiss="modal">Batalkan</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal-delete",
  components:{
  },
  data() {
    return {
    }
  },
  methods:{
    hitApiDelete() {
      alert("hit api keluar project")
    }
  }
}
</script>
<style scoped>
</style>