<template>
  <div class="row py-5">
    <div class="col-12 col-md-7 rounded mt-4">
      <div class="form-wrapper">
        <h6 className="text-dark font-main pb-3 rounded">
          Put Your Information :
        </h6>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <small
                htmlFor="Username "
                class="text-dark font-main pb-2 d-inline-block"
              >
                Username
              </small>
              <input
                type="text"
                v-model="Username"
                class="form-control form-control-sm"
                id="Username"
                placeholder="Username"
              />
            </div>
            <div class="form-group col-md-6">
              <small
                htmlFor="email "
                class="text-dark font-main pb-2 d-inline-block"
              >
                Email address
              </small>
              <input
                type="email"
                class="form-control form-control-sm"
                id="email"
                v-model="email"
                placeholder="Email address"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <small
                htmlFor="FirstName"
                class="text-dark font-main pb-2 d-inline-block"
              >
                First Name
              </small>
              <input
                type="text"
                class="form-control form-control-sm"
                id="FirstName"
                v-model="Firstname"
                placeholder="First Name"
              />
            </div>
            <div class="form-group col-md-6">
              <small
                htmlFor="Username "
                class="text-dark font-main pb-2 d-inline-block"
              >
                Last Name
              </small>
              <input
                type="email"
                class="form-control form-control-sm"
                id="LastName"
                v-model="Lastname"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div class="form-group pb-3">
            <small
              htmlFor="Working"
              class="text-dark font-main pb-2 d-inline-block"
            >
              Working
            </small>
            <input
              type="text"
              class="form-control form-control-sm"
              id="Working"
              placeholder="Egypt"
              v-model="Work"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <small
                htmlFor="City"
                class="text-dark font-main pb-2 d-inline-block"
              >
                City
              </small>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="City"
                id="City"
                placeholder="Cairo, or Zagazig"
              />
            </div>
            <div class="form-group col-md-6">
              <small
                htmlFor="Country"
                class="text-dark font-main pb-2 d-inline-block"
              >
                Country
              </small>
              <input
                type="text"
                v-model="Country"
                class="form-control form-control-sm"
                id="Country"
                placeholder="Egypt"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8">
              <small
                htmlFor="about"
                class="text-dark font-main pb-2 d-inline-block"
              >
                Message For You
              </small>
              <p class="parg">Make Your World</p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-12 col-md-5 mt-4">
      <div class="info rounded mt-2">
        <img src="../imgs/personal.png" alt="Personal Img" />
        <h6 class="text-capitalize pt-3">{{ Username }}</h6>
        <small class="text-capitalize">{{ Work }}</small>
        <br />
        <small class="text-capitalize text-muted">{{ email }}</small>
        <br />
        <small class="text-capitalize text-primary">
          {{ Country }} / {{ City }}
        </small>
        <p class="pt-5 text-muted">
          Hello, I am Yousef Ayman and I am a web developer. I live and work in
          Cairo . I spend most of my day, experimenting with HTML, CSS and
          JavaScript (and React Library, Vue JavaScript Framework ). I enjoy
          coding and the challenge of learning something new everyday. You can
          also find me at Github
          <a href="https://github.com/yousef2213" target="blank">
            Yousef Ayman.
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCom",
  data() {
    return {
      Username: "yousef ayman",
      Work: "Front-end Developer React/Vue",
      email: "yousefaymanelsayed@gmail.com",
      Country: "Eg",
      City: "Cairo",
      Firstname: "yousef",
      Lastname: "Lastname"
    };
  }
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  background-color: #fff;
  overflow: hidden;
  padding: 20px;
  .parg {
    border: 1px solid #96007f;
    padding: 10px;
    border-radius: 6px;
    color: #555;
  }
}
.info {
  background-color: #27293d;
  overflow: hidden;
  padding: 20px;
  text-align: center;
  color: #fff;
  img {
    width: 100px;
    border-radius: 50%;
    border: 3px solid #fff;
  }
}
.fa {
  padding: 10px;
  font-size: 20px;
  width: 36px;
  text-align: center;
  margin: 0 5px;
  text-decoration: none;
  border-radius: 50%;
}
.fa:hover {
  opacity: 0.7;
  text-decoration: none;
}

.fa-facebook {
  background: #3b5998;
}
.fa-twitter {
  background: #55acee;
}
.fa-instagram {
  background: #125688;
}
</style>
