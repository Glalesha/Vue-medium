import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },

  getters: {},

  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },

  actions: {
    fetchPosts({ commit }) {
      axios.get("http://localhost:3000/posts").then((res) => {
        commit("SET_POSTS", res.data.posts.posts);
      });
    },
  },
});
