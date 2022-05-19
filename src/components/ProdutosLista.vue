<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0].src"
        alt=""
        aria-hidden="true"
      />
      <h2 class="titulo">{{ produto.nome }}</h2>
      <p class="preco">{{ produto.preco }}</p>
      <p class="descricao">{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: null,
    };
  },
  methods: {
    async getProdutos() {
      const res = await fetch("http://localhost:3000/produto");
      const data = await res.json();
      this.produtos = data;
    },
  },
  created() {
    this.getProdutos(); 
  },
};
</script>

<style></style>
