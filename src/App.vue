<template>
  <div id="app">
    <Navigation :auth="auth"/>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navigation from "./components/Navigation.vue";

export default {
  name: "app",
  components: {
    Navigation
  },
  data() {
   return { auth: false }
  },
  computed: {

  },
  methods: {
    ...mapActions({
        clearAlert: 'alert/clear' 
    })
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-direction: column;
  min-height: 100%;
  background-color: rgba(175, 202, 196, 0.16);
  display: flex;;
}

* {
  box-sizing: border-box;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

article,
header,
main,
nav,
section {
  display: flex;
}

main {
  max-width: 960px;
  margin: auto;
  flex-grow: 1;
  padding: 10px 0 50px;
}

.container {
  width: 90%;
  margin: auto;
  max-width: 960px;
}
.vertical {
  flex-direction: column;
}

.alert {
  position: absolute !important;
  left: 40em;
}
</style>
