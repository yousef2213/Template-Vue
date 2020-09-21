<template>
  <div class="row">
    <Hero />
    <div class="col-11 mx-auto rounded position-relative mt-3">
      <div class="work mb-5">
        <ul class="list-group bg-white text-white">
          <li
            class="list-group-item item-head bg-transparent d-flex justify-contect-between"
          >
            <h6 class="name-icon text-capitalize font-main">templates</h6>
          </li>
          <hr />
          <li
            class="list-group-item font-main bg-transparent text-uppercase projects"
          >
            projects
          </li>
          <hr />
          <li
            class="list-group-item item bg-transparent d-flex justify-content-between align-items-center"
          >
            <div class="d-flex">
              <img src="../imgs/icons/react.jpg" class="icon" />
              <h6 class="name-icon pl-3 text-capitalize font-main">
                templates react
              </h6>
            </div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 90%;"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </li>
          <hr />

          <li
            class="list-group-item item bg-transparent d-flex justify-content-between align-items-center"
          >
            <div class="d-flex">
              <img src="../imgs/icons/vue.jpg" class="icon" />
              <h6 class="name-icon pl-3 text-capitalize font-main">
                templates vue
              </h6>
            </div>
            <div class="progress">
              <div
                class="progress-bar-1"
                role="progressbar"
                style="width: 80%;"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </li>
          <hr />
          <li
            class="list-group-item item bg-transparent d-flex justify-content-between align-items-center"
          >
            <div class="d-flex">
              <img src="../imgs/icons/bootstrap.jpg" class="icon" />
              <h6 class="name-icon pl-3 text-capitalize font-main">
                templates Bootstap
              </h6>
            </div>
            <div class="progress">
              <div
                class="progress-bar-2"
                role="progressbar"
                style="width: 95%;"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Hero from "./Hero.vue";
export default {
  name: "List",
  components: {
    Hero
  }
};
</script>

<style lang="scss" scoped>
.b {
  background: #172b4d !important;
}
.projects {
  font-size: 11px;
  letter-spacing: 2px;
  color: #8898aa;
  text-transform: uppercase;
  border: 0 !important;
}
.item {
  transition: 0.3s all ease-in-out !important;
  border: 0 !important;
}
.item-head {
  transition: 0.3s all ease-in-out !important;
  border: 0 !important;
}
.item:hover {
  background: #ebeef5 !important;
  cursor: pointer;
}
.icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.name-icon {
  align-self: center;
  padding-top: 5px;
  color: #606266;
  font-size: 15px !important;
}
.work {
  background: #f6f6f6 !important;
  width: 100%;
  border-radius: 10px;
}
hr {
  width: 100%;
  margin: 0 0;
  background: #ebeef5 !important;
}
.progress {
  width: 20%;
  height: 5px;
}
.progress-bar-1 {
  background: #42b884 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  transition: width 0.6s ease;
}
.progress-bar-2 {
  background: #5b4283 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  transition: width 0.6s ease;
}
</style>
