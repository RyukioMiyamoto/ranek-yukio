<template>
  <section>
    <div v-if="produto" class="produto">
      <ul class="fotos" v-if="produto.fotos">
        <li v-for="(foto, i) in produto.fotos" :key="foto.titulo + i">
          <img :src="foto.src" :alt="foto.titulo" />
        </li>
      </ul>
      <div class="info">
        <h1 class="titulo">{{ produto.nome }}</h1>
        <p class="preco">{{ produto.preco | numeroPreco }}</p>
        <p class="descricao">{{ produto.descricao }}</p>
        <transition v-if="produto.vendido === 'false'" mode="out-in">
          <button class="btn" v-if="!finalizar" @click="finalizar = true">
            Comprar
          </button>
          <FinalizarCompra v-else :produto="produto" />
        </transition>
        <button class="btn" v-else disabled>Produto vendido</button>
      </div>
    </div>
    <PaginaCarregando v-else />
  </section>
</template>

<script>
import { api } from "@/services";
import FinalizarCompra from "@/components/FinalizarCompra";

export default {
  name: "ProdutoView",
  props: ["id"],
  components: {
    FinalizarCompra,
  },
  data() {
    return {
      produto: null,
      finalizar: false,
    };
  },
  methods: {
    getProduto() {
      api.get(`/produto/${this.id}`).then((res) => {
        this.produto = res.data;
      });
    },
  },
  created() {
    this.getProduto();
  },
};
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 90rem;
  margin: 0 auto;
}

.info,
.fotos {
  padding: 2rem;
}

.preco {
  font-size: 2.4rem;
  font-weight: 700;
  color: #e80;
}

.descricao {
  padding: 3rem 0;
  font-size: 2rem;
}

.btn:hover,
.btn:focus {
  transform: translateX(0.4rem);
}
</style>
