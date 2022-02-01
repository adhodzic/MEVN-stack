<template>
  <div class="register">
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            v-model="username"
            type="username"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button @click="registerUser" class="btn btn-primary">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios.config';

export default {
  beforeRouteEnter: (to, from, next) => {
    if (localStorage.getItem("token") == null) {
      next();
    } else {
      next("/");
    }
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async registerUser() {
      if (this.username == "" || this.password.length < 4) {
        alert(
          "email should not be empty and password must contain at least 4 characters"
        );
        return;
      }

      try {
        const user = {
          username: this.username,
          password: this.password,
        };
        const response = await axios.post(
          "/register",
          user
        );
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        this.$store.commit("setUser", response.data.user);
        this.$store.commit("setToken", response.data.token);
        this.$router.push({ path: "/profile" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
label {
  font-size: 20px;
}
.register {
  display: flex;
  justify-content: center;
  padding: 100px 0 0 0;
}
.card {
  width: 400px;
}
</style>
