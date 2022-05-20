<template>
  <section>
    <form class="login">
      <h1>Login</h1>
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="login.email"
        required
      />
      <label for="senha">Senha</label>
      <input
        type="password"
        name="senha"
        id="senha"
        v-model="login.senha"
        required
      />
      <button class="btn" @click.prevent="logar">Logar</button>
      <a href="/" target="_blank" class="perdeu"
        >Perdeu a senha? Clique aqui.</a
      >
      <LoginCriar />
    </form>
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar";

export default {
  name: "LoginView",
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },
  components: {
    LoginCriar,
  },
  methods: {
    logar() {},
  },
};
</script>

<style scoped>
.login {
  max-width: 50rem;
  padding: 0 2rem;
  margin: 0 auto;
}

form {
  display: grid;
}

h1 {
  text-align: center;
  font-size: 3.2rem;
  color: #84f;
  margin: 4rem auto;
}

.btn {
  width: 100%;
  max-width: 30rem;
  margin: 1rem auto 4rem auto;
}

.perdeu {
  text-align: center;
  margin: 0 auto;
}
</style>
