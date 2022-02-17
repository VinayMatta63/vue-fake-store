<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/cart">Cart</router-link>
  </div>
  <router-view />
</template>

<script>
import { watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    watchEffect(() => {
      const cart = localStorage.getItem("cart");
      if (cart) {
        store.dispatch("setCart", JSON.parse(cart));
      }
    });
  },
};
</script>

<style>
.loader {
  height: 400px;
  width: 600px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
