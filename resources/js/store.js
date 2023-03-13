import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data: [],
    },
    mutations: {
        setData(state, data) {
            state.data = data;
        },
    },
    actions: {
        fetchData({ commit }) {
            return axios
                .get("http://localhost:8000/api/data")
                .then((response) => commit("setData", response.data))
                .catch((err) => console.log(err));
        },
    },
    getters: {
        getData(state) {
            return state.data;
        },
    },
});

export default store;
