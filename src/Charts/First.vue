<template>
  <div>
    <div class="chart1">
      <area-chart :data="datachart"  height="400px"></area-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: "First",
  data() {
    return {
      datachart: {
        HTML: 55.7,
        CSS: 55.1,
        JAVA: 49.4,
        "TYPE SCRIPT": 67.0,
        JAVASCRIPT: 61.9,
        "C#": 60.4,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.chart1 {
  background: none;
  border-radius: 10px;
  width: 100% !important;
}
#chart-2 {
  width: 100% !important;
  padding: 10px;
}
</style>
