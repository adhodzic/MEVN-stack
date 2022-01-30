<template>
  <div class="home">
    <h1>This is home page</h1>
  </div>
</template>

<script>

export default {
  name: "Home",
  beforeRouteEnter: (to, from, next) => {
    if (localStorage.getItem('token') != null) {
      next();
    } else {
      next("/login");
    }
  },
  components: {
  },
};
</script>
