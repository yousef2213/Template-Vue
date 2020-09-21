<template>
  <div class="nav-bar-b">
    <ul>
      <div class="hh" @click="Close()"></div>
      <li @click="Close()" class="text-white pb-4">
        <router-link to="/" class="link">dashboard</router-link>
      </li>
      <li @click="Close()" class="py-4">
        <router-link to="/about" class="link">About</router-link>
      </li>
      <li @click="Close()" class="py-3">
        <router-link to="/Profile" class="link">user profile</router-link>
      </li>
      <li @click="Close()" class="py-4">
        <router-link to="/maps" class="link">map</router-link>
      </li>
      <li @click="Close()" class="py-4">
        <router-link to="/templates" class="link">templates</router-link>
      </li>
      <li @click="Close()" class="py-4">
        <router-link to="/contact" class="link">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    Close: function() {
      const Nav = document.querySelector(".nav-bar-b");
      Nav.style.left = "-40%";
    }
  }
};
</script>
