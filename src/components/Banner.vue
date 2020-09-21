<template>
  <div class="row position-relative bg-main">
    <Hero />
    <div class="col-12 col-md-8 mx-auto mt-3">
      <Chart />
    </div>
    <div class="col-12 col-md-4 mx-auto pt-3">
      <First />
    </div>
    <div class="col-12 col-md-12 mx-auto my-5">
      <ChartT />
    </div>
  </div>
</template>

<script>
import Chart from "../Charts/Chart.vue";
import ChartT from "../Charts/Chart2.vue";
import First from "../Charts/First.vue";
import Hero from "../components/Hero.vue";
export default {
  name: "Banner",
  components: {
    Chart,
    First,
    ChartT,
    Hero
  }
};
</script>

<style lang="scss" scoped>
.block {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
}
p {
  margin-bottom: 0;
}
</style>
