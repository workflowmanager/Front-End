<style scoped>
.allusers-link {
display: flex;
 float: right !important;
}
@media screen and (max-width: 50em) {
.allusers-link {
 float: none !important;
}
}
@media screen and (max-width: 35em) {
.allusers-link {
 float: none !important;
}
}
</style>
<template>
  <div>
    <div
      id="myTopnav"
      class="topnav"
    >
      <a
        href="javascript:void(0);"
        class="icon"
        onclick="myFunction()"
      >
        <i class="fa fa-bars" />
      </a>
      <a
        href="#home"
        class="active"
      >پنل مدیریت</a>

      <div class="sidebar">
        <ul class="nav-menu">
          <li>
            <a
              id="index"
              class="active"
              href="../index.html"
            >
              <div>
                <span>صفحه اصلی</span>
                <i class="fa fa-home" />
              </div>
            </a>
          </li>
          <li
            class="allusers-link"
          >
            <router-link
              id="allusers"
              to="/all"
              @click.native="toactive"
            >
              کاربران
              <i class="fa fa-users" />
            </router-link>
          </li>
          <li>
            <a href="src/components/Workflows/All.html">
              <div>
                چرخه های کاری
                <i class="fa fa-retweet" />
              </div>

            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toactive (event) {
      document.getElementById('allusers').className = 'active'
      document.getElementById('index').className = ''
    }
  }
}
</script>
