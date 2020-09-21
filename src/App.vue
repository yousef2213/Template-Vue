<template>
  <div>
    <div class="menu" @click="Open()">
      <md-icon class="menu-i">menu</md-icon>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    Open: function() {
      const Nav = document.querySelector(".nav-bar-b");
      Nav.style.left = "0%";
    }
  }
};
</script>
