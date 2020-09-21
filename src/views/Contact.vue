<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-2 mx-auto px-0 rounded">
        <Navbar />
      </div>
      <div class="col-12 col-md-10 mx-auto rounded bg-main">
        <Contact />
      </div>
    </div>
  </div>
</template>
<script>
import Contact from "../components/Contact.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "contact",
  components: {
    Contact,
    Navbar
  }
};
</script>
