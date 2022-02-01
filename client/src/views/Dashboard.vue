<template>
  <div class="dashboard">
      <h3>This page is only avaliable for admin users</h3>
  </div>
</template>

<script>
export default {
    beforeRouteEnter(from, to, next){
        console.log("Dashboard");
        const user = JSON.parse(localStorage.getItem("user"));
        if(user.role != 'Admin'){
            next('/')
        }
        next();
    }
}
</script>

<style>

</style>