<template>
  <section class="produtos-container">
    <div v-if="produtos && produtos.length" class="produtos">
      <div v-for="produto in produtos" :key="produto.id" class="produto">
        <router-link to="/">
          <img
            v-if="produto.fotos"
            :src="produto.fotos[0].src"
            alt=""
            aria-hidden="true"
          />
          <p class="preco">{{ produto.preco }}</p>
          <h2 class="titulo">{{ produto.nome }}</h2>
          <p class="descricao">{{ produto.descricao }}</p>
        </router-link>
      </div>
    </div>
    <div v-else-if="produtos && produtos.length === 0">
      <p class="sem-resultados">Nenhum produto encontrado</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";

export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/produto?_limit=${this.produtosPorPagina}${query}`;
    },
  },
  methods: {
    getProdutos() {
      api.get(this.url).then(({ data }) => (this.produtos = data));
    },
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.produtos-container {
  max-width: 100rem;
  margin: 0 auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 3rem;
}

.produto {
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.4rem;
  box-shadow: 0 0.4rem 0.8rem rgba(30, 60, 90, 0.1);
  transition: 0.25s;
}

.produto:hover {
  box-shadow: 0 0.6rem 1.2rem rgba(30, 60, 90, 0.25);
  transform: translateY(-0.2rem);
}

.produto img {
  border-radius: 0.4rem;
  margin-bottom: 2rem;
}

.titulo {
  margin-bottom: 1rem;
}

.preco {
  color: #e80;
  font-weight: 700;
}

.sem-resultados {
  text-align: center;
}
</style>
