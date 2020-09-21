<template>
  <div class="chart1">
    <pie-chart :data="datachart" height="300px"></pie-chart>
  </div>
</template>

<script>
export default {
  name: "Chart",
  data() {
    return {
      datachart: [
        ["RUST", 78.9],
        ["KOTLIN", 75.1],
        ["TYPE SCRIPT", 67.0],
        ["GO", 65.6],
        ["JAVASCRIPT", 61.9],
        ["C#", 60.4],
        ["SCALA", 57.8],
        ["SQL", 57.0],
        ["HTML", 55.7],
        ["CSS", 55.1],
        ["HASHKELL", 53.0],
        ["JAVA", 49.4],
        ["RUBY", 47.4]
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.chart1 {
  background: none;
  border-radius: 10px;
  width: 100% !important;
}
#chart-1 {
  width: 100% !important;
  padding: 10px 10px 10px 10px;
}
</style>
