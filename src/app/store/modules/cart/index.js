import axios from "axios";

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
    axios.get("https://g0rpibk5w8.execute-api.eu-north-1.amazonaws.com/cart").then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  addCartItem({ commit }, cartItem) {
    axios.post("https://g0rpibk5w8.execute-api.eu-north-1.amazonaws.com/cart", cartItem).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  removeCartItem({ commit }, cartItem) {
    axios.post("https://g0rpibk5w8.execute-api.eu-north-1.amazonaws.com/cart/delete", cartItem).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  removeAllCartItems({ commit }) {
    axios.post("https://g0rpibk5w8.execute-api.eu-north-1.amazonaws.com/cart/delete/all").then((response) => {
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
  cartQuantity: state=>{
    return state.cartItems.reduce((acc,cartItem)=>{
      return cartItem.quantity + acc;
    },0);
  },
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
