<template>
  <section>
    <form class="login">
      <h1>Login</h1>
      <p>{{ !this.$store.state.login ? "" : "Logou" }}</p>
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
      <p class="perdeu">
        Perdeu a senha?<a href="/" target="_blank" class="perdeu-link">
          Clique aqui.</a
        >
      </p>
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
    logar() {
      this.$store.dispatch("getUsuario", this.login.email);
      this.$router.push({ name: "usuario" });
    },
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
  transition: 0.25s;
}

.perdeu-link {
  display: inline-block;
  font-weight: 600;
}

.perdeu-link::after {
  display: block;
  content: "";
  height: 0.1rem;
  background-color: currentColor;
  transform: scaleX(0);
  transition: transform 0.25s;
  transform-origin: right;
}

.perdeu-link:hover,
.perdeu-link:focus {
  color: #84f;
}

.perdeu-link:hover::after,
.perdeu-link:focus::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
