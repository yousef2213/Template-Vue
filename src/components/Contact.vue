<template>
  <div class="row">
    <div class="col-12 col-md-10 mx-auto mt-5">
      <div class="back p-5 mt-4 rounded text-white">
        <h6 class="text-capitalize font-main mb-3 text-light">
          contect with me :
        </h6>
        <form action="https://formspree.io/moqkgrkw" method="POST">
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Yousef Ayman"
              name="Username"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control mb-3"
              placeholder="Email.email.com"
              name="_email"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Important !!"
              name="_important"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control mb-3  "
              placeholder="Leave Me Message"
              rows="4"
              name="_message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-primary text-light w-15 font-main"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>
<style lang="scss" scoped>
.back {
  background-color: #172b4d !important;
}
.w-15 {
  width: 15%;
}
input::placeholder,
textarea::placeholder {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
}

input,
textarea {
  border: 1px solid #455367 !important;
  background-color: #172b4d !important;
  color: #ccc !important;
}
</style>
