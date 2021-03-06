import Vue from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store";
import PaginaCarregando from "@/components/PaginaCarregando";

Vue.config.productionTip = false;
Vue.component("PaginaCarregando", PaginaCarregando);
Vue.filter("numeroPreco", (valor) => {
  valor = Number(valor);
  return isNaN(valor)
    ? 0
    : valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
