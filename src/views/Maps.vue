<template>
  <div class="container-fluid">
    <div class="row Maps">
      <div class="col-12 col-md-2 mx-auto px-0 rounded">
        <Navbar />
      </div>
      <div class="col-12 col-md-10 mx-auto rounded bg-main mt-0">
        <Map />
      </div>
    </div>
  </div>
</template>

<script>
import Map from "../Charts/Map.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Maps",
  components: {
    Map,
    Navbar
  }
};
</script>
