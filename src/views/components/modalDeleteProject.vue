<template>
  <div class="modal" id="myModalDeleteProject">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <!-- modal header -->
        <div class="modal-header-delete">
          <h5
            style="color:black;"
            class="modal-title mt-2"
            id="exampleModalToggleLabel"
          >Hapus Project</h5>
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
          <form>
            <div
            style="color: black; font-size:13px; background-color: #FFF5E9;"
            class="alert d-flex align-items-center"
            role="alert"
            >
            <i class="text-warning fs-4 bi bi-exclamation-triangle me-3"></i>
            <span>
              Semua pekerjaan dan aktivitas yang ada di KPI / project ini akan di hapus,
              dan anda tidak akan bisa membukanya kembali. Penghapusan ini tidak bisa diundo.
            </span>
            </div>
            <div class="mb-3">
              <p style="font-size: 15px;">Masukkan nama KPI / project untuk konfirmasi KPI / project yang ingin Anda hapus</p>
              <input
                type="text"
                placeholder="Tulis nama project"
                class="form-control"
                id="recipient-name"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer-delete">
          <button
            type="button"
            class="btn btn-outline-primary w-35"
            data-bs-dismiss="modal"
            @click="hitApiDelete()"
          >Hapus Project</button>
          <button type="button" class="btn btn-primary w-35" data-bs-dismiss="modal">Batalkan</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal-delete",
  data() {
    return {
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