<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProdutosAdicionar />
    <h2>Seus Produtos</h2>
    <transition-group tag="ul" v-if="usuario_produtos" name="list">
      <li v-for="(produto, i) in usuario_produtos" :key="produto + i">
        <ProdutoItem :produto="produto">
          <p>{{ produto.descricao }}</p>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutosAdicionar from "@/components/ProdutosAdicionar";
import ProdutoItem from "@/components/ProdutoItem";
import { mapActions, mapState } from "vuex";

export default {
  name: "UsuarioProdutos",
  components: {
    ProdutosAdicionar,
    ProdutoItem,
  },
  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"]),
  },
  methods: {
    ...mapActions(["getUsuarioProdutos"]),
  },
  watch: {
    login() {
      this.getUsuarioProdutos();
    },
  },
  created() {
    this.login && this.getUsuarioProdutos();
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 2rem;
}
</style>
