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
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
  },
  actions: {
    getUsuario(context, payload) {
      return api.get(`/usuario/${payload}`).then((res) => {
        context.commit("UPDATE_USUARIO", res.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    criarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.email });
      return api.post("/usuario", payload);
    },
  },
  modules: {},
});
