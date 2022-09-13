<template>
  <div class="mb-4 card roundedCustom">
    <div class="p-3 card-body">
      <div class="d-flex">
        <!-- inisial name Project -->
        <p class="bg-primary rounded-2 text-white fs-4 p-2">UU</p>
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
    percentageColor: {
      type: String,
      default: "text-success",
    },
    iconBackground: {
      type: String,
      default: "bg-white",
    },
    contentClass: {
      type: String,
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
/* element style*/
p {
  font-size: 12px;
}
</style>
