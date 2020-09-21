<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-2 mx-auto px-0 rounded">
        <Navbar />
      </div>
      <div class="col-12 col-md-10 mx-auto rounded bg-main">
        <Banner />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Navbar from "./Navbar.vue";
export default {
  name: "Layout",
  components: {
    Banner,
    Navbar,
  },
};
</script>
