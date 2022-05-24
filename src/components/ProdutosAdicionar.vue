<template>
  <form class="adicionar-produto">
    <label for="nome">Nome</label
    ><input type="text" id="nome" name="nome" v-model="produto.nome" />
    <label for="preco">Preço&nbsp;(R$)</label
    ><input type="number" id="preco" name="preco" v-model="produto.preco" />
    <label for="fotos">Fotos</label
    ><input type="file" id="fotos" name="fotos" ref="fotos" />
    <label for="descricao">Descrição</label
    ><input
      type="textarea"
      id="descricao"
      name="descricao"
      v-model="produto.descricao"
    />
    <input
      type="button"
      value="Adicionar Produto"
      @click.prevent="adicionarProduto"
      class="btn"
    />
  </form>
</template>

<script>
import { api } from "@/services";

export default {
  name: "ProdutosAdicionar",
  data() {
    return {
      produto: {
        nome: "",
        preco: "",
        fotos: null,
        descricao: "",
        user_id: "",
      },
    };
  },
  methods: {
    adicionarProduto() {
      this.formatarProduto();
      api.post("/produto", this.produto).then(() => {
        this.$store.dispatch("getUsuarioProdutos");
      });
    },
    formatarProduto() {
      this.produto.user_id = this.$store.state.usuario.id;
    },
  },
};
</script>

<style scoped>
.adicionar-produto {
  display: grid;
  grid-template-columns: 12rem 1fr;
  align-items: center;
  margin-bottom: 6rem;
}

.btn {
  grid-column: 2;
}
</style>
