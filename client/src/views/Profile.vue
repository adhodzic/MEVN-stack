<template>
    <div class="profile">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input v-model="username" type="username" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Username" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button @click="loginUser" class="btn btn-primary">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default({
  data(){
    return{
      username: "",
      password: ""
    }
  }
})
</script>

