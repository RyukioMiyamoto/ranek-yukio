<template>
  <section>
    <h2>Crie sua conta Ranek</h2>
    <transition mode="out-in">
      <button v-if="!criar" @click="criar = true" class="btn">
        Criar conta
      </button>
      <UsuarioForm v-else>
        <button class="btn btn-form" @click.prevent="criarUsuario">
          Criar Usuário
        </button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm";

export default {
  name: "LoginCriar",
  components: {
    UsuarioForm,
  },
  data() {
    return {
      criar: true,
    };
  },
  methods: {
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
        await this.$store.dispatch(
          "getUsuario",
          this.$store.state.usuario.email
        );
        this.$router.push({ name: "usuario" });
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 4rem auto 1rem auto;
}

.btn {
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
}

.btn-form {
  max-width: 100%;
}
</style>
