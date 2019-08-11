<template>
  <div>
    <div class="add-box">
      <router-link
        class="add-xl"
        to="/create"
      >
        افزودن
        <i class="fa fa-plus-square" />
      </router-link>

      <router-link
        class="add-sm"
        to="/create"
      >
        <i class="fa fa-plus-square" />
      </router-link>
    </div>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link
          class="nav-link active"
          to="/all"
          style="color:black"
        >
          دانشجویان
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/allstaffs"
          style="color:black"
        >
          کارمندان
        </router-link>
      </li>
    </ul>
    <div class="table-responsive">
      <!-- <hello-component name="World" /> -->
      <table
        id="table"
        class="table user-list "
      >
        <thead>
          <tr>
            <th scope="col">
              ردیف
            </th>
            <th scope="col">
              نام و نام خانوادگی
            </th>
            <th scope="col">
              نام کاربری
            </th>
            <th scope="col">
              ایمیل
            </th>
            <th scope="col">
              شماره تلفن
            </th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody
          v-for="(user, index) in info"
          :key="user.id"
        >
          <tr>
            <th scope="row">
              {{ index+1 }}
            </th>
            <td>{{ user.firstName }} {{ user.lastName }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phoneNumber }}</td>
            <td>
              <a
                class="edit-icon"
                href="Update.html"
                data-toggle="tooltip"
                title="ویرایش"
              >
                <i class="material-icons">edit</i>
              </a>
              <a
                class="delete-icon"
                onclick="delete_user()"
                href="#"
                data-toggle="tooltip"
                title="حذف"
              >
                <i class="material-icons">delete</i>
              </a>
              <router-link
                :to="{name: 'getuser', params: {id: user.id}}"
                style="color:black"
              >
                more
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
  @import '../../../assets/Users.css';
</style>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      info: null
    }
  },
  created () {
    axios
      .get('https://asp.retko.ir/api/users/EndUsers')
      .then(response => (this.info = response.data))
  }
}
</script>
