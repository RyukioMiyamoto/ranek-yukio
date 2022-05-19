<template>
  <div>
    <h1>💸 Compre ou Venda 🤑</h1>
    <ProdutosBuscar />
    <ProdutosLista />
  </div>
</template>

<script>
import ProdutosBuscar from "@/components/ProdutosBuscar";
import ProdutosLista from "@/components/ProdutosLista";

export default {
  name: "HomeView",
  components: {
    ProdutosBuscar,
    ProdutosLista,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 3.2rem;
  color: #87f;
  margin-top: 4rem;
}
</style>
