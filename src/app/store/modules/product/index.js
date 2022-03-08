import axios from 'axios';

const state = {
  productItems: [],
};

const mutations = {
  UPDATE_PRODUCT_ITEMS(state,payload){
    state.productItems = payload;
  }
};

const actions = {
  getProductItems({commit}){
      axios.get('https://g0rpibk5w8.execute-api.eu-north-1.amazonaws.com/products').then((response)=>{
        commit('UPDATE_PRODUCT_ITEMS', response.data);
      });
  },
};

const getters = {
  productItems: state=>state.productItems,
};

const productModule = {
  state,
  mutations,
  actions,
  getters,
};


export default productModule;
