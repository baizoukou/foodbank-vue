<template>
  <div id="login" class="login-form-container">
    <form @submit.prevent="handleSubmit">
      <h2 class="form-header">Login</h2>
      <div class="form-element">
        <label for="email">Email</label>
        <input v-model="user.email" id="email" required="true">
      </div>
      <div class="form-element">
        <label for="password">Password</label>
        <input v-model="user.password" type="password" id="password" required="true">
      </div>
      <div class="form-element">
        <button class="btn" type="submit">login</button>
      </div> 
    </form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: "login",
    data() {
      return {
        user: {
          email: "",
          password: "",
        },
        submitted: false,
      }
    },
    computed: {
      ...mapState('auth', ['status'])
    },
    methods: {
      ...mapActions('auth', ['login']),
      handleSubmit(e) {
        this.submitted = true;
        this.login(this.user)
      }
    },
  };
</script>


<style scoped>
  .form-element input,
  select,
  button {
    padding: 10px;
    border-radius: 4px;
    border: none;
  }

  button {
    background-color: #00c19a;
  }

  form {
    width: 50%;
  }

  .form-header {
    text-align: center;
  }

  .login-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%
  }

  .form-element {
    width: 70%;
    margin: 10px auto;
  }

  .form-element label {
    font-size: 12px;
    padding: 0px !important;
  }

  .form-element input, button {
    width: 100% !important;
  }
</style>