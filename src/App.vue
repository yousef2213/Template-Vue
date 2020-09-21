<template>
  <div>
    <div class="menu" @click="Open()">
      <span></span>
      <span></span>
      <span></span>
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

<style lang="scss">
.menu {
  position: fixed;
  z-index: 999;
  top: 20px;
  left: 20px;
  display: none;
  cursor: pointer;
}

.menu span {
  background: #444;
  display: block;
  width: 27px;
  margin: 4px;
  height: 4px;
}
</style>
