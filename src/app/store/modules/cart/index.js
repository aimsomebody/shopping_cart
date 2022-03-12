import axios from "axios";

const api_url = "https://sc-sls.vercel.app/";
const state = {
  cartItems: [],
};
const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
};

const actions = {
  getCartItems({ commit }) {
    axios.get(api_url + "cart").then((response) => {
      const element = document.querySelector("div#app");
      element.classList.add("bar");
      commit("UPDATE_CART_ITEMS", response.data);
      var products_loaded = document.getElementsByClassName("product-list--item");
      if (products_loaded.length > 0) {
        var x = document.getElementById("app");
        x.style.display = "block";
      }
    });
  },
  addCartItem({ commit }, cartItem) {
    axios.post(api_url + "cart", cartItem).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  removeCartItem({ commit }, cartItem) {
    axios.post(api_url + "/cart/delete", cartItem).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  removeAllCartItems({ commit }) {
    axios.post(api_url + "cart/delete/all").then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
};

const getters = {
  cartItems: (state) => state.cartItems,
  cartTotal: (state) => {
    return state.cartItems
      .reduce((acc, cartItem) => {
        return cartItem.quantity * cartItem.price + acc;
      }, 0)
      .toFixed(2);
  },
  cartQuantity: (state) => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  },
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
