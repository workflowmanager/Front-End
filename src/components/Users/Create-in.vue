<template>
  <div
    id="adduser"
    class="form-box"
  >
    <form
      class="add-form"
      @submit="formSubmit"
    >
      <div class="form-group">
        <label for="inputfname">نام</label>
        <input
          id="inputfname"
          v-model="fN"
          type="text"
          class="form-control"
          placeholder="نام  "
          required
        >
      </div>
      <div class="form-group">
        <label for="inputlname">نام خانوادگی</label>
        <input
          id="inputlname"
          v-model="lN"
          type="text"
          class="form-control"
          placeholder="نام خانوادگی "
          required
        >
      </div>
      <div class="form-group">
        <label for="inputphonenumber">شماره تلفن</label>
        <input
          id="inputphonenumber"
          v-model="pN"
          type="text"
          class="form-control"
          placeholder="شماره تلفن"
          required
        >
      </div>
      <div class="form-group">
        <label for="inputemail">ایمیل</label>
        <input
          id="inputemail"
          v-model="em"
          type="email"
          class="form-control"
          placeholder="ایمیل"
          required
        >
      </div>
      <div class="form-group">
        <label for="inputusername">نام کاربری</label>
        <input
          id="inputusername"
          v-model="uN"
          type="text"
          class="form-control"
          placeholder="نام کاربری"
          required
        >
      </div>
      <div class="form-group">
        <label for="inputpassword">رمز عبور</label>
        <input
          id="inputpassword"
          v-model="pa"
          type="password"
          class="form-control"
          placeholder="رمزعبور"
          required
        >
      </div>

      <router-link
        to="/allstaffs"
        class="refuse"
      >
        انصراف
      </router-link>
      <button
        type="submit"
        class="btn btn-primary"
      >
        ثبت کارمند
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      fN: '',
      lN: '',
      uN: '',
      em: '',
      pa: '',
      pN: '',
      output: ''
    }
  },
  mounted () {
    console.log('Component mounted.')
  },
  methods: {
    emailIsValid: function (email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    },
    formSubmit (e) {
      e.preventDefault()
      var cashfn = this.fN
      var cashln = this.lN
      var cashun = this.uN
      var cashpa = this.pa
      axios.post('https://asp.retko.ir/api/users/CreateStaffUser', {
        firstName: this.fN,
        lastName: this.lN,
        userName: this.uN,
        email: this.em,
        password: this.pa,
        phoneNumber: this.pN
      })
        .then(function (response) {
          if (cashpa.length < 6) {
            alert('رمز عبور نباید کمتر از 6 کاراکتر باشد')
          } else {
            alert('کاربر با موفقیت اضافه شد')
          }
        })
        .catch(function (error) {
          if (cashfn === '') {
            alert(error.response.data.errors['FirstName'])
          }
          if (cashln === '') {
            alert(error.response.data.errors['LastName'])
          }
          if (cashun === '') {
            alert(error.response.data.errors['UserName'])
          }

          alert(error.response.data.errors['Email'])

          if (cashpa === '') {
            alert(error.response.data.errors['Password'])
          }
        })
    }

  }
}
</script>
