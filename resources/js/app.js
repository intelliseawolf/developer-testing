require("./bootstrap");

import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

import router from "./router";
import store from "./store";
import App from "./App.vue";

Vue.use(VueAxios, axios);

new Vue({
    el: "#app",
    store,
    router,
    render: (h) => h(App),
});
