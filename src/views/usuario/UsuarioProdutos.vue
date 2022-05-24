<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProdutosAdicionar />
    <h2>Seus Produtos</h2>
    <transition-group tag="ul" v-if="usuario_produtos" name="list">
      <li v-for="(produto, i) in usuario_produtos" :key="produto + i">
        <ProdutoItem :produto="produto">
          <p>{{ produto.descricao }}</p>
          <button class="deletar" @click="deletarProduto(produto.id)">
            Deletar Produto
          </button>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutosAdicionar from "@/components/ProdutosAdicionar";
import ProdutoItem from "@/components/ProdutoItem";
import { mapActions, mapState } from "vuex";
import { api } from "@/services";

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

    deletarProduto(id) {
      window.confirm("Deseja remover esse produto?") &&
        api
          .delete(`/produto/${id}`)
          .then(() => this.getUsuarioProdutos())
          .catch((err) => console.error(err));
    },
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

.deletar {
  width: 2.4rem;
  height: 2.4rem;
  text-indent: -14rem;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  background: url("../../assets/remove.svg") no-repeat center center;
  cursor: pointer;
  overflow: hidden;
  transition: 0.25s;
}

.deletar:hover,
.deletar:focus {
  transform: scale(1.25);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.25s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(2rem, 0, 0);
}
</style>
