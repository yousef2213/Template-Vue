<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-2 mx-auto px-0 rounded">
        <Navbar />
      </div>
      <div class="col-12 col-md-10 mx-auto rounded bg-main">
        <Template />
      </div>
    </div>
  </div>
</template>
<script>
import Template from "../components/Template.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Templates",
  components: {
    Template,
    Navbar
  }
};
</script>
