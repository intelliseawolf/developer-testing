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
            console.log(data);
            state.data = data;
        },
    },
    actions: {
        fetchData({ commit }, data) {
            return axios
                .get("http://localhost:8000/api/data", { params: data })
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
