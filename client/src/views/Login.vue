<template>
  <div class="login">
      <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input v-model="username" type="username" class="form-control" id="exampleInputEmail1" aria-describedby="usernameHelp" placeholder="Username" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group">
                    <button @click="loginUser" class="btn btn-primary">Login</button>
                    <br><br>
                    <a href="/register">Create account?</a>
                </div>  
            </div>
        </div>
  </div>
</template>

<script>

import axios from '@/plugins/axios.config';

export default {
  beforeRouteEnter (to, from, next) {
    if(localStorage.getItem('token') == null){
      next()
    }else{
      next("/")
    }
  },
 data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        async loginUser() {
            if (this.username == "" || this.password.length < 4) {
                alert("email should not be empty and password must contain at least 6 characters");
                return;
            }

            try {
                const user = {
                    username: this.username,
                    password: this.password,
                };
                const response = await axios.post("/login", user);
                localStorage.setItem("token" , response.data.token)
                localStorage.setItem("user" , JSON.stringify(response.data.user))
                this.$store.commit('setUser', response.data.user)
                this.$store.commit('setToken', response.data.token)
                this.$router.push({path: "/profile"})
            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>

<style>
.login{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
}
.card-body a{
    color: #2c3e50;
    margin: 1rem auto 0 auto;
    width: fit-content;
    cursor: pointer;
}
.card-body a:hover{
    color: var(--blue);
    text-decoration: none;
}
</style>