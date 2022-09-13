<template>
  <div class="mb-4 card">
    <div class="p-3 card-body">
      <div class="d-flex">
        <!-- inisial name Project -->
        <p class="bg-primary rounded-2 text-white fs-4 p-2">UU</p>
        <div>
          <!-- title -->
          <h5 class="font-weight-bolder ms-3" :class="valueColor">{{ value }}</h5>
          <!-- Tipe Project -->
          <div
            :class="detail === 'KPI' ? 'bg-kpi rounded-3 ms-3' : detail === 'Tupoksi' ? 'bg-tupoksi rounded-3 ms-3' : 'bg-lainnya rounded-3 ms-3'"
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
      reverseDirection: "flex-row-reverse justify-content-between",
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
</style>
