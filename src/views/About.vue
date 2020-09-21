<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-2 mx-auto px-0 rounded">
        <Navbar />
      </div>
      <div class="col-12 col-md-10 mx-auto p-0 rounded bg-main">
        <AboutComponent />
      </div>
    </div>
  </div>
</template>

<script>
import AboutComponent from "../components/AboutComponent.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "About",
  components: {
    AboutComponent,
    Navbar
  }
};
</script>
