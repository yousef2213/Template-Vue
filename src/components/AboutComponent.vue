<template>
  <div>
    <Hero />
    <div class="col-12 col-md-11 mx-auto">
      <div class="text-white text-center">
        <div class="profile p-5 rounded">
          <h3 class="pb-3 text-danger text-capitalize">about me</h3>
          <p class="font-main">
            Hello, I am Yousef Ayman and I am a web developer. I live and work
            in Cairo . I spend most of my day, experimenting with HTML, CSS and
            JavaScript (and React Library). I enjoy coding and the challenge of
            learning something new everyday. You can also find me at Github
            <a href="https://github.com/yousef2213" target="_blank"
              >Yousef Ayman.</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Hero from "./Hero";
export default {
  name: "aboutCom",
  components: {
    Hero
  }
};
</script>
<style lang="scss" scoped>
.profile {
  background: #fff;
  color: #333;
  align-self: center;
  margin-top: 50px;
}
</style>
