<template>
  <div

    class="form-box"
  >
    <form
      class="update-form"
    >
      <div class="form-group">
        <label for="inputfname">نام</label>
        <input
          id="inputfname"
          type="text"
          class="form-control"
          :placeholder="u.firstName"
        >
      </div>
      <div class="form-group">
        <label for="inputlname">نام خانوادگی</label>
        <input
          id="inputlname"
          type="text"
          class="form-control"
          :placeholder="u.lastName"
        >
      </div>
      <div class="form-group">
        <label for="inputphonenumber">شماره تلفن</label>
        <input
          id="inputphonenumber"
          type="text"
          class="form-control"
          :placeholder="u.phoneNumber"
        >
      </div>
      <div class="form-group">
        <label for="inputemail">ایمیل</label>
        <input
          id="inputemail"
          type="email"
          class="form-control"
          :placeholder="u.email"
        >
      </div>
      <div class="form-group">
        <label for="inputusername">نام کاربری</label>
        <input
          id="inputusername"
          type="text"
          class="form-control"
          :placeholder="u.userName"
        >
      </div>
    </form>
    <router-link
      class="refuse"
      to="/all"
    >
      بازگشت
    </router-link>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      u: null
    }
  },
  created () {
    axios.get('https://asp.retko.ir/api/users/get/' + this.$route.params.id)
      .then(response => (this.u = response.data))
  }
}
</script>
