import { createStore } from "vuex";
import   cart from './modules/cart/index.js';
import  product from './modules/product/index.js';

export default createStore({
    modules:{
        cart,
        product,  
    },
});