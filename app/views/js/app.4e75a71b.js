(function(t){function e(e){for(var r,i,o=e[0],s=e[1],u=e[2],l=0,b=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(b.length)b.shift()();return n.push.apply(n,u||[]),c()}function c(){for(var t,e=0;e<n.length;e++){for(var c=n[e],r=!0,o=1;o<c.length;o++){var s=c[o];0!==a[s]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=c[0]))}return t}var r={},a={app:0},n=[];function i(e){if(r[e])return r[e].exports;var c=r[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=t,i.c=r,i.d=function(t,e,c){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(c,r,function(e){return t[e]}.bind(null,r));return c},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=s;n.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"30a1":function(t,e,c){},"38bf":function(t,e,c){"use strict";c("e79a")},"398c":function(t,e,c){"use strict";c("96ec")},4054:function(t,e,c){"use strict";c("69e4")},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var r=c("7a23"),a={id:"app"},n={class:"container"},i={class:"columns"},o={class:"column is-3"},s={class:"column is-9"};function u(t,e,c,u,d,l){var b=Object(r["n"])("CartList"),m=Object(r["n"])("ProductList");return Object(r["i"])(),Object(r["d"])("div",a,[Object(r["e"])("div",n,[Object(r["e"])("div",i,[Object(r["e"])("div",o,[Object(r["g"])(b)]),Object(r["e"])("div",s,[Object(r["g"])(m)])])])])}var d=function(t){return Object(r["k"])("data-v-6ad2bdf0"),t=t(),Object(r["j"])(),t},l={id:"cart"},b=d((function(){return Object(r["e"])("div",{class:"cart--header has-text-centered"},[Object(r["e"])("i",{class:"fa fa-2x fa-shopping-cart"})],-1)})),m={key:0,class:"cart-empty-text has-text-centered"},p={key:1},f={class:"cart-details"},O=Object(r["f"])(" Total Quantity: "),j={class:"has-text-weight-bold"},v=d((function(){return Object(r["e"])("i",{class:"fa fa-trash"},null,-1)})),I=Object(r["f"])("Remove all "),h=[v,I],g=["disabled"],y=Object(r["f"])(" Checkout ("),C={class:"has-text-weight-bold"},_=Object(r["f"])(") ");function T(t,e,c,a,n,i){var o=Object(r["n"])("CartListItem");return Object(r["i"])(),Object(r["d"])("div",l,[b,t.cartItems.length?Object(r["c"])("",!0):(Object(r["i"])(),Object(r["d"])("p",m," Add some items to the cart! ")),t.cartItems.length?(Object(r["i"])(),Object(r["d"])("ul",p,[(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["m"])(t.cartItems,(function(t){return Object(r["i"])(),Object(r["d"])("li",{key:t.id,class:"cart-item"},[Object(r["g"])(o,{cartItem:t},null,8,["cartItem"])])})),128)),Object(r["e"])("div",f,[Object(r["e"])("p",null,[O,Object(r["e"])("span",j,Object(r["o"])(t.cartQuantity),1)]),Object(r["e"])("p",{onClick:e[0]||(e[0]=function(){return t.removeAllCartItems&&t.removeAllCartItems.apply(t,arguments)}),class:"cart-remove-all--text"},h)])])):Object(r["c"])("",!0),Object(r["e"])("button",{disabled:!t.cartItems.length,class:"button is-primary"},[y,Object(r["e"])("span",C,"$"+Object(r["o"])(t.cartTotal),1),_],8,g)])}var x=c("5530"),P=c("5502"),w={class:"cart-item--title is-inline"},A={class:"is-pulled-right"},k={class:"cart-item--content"},E={class:"cart-item--price has-text-primary has-text-weight-bold"},L={class:"cart-item--quantity has-text-grey is-pulled-right"};function S(t,e,c,a,n,i){return Object(r["i"])(),Object(r["d"])("div",null,[Object(r["e"])("p",w,Object(r["o"])(c.cartItem.title),1),Object(r["e"])("div",A,[Object(r["e"])("i",{onClick:e[0]||(e[0]=function(e){return t.addCartItem(c.cartItem)}),class:"fa fa-arrow-circle-up cart-item--modify"}),Object(r["e"])("i",{onClick:e[1]||(e[1]=function(e){return t.removeCartItem(c.cartItem)}),class:"fa fa-arrow-circle-down cart-item--modify"})]),Object(r["e"])("div",k,[Object(r["e"])("span",E,Object(r["o"])(c.cartItem.price)+"$ each ",1),Object(r["e"])("span",L," Quantity: "+Object(r["o"])(c.cartItem.quantity),1)])])}var M={name:"CartListItem",props:["cartItem"],methods:Object(x["a"])({},Object(P["b"])(["addCartItem","removeCartItem"]))},D=(c("4054"),c("6b0d")),U=c.n(D);const R=U()(M,[["render",S],["__scopeId","data-v-5c4df257"]]);var Q=R,q={name:"CartList",components:{CartListItem:Q},computed:Object(x["a"])({},Object(P["c"])(["cartItems","cartTotal","cartQuantity"])),methods:Object(x["a"])({},Object(P["b"])(["removeAllCartItems"])),created:function(){this.$store.dispatch("getCartItems")}};c("b08f");const $=U()(q,[["render",T],["__scopeId","data-v-6ad2bdf0"]]);var J=$,F=function(t){return Object(r["k"])("data-v-232b5524"),t=t(),Object(r["j"])(),t},z={id:"products",class:"box"},B=F((function(){return Object(r["e"])("div",{class:"products--header has-text-centered"},[Object(r["e"])("i",{class:"fa fa-2x fa-user-circle"})],-1)})),G={class:"product-list"},H=F((function(){return Object(r["e"])("div",{class:"product-count has-text-right"},[Object(r["e"])("span",{class:"has-text-weight-bold"},"# of products: 4")],-1)}));function K(t,e,c,a,n,i){var o=Object(r["n"])("ProductListItem");return Object(r["i"])(),Object(r["d"])("div",z,[B,Object(r["e"])("div",G,[(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["m"])(t.productItems,(function(t){return Object(r["i"])(),Object(r["d"])("div",{key:t.id,class:"product-list--item"},[Object(r["g"])(o,{productItem:t},null,8,["productItem"])])})),128))]),H])}c("a4d3"),c("e01a");var N=function(t){return Object(r["k"])("data-v-04d4cdee"),t=t(),Object(r["j"])(),t},V={class:"has-text-weight-bold"},W={class:"has-text-primary has-text-weight-bold"},X=N((function(){return Object(r["e"])("i",{class:"fa fa-usd"},null,-1)}));function Y(t,e,c,a,n,i){return Object(r["i"])(),Object(r["d"])("div",null,[Object(r["e"])("h2",V,[Object(r["f"])(Object(r["o"])(c.productItem.title)+" ",1),Object(r["e"])("span",{onClick:e[0]||(e[0]=function(e){return t.addCartItem(c.productItem)}),class:"tag is-primary is-pulled-right has-text-white"}," Add to Cart ")]),Object(r["e"])("p",null,Object(r["o"])(c.productItem.description),1),Object(r["e"])("span",W,[X,Object(r["f"])(" "+Object(r["o"])(c.productItem.price),1)])])}var Z={name:"ProductListItem",props:["productItem"],methods:Object(x["a"])({},Object(P["b"])(["addCartItem"]))};c("38bf");const tt=U()(Z,[["render",Y],["__scopeId","data-v-04d4cdee"]]);var et=tt,ct={name:"ProductList",components:{ProductListItem:et},computed:Object(x["a"])({},Object(P["c"])(["productItems"])),created:function(){this.$store.dispatch("getProductItems")}};c("398c");const rt=U()(ct,[["render",K],["__scopeId","data-v-232b5524"]]);var at=rt,nt={name:"App",components:{CartList:J,ProductList:at}};c("c615");const it=U()(nt,[["render",u]]);var ot=it,st=(c("b680"),c("d3b7"),c("bc3a")),ut=c.n(st),dt={cartItems:[]},lt={UPDATE_CART_ITEMS:function(t,e){t.cartItems=e}},bt={getCartItems:function(t){var e=t.commit;ut.a.get("/api/cart").then((function(t){e("UPDATE_CART_ITEMS",t.data)}))},addCartItem:function(t,e){var c=t.commit;ut.a.post("/api/cart",e).then((function(t){c("UPDATE_CART_ITEMS",t.data)}))},removeCartItem:function(t,e){var c=t.commit;ut.a.post("/api/cart/delete",e).then((function(t){c("UPDATE_CART_ITEMS",t.data)}))},removeAllCartItems:function(t){var e=t.commit;ut.a.post("/api/cart/delete/all").then((function(t){e("UPDATE_CART_ITEMS",t.data)}))}},mt={cartItems:function(t){return t.cartItems},cartTotal:function(t){return t.cartItems.reduce((function(t,e){return e.quantity*e.price+t}),0).toFixed(2)},cartQuantity:function(t){return t.cartItems.reduce((function(t,e){return e.quantity+t}),0)}},pt={state:dt,mutations:lt,actions:bt,getters:mt},ft=pt,Ot={productItems:[]},jt={UPDATE_PRODUCT_ITEMS:function(t,e){t.productItems=e}},vt={getProductItems:function(t){var e=t.commit;ut.a.get("/api/products").then((function(t){e("UPDATE_PRODUCT_ITEMS",t.data)}))}},It={productItems:function(t){return t.productItems}},ht={state:Ot,mutations:jt,actions:vt,getters:It},gt=ht,yt=Object(P["a"])({modules:{cart:ft,product:gt}});Object(r["b"])(ot).use(yt).mount("#app")},"69e4":function(t,e,c){},"96ec":function(t,e,c){},b08f:function(t,e,c){"use strict";c("30a1")},c615:function(t,e,c){"use strict";c("eeaa")},e79a:function(t,e,c){},eeaa:function(t,e,c){}});
//# sourceMappingURL=app.4e75a71b.js.map