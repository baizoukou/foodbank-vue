<template>
  <header>
    <nav class="container">
      <ul class="navigation" role="navigation">
        <router-link tag="a" to="/">Home</router-link>
      </ul>
      <ul v-if="status.loggedIn === true">
        <a href="logout" v-on:click.prevent="signOut">Logout</a>
      </ul>
      <ul v-else>
        <router-link tag="a" to="/login">Login</router-link>
        <router-link tag="a" to="/register">Sign Up</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import {checkAuth} from '../helpers/auth';

export default {
  name: "navigation",
  props: ["auth"],
  data() {
    return {
      isLoggedin: false
    }
  },
  mounted() {
    this.isLoggedin = checkAuth();
  },
  computed: {
    ...mapState('auth', ['status'])
  },
  methods: {
    ...mapActions('auth', ['logout']),
    signOut() {
     this.logout()
    }
  }
};
</script>

<style lang="css" scoped>
header {
  background-color: #00c19a;
}

nav {
  justify-content: space-between;
}
.navigation {
  width: 50%;
  display: flex;
}

a {
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  color: #242626;
  text-decoration: none;
}
</style>
