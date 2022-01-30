<template>
    <div class="profile">
      <h4>User: {{getUser.username}}</h4>
      <h6>Role: {{getUser.role}}</h6>
      <h6>Token: {{getToken}}</h6>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default({
  computed: {
    ...mapGetters([
      'getUser',
      'getToken'
    ])
  },
  beforeRouteEnter: (to, from, next) => {
    if(localStorage.getItem('token') != null){
      next();
    }else{
      next("/login")
    }
  },
  data(){
    return{
      username: ""
    }
  },
  mounted() {
    console.log(this.getUser)
  },
})
</script>

