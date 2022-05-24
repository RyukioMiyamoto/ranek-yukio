<template>
  <div class="produto" v-if="produto">
    <router-link :to="{ name: 'produto', params: { id: produto.id } }"
      ><img
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].src"
        v-if="produto.fotos"
      />
      <p>Ver Produto</p></router-link
    >
    <div class="info">
      <p class="preco">{{ produto.preco | numeroPreco }}</p>
      <h2 class="titulo">{{ produto.nome }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdutoItem",
  props: ["produto"],
};
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: minmax(10rem, 20rem) 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
}

.info {
  align-self: end;
}

.produto-img {
  border-radius: .4rem;
  overflow: hidden;
  height: 10rem;
}
</style>
