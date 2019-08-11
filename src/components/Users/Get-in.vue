<!-- <template>
  <div>
    mnm mn: {{info.firstName}}
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: null
    }
  },
  created () {
  axios.get('https://asp.retko.ir/api/users/get/'+this.$route.params.id)
  .then(response => (this.info = response.data))
}
}
</script> -->
