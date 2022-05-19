<template>
  <form>
    <input
      type="text"
      name="busca"
      id="busca"
      v-model="busca"
      placeholder="Buscar..."
    />
    <input
      type="submit"
      id="lupa"
      value="Buscar"
      @click.prevent="buscarProdutos"
    />
  </form>
</template>

<script>
export default {
  name: "ProdutosBuscar",
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
      this.busca = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  max-width: 60rem;
  margin: 3rem auto 6rem auto;
  position: relative;
}

#busca {
  width: 100%;
  padding: 2rem;
  border: none;
  border-radius: 0.4rem;
  box-shadow: 0 0.6rem 0.8rem 0.5rem rgba(151, 156, 161, 0.1);
  transition: 0.375s ease-in-out;
  position: relative;
}

#busca:focus,
#busca:hover {
  box-shadow: 0 0.4rem 1rem 0.5rem rgba(30, 60, 90, 0.25);
}

#lupa {
  width: 6.2rem;
  height: 6.2rem;
  border: none;
  background-color: transparent;
  background: url("@/assets/search.svg") no-repeat center center;
  text-indent: -15rem;
  cursor: pointer;
  position: absolute;
  right: 0;
  transition: 0.125s;
  box-shadow: none;
}

#lupa:focus,
#lupa:hover {
  transform: scale(1.5);
}
</style>
