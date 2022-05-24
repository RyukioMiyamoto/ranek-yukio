import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    usuario: {
      id: "",
      email: "",
      nome: "",
      senha: "",
      rua: "",
      cep: "",
      numero: "",
      estado: "",
      cidade: "",
    },
    usuario_produtos: null,
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos = payload;
    },
    ADD_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos.unshift(payload);
    },
  },
  actions: {
    criarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.email });
      return api.post("/usuario", payload);
    },
    getUsuario(context, payload) {
      return api.get(`/usuario/${payload}`).then((res) => {
        context.commit("UPDATE_USUARIO", res.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    getUsuarioProdutos(context) {
      api.get(`/produto?usuario_id=${context.state.usuario.id}`).then((res) => {
        context.commit("UPDATE_USUARIO_PRODUTOS", res.data);
      });
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", {
        id: "",
        email: "",
        nome: "",
        senha: "",
        rua: "",
        cep: "",
        numero: "",
        estado: "",
        cidade: "",
      });
      context.commit("UPDATE_LOGIN", false);
    },
  },
  modules: {},
});
