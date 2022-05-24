<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li><router-link :to="{ name: 'usuario' }">Produtos</router-link></li>
        <li><router-link :to="{ name: 'compras' }">Compras</router-link></li>
        <li><router-link :to="{ name: 'vendas' }">Vendas</router-link></li>
        <li>
          <router-link :to="{ name: 'usuario-editar' }"
            >Editar usuário</router-link
          >
        </li>
        <li><button @click="logout">Logout</button></li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "UsuarioView",
  methods: {
    logout() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.usuario {
  display: grid;
  grid-template-columns: minmax(14rem, 20rem) 1fr;
  max-width: 90rem;
  margin: 4rem auto;
  gap: 3rem;
  padding: 2rem;
}

@media screen and (max-width: 48em) {
  .usuario {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }

  .sidenav ul {
    display: flex;
    gap: 1rem;
  }
}

.sidenav a,
.sidenav button {
  display: block;
  padding: 1rem;
  background-color: #f4f7fc;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
}
.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav a:focus,
.sidenav button:hover,
.sidenav button:focus {
  background-color: #87f;
  color: #fff;
}

.sidenav button {
  width: 100%;
  border: none;
  font-size: 1.6rem;
  text-align: left;
  font-family: inherit;
  cursor: pointer;
}
</style>
