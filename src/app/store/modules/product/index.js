import axios from "axios";

const api_url = "https://sc-sls.vercel.app/";
const state = {
  productItems: [],
};

const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
};

const actions = {
  getProductItems({ commit }) {
    axios.get(api_url + "products").then((response) => {
      commit("UPDATE_PRODUCT_ITEMS", response.data);
      var products_loaded = document.getElementsByClassName("bar");
      if (products_loaded.length > 0) {
        var x = document.getElementById("app");
        x.style.display = "block";
      }
    });
  },
};

const getters = {
  productItems: (state) => state.productItems,
};

const productModule = {
  state,
  mutations,
  actions,
  getters,
};

export default productModule;
