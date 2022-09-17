<template>
  <div class="modal" id="myModalUndangMember">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <!-- modal header -->
        <div class="modal-header-delete">
          <h5
            style="color:black;"
            class="modal-title mt-2"
            id="exampleModalToggleLabel"
          >Undang member</h5>
          <i
            style="margin-top: -20px;"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
            class="bi bi-x-lg"
          ></i>
          <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <div class="modal-header-delete">
          <div class="w-100 d-flex justify-content-between align-items-center align-self-center">
            <div class="input-group w-75">
              <span class="input-group-text">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
              <input type="text" class="form-control" :placeholder="'Cari nama member'" />
            </div>
            <div>
              <argon-button color="primary" size="sm">Undang</argon-button>
            </div>
          </div>
        </div>
        <!-- modal body -->
        <div class="modal-body">
          <div>
            <ul
              class="list-group list-group-flush"
              v-for="(stateMembers, index) in stateMember"
              :key="index"
            >
              <li class="list-group position-relative">
                <div class="d-flex align-items-center">
                  <!-- <div> -->
                  <p class="bg-primary rounded-circle text-white p-2 mt-3 ms-2">UU</p>
                  <!-- </div> -->
                  <div>
                    <p class="m-0 ms-3">{{stateMembers.name}}</p>
                    <div>
                      <p class="m-0 ms-3">{{stateMembers.divisi}}</p>
                    </div>
                  </div>
                </div>
                <div class="position-absolute right" @click="remove()">
                  <i class="bi bi-x-lg"></i>
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArgonButton from "@/components/ArgonButton.vue";
export default {
  name: "modal-delete",
  components: {ArgonButton},
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
.right {
  right: 15px;
  top: 25px;
  cursor: pointer;
}
</style>