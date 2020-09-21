<template>
  <div class="text-center pb-3 pt-4">
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      style="width: 100%; height: 550px;"
    >
    </GmapMap>
  </div>
</template>
<script>
export default {
  name: "Map",
  data() {
    return {
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },
  created() {
    this.$getLocation({}).then((coordinates) => {
      this.myCoordinates = coordinates;
    });
  },
};
</script>

<style lang="scss" scoped></style>
