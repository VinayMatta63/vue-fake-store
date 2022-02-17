import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
    cart: [],
    productData: null,
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setCart(state, payload) {
      state.cart = payload;
    },
    setProductData(state, payload) {
      state.productData = payload;
    },
    addToCart(state, payload) {
      const savedProduct = state.cart.filter((item) => item.id == payload.id);
      if (savedProduct.length > 0) {
        state.cart[state.cart.indexOf(savedProduct[0])].quantity += 1;
      } else {
        payload.quantity = 1;
        state.cart.push(payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, payload) {
      const savedProduct = state.cart.filter((item) => item.id == payload.id);
      if (savedProduct[0].quantity > 1) {
        state.cart[state.cart.indexOf(savedProduct[0])].quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id != payload.id);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      return axios
        .get("https://fakestoreapi.com/products?limit=20")
        .then((res) => {
          commit("setProducts", res.data);
        })
        .catch((err) => console.log(err));
    },
    fetchProductById: async ({ commit }, payload) => {
      return axios
        .get("https://fakestoreapi.com/products/" + payload)
        .then((res) => {
          commit("setProductData", res.data);
        })
        .catch((err) => console.log(err));
    },
    addToCart: ({ commit }, payload) => {
      commit("addToCart", payload);
    },
    removeFromCart: ({ commit }, payload) => {
      commit("removeFromCart", payload);
    },
    clearCart: ({ commit }) => {
      localStorage.clear();
      commit("clearCart");
    },
    setCart: ({ commit }, payload) => {
      commit("setCart", payload);
    },
  },
  getters: {
    cartTotal(state) {
      return state.cart
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2);
    },
    getProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    },
    getProductData(state) {
      return state.productData;
    },
  },
  modules: {},
});
