<template>
  <div
    class="mb-4 card roundedCustom"
    v-on:mouseover="mouseIn"
    v-on:mouseleave="mouseOut"
    @click="urlParams()"
  >
    <div class="p-1 card-body">
      <div class="d-flex align-items-center position-relative">
        <!-- inisial name Project -->
        <p class="bg-primary rounded-2 text-white fs-4 p-2 mt-3 ms-2">UU</p>
        <div>
          <!-- title -->
          <h6 class="font-weight-bolder ms-3" :class="valueColor">{{ value }}</h6>
          <!-- Tipe Project -->
          <div
            :class="detail === 'KPI' ? 'bg-kpi roundedCustomTipe ms-3 d-inline-block py-1 px-2'
            : detail === 'Tupoksi' ? 'bg-tupoksi roundedCustomTipe ms-3 d-inline-block py-1 px-2' 
            : 'bg-lainnya roundedCustomTipe ms-3 d-inline-block py-1 px-2'"
          >
            <p class="m-0 text-center fw-bold">{{detail}}</p>
          </div>
        </div>
        <div v-if="fav" class="position-absolute right">
          <img :src="require(`@/assets/img/icons/${iconClass}.png`)" />
        </div>
        <div v-if="fav=== false && this.mouse === true" class="position-absolute right">
          <img :src="defaultHover" v-on:mouseover="mouseInStar" v-on:mouseleave="mouseOutStar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardBaseProject",
  props: {
    detail: {
      type: String,
      required: true,
    },
    titleColor: {
      type: String,
    },
    valueColor: {
      type: String,
    },
    value:{
      type: String,
    },
    iconClass: {
      type: String,
    },
    fav: {
      type: Boolean
    }
  },
  data() {
    return {
      mouse: false,
      defaultHover: require(`@/assets/img/icons/star1.png`),
    };
  },
  methods: {
    // url params to project board
    urlParams() {
      this.$router.push({ name: "Project Board" });
    },
    // handle mouse hover
    mouseIn() {
      this.mouse = true;
    },
    mouseOut() {
      this.mouse = false;
    },
    mouseInStar() {
      this.defaultHover = require(`@/assets/img/icons/star2.png`);
    },
    mouseOutStar() {
      this.defaultHover = require(`@/assets/img/icons/star1.png`);
    }
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
.roundedCustomTipe {
  border-radius: 8px;
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
