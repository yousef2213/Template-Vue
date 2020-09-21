<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-2 mx-auto px-0 rounded">
        <Navbar />
      </div>
      <div class="col-12 col-md-10 mx-auto rounded bg-main">
        <ProfileComponent />
      </div>
    </div>
  </div>
</template>
<script>
import ProfileComponent from "../components/ProfileComponent.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Profile",
  components: {
    ProfileComponent,
    Navbar
  }
};
</script>
