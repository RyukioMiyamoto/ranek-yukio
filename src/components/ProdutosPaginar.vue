<template>
  <ul v-if="paginasTotal">
    <li v-for="pagina in paginasTotal" :key="`pagina${pagina}`">
      <router-link :to="{ query: query(pagina) }">{{ pagina }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProdutosPaginar",
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
    produtosTotal: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    paginasTotal() {
      const total = Math.ceil(this.produtosTotal / this.produtosPorPagina);

      return total !== Infinity ? total : 0;
    },
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
}
li {
  display: inline-block;
}

li a {
  padding: 1rem 1.5rem;
  border-radius: 0.2rem;
  font-size: 1.6rem;
  margin: 0.4rem;
  transition: 0.25s;
}

li a:hover,
li a.router-link-exact-active {
  background-color: #87f;
  color: #fff;
}
</style>
