import axios from 'axios';

const api_url = "https://yt3w800ur0.execute-api.us-west-2.amazonaws.com/";
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
      axios.get(api_url + 'products').then((response)=>{
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
