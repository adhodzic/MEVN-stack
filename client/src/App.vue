<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">MEVN Stack App</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="getToken" :to="{name: 'Home'}">Home</b-nav-item>
          <b-nav-item v-if="getToken && getUser.role == 'Admin'" :to="{name: 'Dashboard'}">Dashboard</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form v-if="currentRouteName == 'Home'">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown v-if="getUser" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{getUser.username}}</em>
            </template>
            <b-dropdown-item :to="{path: '/profile'}">Profile</b-dropdown-item>
            <b-dropdown-item @click="signout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
/* import axios from '@/plugins/axios.config'; */
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getUser',
      'getToken'
    ]),
    currentRouteName() {
        return this.$route.name;
    }
  },
  methods: {
    /* async getRoles(){
      const res = await axios.get("/roles")
      const arr = res.data;
      const transformedArr = arr.map((e)=>{
        return {
          name: e.name,
          role: e.roleID
        }
      })
      console.log(transformedArr);
      this.$store.commit('setRoles', transformedArr)
    }, */
    signout(){
      localStorage.clear();
      this.$store.commit('resetToken');
      this.$router.push({path: '/login'})
    }
  },
  mounted() {
    /* this.getRoles(); */
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container{
  padding-top: 2rem;
  word-wrap: break-word;
}
li.form-inline{
  justify-content: center;
}
form.form-inline{
  justify-content: center;
  flex-flow: row !important;
}
.form-control-sm{
  margin-right: 0.5rem;
}
</style>
