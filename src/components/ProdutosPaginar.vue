<template>
  <ul v-if="paginasTotal > 1">
    <li v-if="!paginas.includes(1)">
      <router-link :to="{ query: query(1) }">1</router-link>
      <span v-if="currentPage > 4">...</span>
    </li>
    <li v-for="pagina in paginas" :key="`pagina${pagina}`">
      <router-link :to="{ query: query(pagina) }">{{ pagina }} </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProdutosPaginar",
  data() {
    return {
      current: 0,
    };
  },
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
    paginas() {
      const range = 6;
      const offset = Math.ceil(range / 2);
      const total = this.paginasTotal;
      const pagesArray = [];

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, this.currentPage - offset);

      return pagesArray;
    },

    paginasTotal() {
      const total = Math.ceil(this.produtosTotal / this.produtosPorPagina);

      return total !== Infinity ? total : 0;
    },

    currentPage() {
      return Number(this.$route.query._page);
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
