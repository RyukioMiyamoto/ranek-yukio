import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";
import ProdutoView from "@/views/ProdutoView";
import LoginView from "@/views/LoginView";
import UsuarioView from "@/views/usuario/UsuarioView";
import UsuarioProdutos from "@/views/usuario/UsuarioProdutos";
import UsuarioCompras from "@/views/usuario/UsuarioCompras";
import UsuarioVendas from "@/views/usuario/UsuarioVendas";
import UsuarioEditar from "@/views/usuario/UsuarioEditar";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: ProdutoView,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/usuario",
    component: UsuarioView,
    children: [
      {
        path: "",
        name: "usuario",
        component: UsuarioProdutos,
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras,
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas,
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
