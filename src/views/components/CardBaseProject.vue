<template>
  <div class="mb-4 card roundedCustom" @click="urlParams()">
    <div class="p-1 card-body">
      <div class="d-flex align-items-center position-relative">
        <!-- inisial name Project -->
        <p class="bg-primary rounded-2 text-white fs-4 p-2 mt-3 ms-2">UU</p>
        <div>
          <!-- title -->
          <h6 class="font-weight-bolder ms-3" :class="valueColor">{{ value }}</h6>
          <!-- Tipe Project -->
          <div
            :class="detail === 'KPI' ? 'bg-kpi roundedCustom ms-3 d-inline-block py-1 px-2'
            : detail === 'Tupoksi' ? 'bg-tupoksi roundedCustom ms-3 d-inline-block py-1 px-2' 
            : 'bg-lainnya roundedCustom ms-3 d-inline-block py-1 px-2'"
          >
            <p class="m-0 text-center fw-bold">{{detail}}</p>
          </div>
        </div>
        <div class="position-absolute right">
          <!-- <img :src="getImgUrl(iconClass)" /> -->
          <img src="../../assets/img/icons/star3.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardBaseProject",
  data() {
    return {
    };
  },
  methods: {
    getImgUrl: function (img) { 
      return require('@/assets/img/icons/' + img);
    },
    urlParams: function () {
      this.$router.push({ name: "Project Board" });
    }
  },
  props: {
    directionReverse: Boolean,
    title: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    titleColor: {
      type: String,
    },
    value: {
      required: true,
    },
    valueColor: {
      type: String,
    },
    percentage: String,
    iconClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* class style*/
.bg-lainnya {
  color: #666666;
  background-color: #efefef;
}
.bg-tupoksi {
  color: #36b37e;
  background-color: #eafbef;
}
.bg-kpi {
  color: #5c00b9;
  background-color: #efe6f8;
}
.roundedCustom {
  transition: box-shadow 0.3s;
  border-radius: 8px;
  cursor: pointer;
}
.roundedCustom:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
.right {
  right: 10px;
}
/* element style*/
p {
  font-size: 12px;
}
</style>
